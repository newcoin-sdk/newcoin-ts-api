// EOS imports
import { RpcError } from "eosjs";
import { TransactResult } from "eosjs/dist/eosjs-api-interfaces";
import { ChainApi as PoolsRpcApi } from '@newfound8ion/newcoin.pools-js'
import { ActionGenerator as sdkActionGen, EosioActionObject } from "./L1/actions";

import { NCO_account_API } from "./L1/accounts";
import { NCO_daos_API } from "./L1/daos";
import { NCO_submit_API } from "./L1/submit";
import { NCO_pools_API } from "./L1/pools";
import { NCO_assets_API } from "./L1/assets";
import { NCO_read_API } from "./L1/reader";
import { NCO_tx_API } from "./L1/transfers";
import { NCO_utils_API } from "./utils";

import fetch from 'cross-fetch';

//@ts-ignore
import {
  NCKeyPair, 
  NCCreateUser, NCCreateCollection,
  NCCreatePool, NCStakePool, NCUnstakePool,
  NCStakeMainDao, NCBuyRam,
  NCCreateDao, NCGetDaoWhiteList, 
  NCCreateDaoProposal, NCCreateDaoUserWhitelistProposal, NCCreateDaoStakeProposal,
  NCApproveDaoProposal, NCExecuteDaoProposal, NCGetVotes, 
  NCGetDaoProposals, NCDaoProposalVote, NCDaoWithdrawVoteDeposit,
  NCCreatePermission, NCGetAccInfo, NCGetPoolInfo, NCLinkPerm,
  NCPoolsInfo, NCNameType, NCSwapNCOtoCC,
  NCReturnTxs, NCReturnInfo, NCTxBal, NCTxNcoBal, NCKeyValPair, NCMintBadge,
} from "./types";

import {
  NCMintAsset, NCMintNftToRoot, NCMintLink, NCMintFile, NCMintLike, NCChangeFile, NCModifyAsset, NCMintProfile
} from "./types";

// @ts-ignore
import { default_nft_schema, file_schema, link_schema, profile_schema, like_link_template, badge_link_template } from "./schemas"


export {
  NCKeyPair, NCKeyValPair,
  NCCreateUser, NCCreateCollection, NCBuyRam,
  NCCreatePool, NCStakePool, NCUnstakePool,
  NCStakeMainDao, 
  NCCreateDao, NCGetDaoWhiteList, NCCreateDaoProposal, NCCreateDaoUserWhitelistProposal, NCCreateDaoStakeProposal,
  NCApproveDaoProposal, NCExecuteDaoProposal, NCGetVotes, NCGetDaoProposals, NCDaoProposalVote, NCDaoWithdrawVoteDeposit,
  NCMintAsset,  NCMintLink, NCMintFile, NCCreatePermission,
  NCGetAccInfo, NCGetPoolInfo, NCLinkPerm,
  NCPoolsInfo, NCNameType,
  NCReturnTxs, NCReturnInfo, NCTxBal, NCTxNcoBal, NCChangeFile, NCModifyAsset, NCMintProfile,
  devnet_services, devnet_urls
};

export { default_nft_schema, link_schema, file_schema, profile_schema };

import { getClaimNftsActions, getClaimWinBidActions, getCreateAuctionActions, getEditAuctionActions, getEraseAuctionActions, getPlaceBidActions } from "./neftymarket";
import { NCClaimNftsParams, NCClaimWinBidParams, NCCreateAuctionParams, NCEditAuctionParams, NCEraseAuctionParams, NeftyMarketParamsBase, NCPlaceBidParams } from "./neftymarket/types";

import { NCInit, NCInitUrls, NCInitServices, devnet_urls, devnet_urls_prod, devnet_services } from "./system";


/**
 * The primary tool to interact with [https://newcoin.org](newcoin.org).
 * 
 * This is an early alpha.
 * 
 * See [https://docs.newcoin.org/](https://docs.newcoin.org/) for an overview of the newcoin ecosystem.
 */
export class NCO_BlockchainAPI {

  
  //@ts-ignore
  private urls: NCInitUrls;
  private services: NCInitServices;
  private debug: boolean = false;


  static defaults = {
    devnet_services,
    devnet_urls,
    devnet_urls_prod
  };

  static dev_init_arg: NCInit = {
    services: this.defaults.devnet_services,
    urls: this.defaults.devnet_urls,
    debug: true,
    is_proxy: false
  }

  public daos:       NCO_daos_API;
  public pools:      NCO_pools_API;
  public utils:      NCO_utils_API;
  public accounts:   NCO_account_API;
  public assets:     NCO_assets_API;
  public reader:     NCO_read_API;
  public submitter:  NCO_submit_API;
  public txer:       NCO_tx_API;
  
  private sdkGen: sdkActionGen;

  /**
   * Init the api
   * @name newcoin-api
   * @param urls
   * @param services 
   * @returns a Newcoin API instance
   */
  constructor( n: NCInit )
  {
    //super();
    this.debug      = n.debug;
    this.urls       = n.urls;
    this.services   = n.services;

    this.submitter  = new NCO_submit_API(n);
    this.reader     = new NCO_read_API(n);

    this.daos       = new NCO_daos_API(n);
    this.pools      = new NCO_pools_API(n);
    this.utils      = new NCO_utils_API(n);
    this.assets     = new NCO_assets_API(n);
    this.accounts   = new NCO_account_API(n);
    this.txer       = new NCO_tx_API(n);
    
    //this.hrpc       = new HJsonRpc(this.urls.hyperion_url, { fetch } as any);
    this.sdkGen     = new sdkActionGen(this.services.eosio_contract, this.services.token_contract);
    
  }

  async createUser(inpt: NCCreateUser) {
    const rc= this.accounts.createAccount(inpt);
    if((await rc).TxID_createAcc != undefined)
      this.createRootCollection(inpt.newUser, inpt.newacc_pub_active_key);
  }

  /**
   * Create default collection for the account and schemes
   * @param  name, key
   * @returns Create Collection and template transactions' ids
   */
  async createRootCollection(name: string, key: string) {

    let res:  NCReturnTxs = {};
    let tres: TransactResult;

    const collection_name     = this.utils.getRootCollectionName(name);
    const def_schema_name     = this.utils.getRootCollectionNftSchemaName(name);
    const link_sch_name       = this.utils.getRootCollectionLinkSchemaName(name);   
    const profile_schema_name = this.utils.getRootCollectionProfileSchemaName(name); 

    let mkt_fee = 0.05;
    let allow_notify = true;

    let t = this.sdkGen.createCollection( name, collection_name, [name], [name], mkt_fee, allow_notify );
    if(this.debug) console.log(t);
    if(this.debug) console.log("createcol transaction");
    tres = await this.submitter.SubmitTx([t], [], [key] ) as TransactResult;
    res.TxID_createCol = tres.transaction_id;
    if(this.debug) console.log(tres);

    // ---- Schemas --- 
    if(this.debug) console.log("creating default NFT schema for root collection ");
    let t1 = this.sdkGen.createSchema(name, collection_name, def_schema_name, default_nft_schema);
    if(this.debug) console.log(t1);
    if(this.debug) console.log("createsch NFT transaction");
    tres = await this.submitter.SubmitTx([t1],[],[key]) as TransactResult;
    res.TxID_createSch = tres.transaction_id;
    if(this.debug) console.log(tres);

    if(this.debug) console.log("creating profile schema");
    let t2 = this.sdkGen.createSchema(name,collection_name, profile_schema_name, profile_schema);
    if(this.debug) console.log(t2);
    if(this.debug) console.log("createsch profile transaction");
    tres = await this.submitter.SubmitTx([t2],[],[key]) as TransactResult;
    res.TxID_createSch = tres.transaction_id;
    if(this.debug) console.log(tres);

    if(this.debug) console.log("creating collection link schema");
    let t3 = this.sdkGen.createSchema(name, collection_name, link_sch_name, link_schema);
    if(this.debug) console.log(t3);
    if(this.debug) console.log("createsch collection bind transaction");
    tres = await this.submitter.SubmitTx([t3],[],[key]) as TransactResult;
    res.TxID_createSch = tres.transaction_id;
    if(this.debug) console.log(tres);

    if(this.debug) console.log("creating like template");
    let t4 = await this.createLikeTemplate(name, key);
    res.TxID_createTpl = t4.TxID_createTpl;
    res.template_id = t4.template_id;
    if(this.debug) console.log("created like template" );
    // create more templates
    return res;
  }

  
  /**
   * Bind collection to root collection
   * @param inpt: NCAddCollection
   * @returns Create NFT in the root collection referring to 
   */
  /*async mintLinkTemplate(inpt: NCMintLinkTemplate) {
    obj_type
    link_type
  } */
  async createLikeTemplate(name: string, key: string)
  {
    let xferable = false;
    let burnable = true;
    const t = this.sdkGen.createTemplate(
      name, 
      this.utils.getRootCollectionName( name ), 
      this.utils.getRootCollectionLinkSchemaName( name ), 
      xferable, burnable, 
      like_link_template
    );
   
    let tres = await this.submitter.SubmitTx([t],[],[key]) ;
    if(this.debug) console.log(tres);
    let rc: NCReturnTxs = {};
    rc.TxID_createTpl = tres.transaction_id;
    rc.template_id = (await this.reader.txToTemplateId(tres.transaction_id)).toString();
    return rc;

  }

  async mintLike(inpt: NCMintLike ) {
    // todo if no schema then create it

    const tId = await this.utils.getLinkSchemaLikeTemplateID(inpt.issuer);
    if (tId == undefined || tId == -1) this.createLikeTemplate(inpt.issuer, inpt.payer_prv_key);
    const value = inpt.value??"0";

    let s : NCMintAsset = {
      creator:  inpt.issuer,
      col_name: this.utils.getRootCollectionName( inpt.issuer ), // root collection
      sch_name: this.utils.getRootCollectionLinkSchemaName(inpt.issuer), // bind schema
      tmpl_id:  tId,
      //this.utils.getLinkSchemaLikeTemplateName(inpt.creator),
      // object: account name
      immutable_data: [   
        {'key': 'subj_name',   'value': ['string', inpt.subj_name]},
        {'key': 'subj_type', 'value': ['string', inpt.subj_type]},   
        {'key': 'prop_val', 'value': ['string', value]} 
      ],
      mutable_data: [],
      payer: inpt.payer,
      payer_prv_key: inpt.payer_prv_key
    };
    let resp = await this.assets.mintAsset(s);      
    return resp;
  }

  async createBadgeTemplate(name: string, key: string, col?: string, sch?: string)
  {
    let xferable = true; // badges can be transferrable for collateral, burnability etc
    let burnable = true;
    const t = this.sdkGen.createTemplate(
      name, 
      col ?? this.utils.getRootCollectionName( name ), 
      sch ?? this.utils.getRootCollectionLinkSchemaName( name ), 
      xferable, burnable, 
      badge_link_template
    );
   
    let tres = await this.submitter.SubmitTx([t],[],[key]) ;
    
    if(this.debug) console.log("creating badge template result:");
    if(this.debug) console.log(tres);

    let rc: NCReturnTxs = {};
    rc.TxID_createTpl = tres.transaction_id;
    rc.template_id = (await this.reader.txToTemplateId(tres.transaction_id)).toString();
    return rc;

  }

  async mintBadge(inpt: NCMintBadge ) {
  // todo if no schema then create it

  const tId = await this.utils.getLinkSchemaBadgeTemplateID(inpt.issuer);
  if (tId == undefined || tId == -1) this.createBadgeTemplate(inpt.issuer, inpt.payer_prv_key);

  let s : NCMintAsset = {
    creator:  inpt.issuer,
    col_name: inpt.col_name ?? this.utils.getRootCollectionName( inpt.issuer ), // root collection
    sch_name: this.utils.getRootCollectionLinkSchemaName(inpt.issuer), // bind schema
    tmpl_id:  tId,
    //this.utils.getLinkSchemaLikeTemplateName(inpt.creator),
    // object: account name
    immutable_data: [   
      {'key': 'name',      'value': ['string', inpt.badge_name]},
      {'key': 'subj_name',    'value': ['string', inpt.subj_name]},   
      {'key': 'prop_val',  'value': ['string', inpt.weight??"0"]} 
    ],
    mutable_data: [],
    payer: inpt.payer,
    payer_prv_key: inpt.payer_prv_key
  };
  let resp = await this.assets.mintAsset(s);      
  return resp;
  }

  // @ts-ignore
  STATUS_LIST = {
    semantic: "semantic",
    imported: "imported",
    invited: "invited",
    preregistered: "preregistered",
    registered: "registered",
    admitted: "admitted",
    known: "known",
    offer: "offer"
    // "subscriber"
  };

  async mintProfile(inpt: NCMintProfile) {

      let col_name = this.utils.getRootCollectionName(inpt.creator);
      let sch_name = this.utils.getRootCollectionProfileSchemaName(inpt.creator);
      let tmpl_id = -1;
      let immutable_data : NCKeyValPair[] = [];
      let mutable_data   : NCKeyValPair[] = [
        { key: "status", 'value': ['string',      inpt.status]},
        { key: "offer", 'value': ['string',       inpt.offer ]},

        { key: "displayName", 'value': ['string', inpt.displayName ]},
        { key: "bio",         'value': ['string', inpt.bio??"" ]},

        { key: "fullName", 'value': ['string', inpt.fullName ]},
        { key: "firstName",'value': ['string', inpt.firstName ]},
        { key: "lastName", 'value': ['string', inpt.lastName??"" ]},
        { key: "username", 'value': ['string', inpt.username??"" ]},
        { key: "email",    'value': ['string', inpt.email??""    ]},
        { key: "phone",    'value': ['string', inpt.phone??""    ]},

      // avatar 
        { key: "contentType",     'value': ['string', inpt.contentType     ]},
        { key: "contentUrl",      'value': ['string', inpt.contentUrl      ]},
        { key: "coverContentUrl", 'value': ['string', inpt.coverContentUrl ]},
        { key: "blurHash",        'value': ['string', inpt.blurHash    ]},
        { key: "aspectRatio",     'value': ['string', inpt.aspectRatio ]},
      ];
      
      let n : NCMintAsset = {
        creator: inpt.creator,
        payer: inpt.payer,
        immutable_data: immutable_data,
        mutable_data: mutable_data,
        col_name: col_name,
        sch_name: sch_name,
        tmpl_id: tmpl_id,
        payer_prv_key: inpt.payer_prv_key ,
        user_prv_active_key: inpt.user_prv_active_key
      } 
      let resp = await this.assets.mintAsset(n);  
      resp.TxID_mintProfile =  resp.TxID_mintAsset;
      return resp;

  } 
   /**
   * Create File
   * @param inpt: NCMintFile
   * @returns Create file transaction id
   */
  async createFile(inpt: NCMintFile) {

      let col_name = this.utils.getFileCollectionName(inpt.creator);
      let sch_name = this.utils.getFileCollectionFileSchemaName(inpt.creator);
      let tmpl_id = -1;
      let immutable_data : any[] = [ ];
      let mutable_data = [
        {'key': 'name', 'value': ['string', inpt.name]},
        {'key': 'path','value': ['string', inpt.path]}, 
        {'key': 'content','value': ['string',  inpt.content]},
        {'key': 'image','value': ['string',  inpt.image??"emptystring" ]}
      ];
      debugger;
      let n : NCMintAsset = {
        creator: inpt.creator,
        payer: inpt.payer,
        immutable_data: immutable_data,
        mutable_data: mutable_data,
        col_name: col_name,
        sch_name: sch_name,
        tmpl_id: tmpl_id,
        payer_prv_key: inpt.payer_prv_key ,
        user_prv_active_key: inpt.user_prv_active_key
      } 

      try { 
        let mint_res  = await this.assets.mintAsset(n) ;
        mint_res.TxID_mintFile = mint_res.TxID_mintAsset;
        console.log("minted file: ");
        console.log(mint_res); 
        return mint_res;

      } catch(e) {
        let err_no_col = "assertion failure with message: No collection with this name exists";
        let err = (e as Error).message;
        console.log("Error message:  " + err);
        if (err != err_no_col) throw e;

        let nco_struct : NCCreateCollection = {
            user: inpt.creator, 
            collection_name: col_name,
            schema_name: sch_name,
            schema_fields: file_schema,
            template_name: "-1",
            template_fields: [], 
            user_prv_active_key: inpt.user_prv_active_key,
            allow_notify: true,
            mkt_fee    : 0.00,
            xferable   : false,
            burnable   : false, // undeletable from ceramic
            max_supply : 0xffffff
        };

        let res = await this.assets.createCollection(nco_struct);
        //let res = await this.createFileCollection(inpt.name, inpt.user_prv_active_key);
        
        if(this.debug) console.log("createcollection of files result: ")
        if(this.debug) console.log(res);
        

        try { 
          let mint_res  = await this.assets.mintAsset(n) ;
          mint_res.TxID_mintFile = mint_res.TxID_mintAsset;
          console.log("minted file ");
          return mint_res;
        } catch(e) {
          let err = (e as Error).message;
          console.log("Second Minting error message:  " + err);

          throw e;
        }
      }; 
  }

  async changeFile(inpt: NCChangeFile) 
    {
      const old = await this.reader.readAsset(inpt.asset_id);
      console.log("changing file : ... " + JSON.stringify(old.mutable_data));
      let data = [
        {'key': 'name', 'value': ['string', inpt.new_name ?? old.mutable_data.name]},
        {'key': 'path','value': ['string', inpt.new_path?? old.mutable_data.path]}, 
        {'key': 'content','value': ['string',  inpt.new_content?? old.mutable_data.content]},
        {'key': 'image','value': ['string',  inpt.new_image??old.mutable_data.image ]}
    ];

      let n : NCModifyAsset = {
        editor: inpt.editor,
        owner: inpt.editor,
        asset_id: inpt.asset_id,
        new_data: data,
        payer: inpt.payer??inpt.editor,
        payer_prv_key: inpt.payer_prv_key

      };
      let res = await this.assets.modifyAsset(n);
      res.TxID_changeFile=res.TxID_modifyAsset;
      res.asset_id = inpt.asset_id;
      console.log("modify asset res: "+ JSON.stringify(res));
      return res;
  }

  /** 
   * 
   */
  async mintNftToRoot(inpt: NCMintNftToRoot) {
    let s : NCMintAsset = {
      creator:  inpt.creator,
      col_name: this.utils.getRootCollectionName( inpt.creator ), // root collection
      sch_name: this.utils.getRootCollectionNftSchemaName(inpt.creator), // bind schema
      tmpl_id: -1,
      immutable_data: inpt.immutable_data,
      mutable_data: inpt.mutable_data,
      payer: inpt.payer,
      payer_prv_key: inpt.payer_prv_key
    }

    try { 
      let mint_res  = await this.assets.mintAsset(s) ;
      mint_res.TxID_mintNft = mint_res.TxID_mintAsset;
      if (this.debug) { console.log("minted file: "); console.log(mint_res); }
      return mint_res;
    } catch(e) {
      let err_no_col = "assertion failure with message: No collection with this name exists";
      let err = (e as Error).message;
      console.log("Error message:  " + err);
      if (err != err_no_col) throw e;

      let res = await this.createRootCollection(inpt.creator, inpt.payer_prv_key)
      if(this.debug) { console.log("createcollection of root result: "); console.log(res); }

      try { 
        let mint_res  = await this.assets.mintAsset(s) ;
        mint_res.TxID_mintNft = mint_res.TxID_mintAsset;
        console.log("minted NFT to root ");
        return mint_res;
      } catch(e) {
        let err = (e as Error).message;
        console.log("Second Minting error message:  " + err);
        throw e;
      }
    };

  }

  async swapNcoToCreatorCoin( inpt: NCSwapNCOtoCC ) { 
    console.log("trying to swap to GNCO :  " + inpt.amt);
    this.debug = true;

    let n: NCStakeMainDao = { 
      amt: inpt.amt, 
      payer: inpt.payer,
      payer_prv_key: inpt.payer_prv_key
    };

    let resp1  = await this.pools.stakeMainDAO(n) as NCReturnTxs;
    if(this.debug) console.log(resp1);
    //@ts-ignore
    let gnco_amt= resp1.tx.processed.action_traces[0].inline_traces[3].act.data.quantity ;
    
    //@ts-ignore
    /*let t = resp.tx.processed.action_traces[0].inline_traces ? resp.tx.processed.action_traces[0].inline_traces : [];
    console.log(t[0]?t[0]:"undef");console.log("*");
    console.log(t[1]?t[1]:"undef");console.log("*");
    console.log(t[2]?t[2]:"undef");console.log("*");
    console.log(t[3]?t[3]:"undef");console.log("*");*/
    
    // get how much GNCO was received
    console.log("trying to swap to CC :  " + gnco_amt);
    let m: NCStakePool = { 
      owner: inpt.creator_to, 
      amt:  gnco_amt, 
      payer: inpt.payer,//'io',  
      payer_prv_key: inpt.payer_prv_key
    };      
     
    let resp2 = await this.pools.stakePool(m);
    if(this.debug) console.log(resp2);
    
    return resp2;
  }
  
  /**
 * Get pool info
 * @param 
 * @returns Tx data
 */
  async getPoolInfo(payload: NCGetPoolInfo) {
    const api = new PoolsRpcApi("https://nodeos-dev.newcoin.org", "pools2.nco", fetch); // TODO

    try {
      const fn = payload.code ? "getPoolByCode" : "getPoolByOwner";
      let q = await api[fn](payload);
      let t = await q.json() as NCPoolsInfo;
      return t;

    } catch (e) {
      if(this.debug) console.log('\nCaught exception: ' + e);

      if (e instanceof RpcError)
        if(this.debug) console.log(JSON.stringify(e.json, null, 2));
    }

    return {} as NCPoolsInfo;
    ``
  }
  
  // AUX functions

  // Neftymarket
  private getActionParams<T>(params: T): NeftyMarketParamsBase & T {
    return {
      atomicassetsContract: this.services.atomicassets_contract,
      neftymarketContract: this.services.neftymarket_contract,
      ...params,
    };
  }

  private async submitAuctionTx(actions: EosioActionObject[], payer_prv_key: string): Promise<NCReturnTxs> {
    const response = await this.submitter.SubmitTx(
      actions, 
      [], 
      [payer_prv_key]
    ) as TransactResult;
    return {
      TxID: response.transaction_id,
    };
  }

  // Nefty market actions
  /**
   * Create a new auction with the specified parameters
   * @returns create auction transaction id
   */
  async createAuction(params: NCCreateAuctionParams, key: string) {
    const actions = getCreateAuctionActions(this.getActionParams(params));
    return this.submitAuctionTx(actions, key);
  }

  /**
   * Place a new bid into an active auction
   * @returns bid transaction id
   */
  async placeAuctionBid(params: NCPlaceBidParams, key: string) {
    const actions = getPlaceBidActions(this.getActionParams(params));
    return this.submitAuctionTx(actions, key);
  }
  
  /**
   * Claim NFTs whenever you win an auction
   * @returns claim transaction id
   */
  async claimNftsFromAuction(params: NCClaimNftsParams, key: string) {
    const actions = getClaimNftsActions(this.getActionParams(params));
    return this.submitAuctionTx(actions, key);
  }

  /**
   * Claim the winning bid as the seller of an auction
   * @returns claim transaction id
   */
  async claimAuctionWinBid(params: NCClaimWinBidParams, key: string) {
    const actions = getClaimWinBidActions(this.getActionParams(params));
    return this.submitAuctionTx(actions, key);
  }

  /**
   * Erase an auction as long as it has no bids
   * @returns delete transaction id
   */
  async eraseAuction(params: NCEraseAuctionParams, key: string) {
    const actions = getEraseAuctionActions(this.getActionParams(params));
    return this.submitAuctionTx(actions, key);
  }

  /**
   * Edit an auction with the specified parameters, internally it erases the existing one
   * and creates a new one with the specified parameters.
   * @returns transaction id
   */
  async editAuction(params: NCEditAuctionParams, key: string ) {
    const actions = getEditAuctionActions(this.getActionParams(params));
    return this.submitAuctionTx(actions, key);
  }

 
 async createKeyPair() { return this.accounts.createKeyPair(); }
 async createAccount(inpt: NCCreateUser) { return this.accounts.createAccount(inpt); }
 async buyRam(inpt: NCBuyRam) { return this.accounts.buyRam(inpt) }; 
 async createPermission(inpt: NCCreatePermission) { return this.accounts.createPermission(inpt); }
 async linkPermission(inpt: NCLinkPerm ) { return this.accounts.linkPermission(inpt); }

 async createCollection(inpt: NCCreateCollection) { return this.assets.createCollection(inpt);}
 async mintAsset(inpt: NCMintAsset) { return this.assets.mintAsset(inpt); }
 async modifyAsset(inpt: NCModifyAsset) { return this.assets.modifyAsset(inpt); }

// to be deprecated
 async stakeMainDAO(inpt: NCStakeMainDao) { return this.pools.stakeMainDAO(inpt); }
 async instUnstakeMainDAO(inpt: NCStakeMainDao) { return this.pools.stakeMainDAO(inpt); }
 async dldUnstakeMainDAO(inpt: NCStakeMainDao) { return this.pools.dldUnstakeMainDAO(inpt); }
 
 async createPool(inpt: NCCreatePool) { return this.pools.createPool(inpt); }
 async stakePool(inpt: NCStakePool) { return this.pools.stakePool(inpt); } 
 async unstakePool(inpt: NCUnstakePool) { return this.pools.unstakePool(inpt); }
 
 async createDao(inpt: NCCreateDao) { return this.daos.createDao(inpt);}

  async getDaoStandardProposals(inpt: NCGetDaoProposals) { return this.daos.getDaoStandardProposals(inpt); }
    async getDaoAddMemberProposals(inpt: NCGetDaoProposals) { return this.daos.getDaoAddMemberProposals(inpt); }
    async getDaoRemoveMemberProposals(inpt: NCGetDaoProposals) { return this.daos.getDaoRemoveMemberProposals(inpt); }
    async getDaoStakeProposals(inpt: NCGetDaoProposals) { return this.daos.getDaoStakeProposals(inpt); }

 async createDaoStandardProposal(inpt: NCCreateDaoProposal) { return this.daos.createDaoStandardProposal(inpt); }
 async createDaoAddMemberProposal(inpt: NCCreateDaoUserWhitelistProposal) { return this.daos.createDaoAddMemberProposal(inpt); }
 async createDaoStakeProposal(inpt: NCCreateDaoStakeProposal) { return this.daos.createDaoStakeProposal(inpt); }
 async createDaoRemoveMemberProposal(inpt: NCCreateDaoUserWhitelistProposal) { return this.daos.createDaoRemoveMemberProposal(inpt); }

  async approveDaoStandardProposal(inpt: NCApproveDaoProposal) { return this.daos.approveDaoStandardProposal(inpt); }
  async approveDaoAddMemberProposal(inpt: NCApproveDaoProposal) { return this.daos.approveDaoAddMemberProposal(inpt); }
  async approveDaoRemoveMemberProposal(inpt: NCApproveDaoProposal) { return this.daos.approveDaoRemoveMemberProposal(inpt); }
  async approveDaoStakeProposal(inpt: NCApproveDaoProposal) { return this.daos.approveDaoStakeProposal(inpt); }

  async executeDaoStandardProposal(inpt: NCExecuteDaoProposal) { return this.daos.executeDaoStandardProposal(inpt); }
  async executeDaoAddMemberProposal(inpt: NCExecuteDaoProposal) { return this.daos.executeDaoAddMemberProposal(inpt); }
  async executeDaoRemoveMemberProposal(inpt: NCExecuteDaoProposal) { return this.daos.executeDaoRemoveMemberProposal(inpt); }
  async executeDaoStakeProposal(inpt: NCExecuteDaoProposal) { return this.daos.executeDaoStakeProposal(inpt);}

 async voteOnProposal(inpt: NCDaoProposalVote) { return this.daos.voteOnProposal(inpt) };
 async withdrawVoteDeposit(inpt: NCDaoWithdrawVoteDeposit) { return this.daos.withdrawVoteDeposit(inpt); }

 async submitTx(actions: any[], public_keys: string[], private_keys: string[] ) {   return this.submitter.SubmitTx(actions,public_keys, private_keys); }

 async txNCOBalance(inpt: NCTxBal) { return this.txer.txNCOBalance(inpt); }
 async txGNCOBalance(inpt: NCTxBal) { return this.txer.txGNCOBalance(inpt); }
 async getAccountBalance(inpt: NCGetAccInfo) {return this.txer.getAccountBalance(inpt); }

 async normmalizeUserName(name: string, r: string) { return this.utils.normalizeUsername(name, r); }

}
