import { NCInit, NCInitServices, NCInitUrls }  from "../system";
import { NCCreateUser, NCCreatePermission, NCLinkPerm, NCReturnTxs, NCBuyRam, NCKeyPair } from "../types";
import { TransactResult } from "eosjs/dist/eosjs-api-interfaces";
import { NCO_submit_API } from "./submit"
import { NCO_utils_API } from "../utils";
import { ActionGenerator as sdkActionGen } from "./actions";
const ecc = require("eosjs-ecc-priveos");


export class NCO_account_API {
    private debug    : boolean;
    private services : NCInitServices;
    // @ts-ignore
    private urls     : NCInitUrls; 
    private sdkGen   : sdkActionGen;
    private submitter: NCO_submit_API; 
    // @ts-ignore
    private utils    : NCO_utils_API;

    constructor( inpt: NCInit ) {
        this.debug      = inpt.debug;
        this.services   = inpt.services;
        this.urls       = inpt.urls;
        this.submitter  = new NCO_submit_API(inpt);
        this.sdkGen     = new sdkActionGen(this.services.eosio_contract, this.services.token_contract);
        this.utils      = new NCO_utils_API(inpt);
    }

    SubmitTx = (
        actions: any[],
        public_keys: string[],   // testnet ["EOS5PU92CupzxWEuvTMcCNr3G69r4Vch3bmYDrczNSHx5LbNRY7NT"]
        private_keys: string[]  // testnet ["5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV"]) 
        ) => {
        return this.submitter.SubmitTx(
            actions,
            public_keys,   // testnet ["EOS5PU92CupzxWEuvTMcCNr3G69r4Vch3bmYDrczNSHx5LbNRY7NT"]
            private_keys);  // testnet ["5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV"])
        }
    


  /**
   * Create a key pair assuming a secure environment (not frontend)
   * @params none
   * @returns An EOS key pair
   */
  async createKeyPair() {
    await ecc.initialize();
    let opts = { secureEnv: true };
    let p = await ecc.randomKey(0, opts);
    let t: NCKeyPair = { prv_key: p, pub_key: ecc.privateToPublic(p) };
    return t as NCKeyPair;
  }

    /**
   * Create a user - multistage operation creating new user account, 
   * defailt collection, schema and template for the account
   * @param NCCreateUser
   * @returns NCReturnTxs
   */
    async createAccount(inpt: NCCreateUser) {

            const CREATE_ACCOUNT_DEFAULTS = {
              ram_amt: 8192,
              cpu_amount: '100.0000 NCO',
              net_amount: '100.0000 NCO',
              xfer: false,
            };
        
            const {
              newUser, newacc_pub_active_key, newacc_pub_owner_key,
              payer, payer_prv_key,
              ram_amt, net_amount, cpu_amount, xfer
            } = { ...CREATE_ACCOUNT_DEFAULTS, ...inpt };
        
            let res: NCReturnTxs = {};
          
            let newacc_action = this.sdkGen.newaccount(newUser, payer, newacc_pub_active_key, newacc_pub_owner_key);
            let buyram_action = this.sdkGen.buyrambytes(newUser, payer, ram_amt);
            let delegatebw_action = this.sdkGen.delegateBw(newUser, payer, net_amount, cpu_amount, xfer);
        
            if(this.debug) console.log("before create account transaction");
            const tres = await this.submitter.SubmitTx(
              [newacc_action, buyram_action, delegatebw_action],
              [],
              [payer_prv_key]
            ) as TransactResult;// [] contained      
            res.TxID_createAcc = tres.transaction_id;
            if(this.debug) console.log("createuser transaction complete");
        
            return res;
          }
        
    async buyRam(inpt: NCBuyRam) {
          let buyram_action = this.sdkGen.buyrambytes(inpt.user, inpt.payer, inpt.ram_amt);
          const tres = await this.submitter.SubmitTx(
            [buyram_action],
            [],
            [inpt.payer_prv_key]
          ) as TransactResult;// [] contained       
          return { TxID_createAcc: tres.transaction_id, TxID: tres.transaction_id, originalResponse: tres } as NCReturnTxs;
      }
          
    
  /**
   * Create a new permission subordinate to the Active permission. 
   * (future optional: allow under owner, TBD)
   * @param NCCreatePermission
   * @returns Create permission transaction id
   */
  async createPermission(inpt: NCCreatePermission) {
    let t = this.sdkGen.createPermission(inpt.author, inpt.perm_name, inpt.perm_pub_key);
    let res = await this.submitter.SubmitTx([t],[],[inpt.author_prv_active_key]) as TransactResult;
    let r: NCReturnTxs = {};
    r.TxID_createPerm = res.transaction_id;
    return r;
  }

  /**
   * Link a permission to a specific action of a specific contract. 
   * @param NCLinkPerm
   * author: the permission's owner to be linked  
   * code: the owner of the action to be linked                                         
   * type: the action to be linked                                                      
   * 'active', 'owner' ...                                                        
   * @returns Link permission transaction id
   */
  async linkPermission(inpt: NCLinkPerm) {
    const linkauth_input = {
      account: inpt.author,             // this link
      code: inpt.action_owner,          // 
      type: inpt.action_to_link,        // 
      requirement: inpt.perm_to_link,   // 
    };

    // the action which will make the linking 
    let action = {
      account: 'eosio',
      name: 'linkauth',
      data: linkauth_input,
      authorization: [{
        actor: inpt.author,
        permission: 'active'
      }]
    };

    let res = await this.submitter.SubmitTx([action],
      [],
      [inpt.author_prv_active_key]
    ) as TransactResult;
    let r: NCReturnTxs = {};
    r.TxID_linkPerm = res.transaction_id;
    return r;
  }


}