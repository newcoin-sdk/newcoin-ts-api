import { Api, JsonRpc, RpcError } from "eosjs";
import { NCO_BlockchainAPI } from 'newcoin';
//import { RpcApi } from 'newcoin.pools-js';
import { NCCreateUser, NCReturnTxs, NCCreatePool, NCStakeToPool, NCMintAsset, NCGetAccInfo, NCReturnInfo} from 'newcoin';

let randomname= () => " ".repeat(9).split("").map(_ => String.fromCharCode(Math.floor(Math.random() * (122 - 97) + 97))).join("") + ".io"
let name = randomname();
console.log(name);

const api = new NCO_BlockchainAPI(
  {
      bc_url:  "http://testnet.newcoin.org",
      hyp_url: "http://hyperion.newcoin.org"
  }
);

const demogetbal = async (user : string) =>
{
    const api = new RpcApi("https://testnet.newcoin.org", "pools.nco", fetch);   
    let p : PoolPayload = { 
        owner : user
    };

    type RetT = {
      rows: PoolPayload[];
    }
    try{

      let q =  await api.getPoolByOwner(p);
      let t = await q.json() as RetT;
      
      //console.log(t);
      return t;
  } catch (e){
      console.log('\nCaught exception: ' + e);
  if (e instanceof RpcError)
    console.log(JSON.stringify(e.json, null, 2));
    }
    return 1;
}


const demostakepool = async(a: string) =>
{
  let x: NCStakeToPool = {
    to: a,
    payer: 'io',
    amt: '100000.0000 NCO', 
    payer_prv_key: '5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV',
    payer_public_key: 'EOS5PU92CupzxWEuvTMcCNr3G69r4Vch3bmYDrczNSHx5LbNRY7NT'
  };


  try {
    await api.stakeToPool(x);
  } catch(e) {
      console.log('\nCaught exception: ' + e);
      if (e instanceof RpcError)
        console.log(JSON.stringify(e.json, null, 2));
  }
}

const demoall = async (uniq5: string) =>
{  


  try
  {
    const testnet_url = 'http://testnet.newcoin.org'; 
    //let uniq5 = "alice";
    
    const nu  = 'test'+ uniq5 + '.io'//((new Date()).getTime()).toString().slice(1, -1); // has to end with creating account name 
    const col = 'testcol' + uniq5;
    const sch = 'testsch' + uniq5;
    let res: any;
    let t: any;

    console.log("createuser action");
    t = await api.createUser(nu);
    console.log(t);
    //res = await api.SubmitTx(t);// [] contained
    console.log(res);
    console.log("createuser transaction complete");

    console.log("creating collection for the user");
    t = apicreateCollection(nu, col);
    console.log(t);
    console.log("createcol transaction");
    res = await SubmitTx([t]);
    console.log(res);

    console.log("creating schema for the user");
    t = _createSch(nu, col, sch);
    console.log(t);
    console.log("createsch transaction");
    res = await SubmitTx([t]);
    console.log(res);

    console.log("creating template");
    t = _createTmpl(nu, col, sch);
    console.log(t);
    console.log("creating template transaction");
    res = await SubmitTx([t]);
    console.log(res);

    console.log("mintAsset");
    t = _mintAsset(nu, col, sch, -1, 
      [
        {key: 'name', value: ['string', nu+'_'+(new Date()).getTime()]}, 
        {key: 'description', value: ['string', 'the description']},
        {key: 'image', value: ['string', 'https://storage.googleapis.com/opensea-prod.appspot.com/creature/50.png']},
        {key: 'external_url', value: ['string', 'google.com']}, 
        //{key: 'attributes', value: ['string[]', ['attr', 'value']]}
      ]
       );
    console.log(t);
    console.log("creating mint transaction");
    res = await SubmitTx([t]);
    console.log(res);
    console.log("minted transaction");

    console.log("create pool action");
    t = _createPool(nu);
    console.log(t);
    res = await SubmitTx([t]);
    console.log(res);
    console.log("createpool transaction complete");

    let r = api.getPoolInfo({ owner: nu });
    let pid = (await r).rows[0].id;
    console.log(pid);

    console.log("stake to action");
    t = _stakeToPool('io', pid, '100000.0000 NCO');
    console.log(t);
    res = await SubmitTx([t]);
    console.log(res);
    console.log("stake transaction complete");
  } 
  catch(e) {
      console.log('\nCaught exception: ' + e);
    if (e instanceof RpcError)
      console.log(JSON.stringify(e.json, null, 2));
    }
};

const demo = async (user:string) =>
{
  try
  {
    const hrpc = new HJsonRpc('https://hyperion.newcoin.org', {fetch});
    const testnet_url = 'http://testnet.newcoin.org'; 

    const nu  = 'test'+ user + '.io';
    let res: any;
    
    let t = _stakeToPool('io', '3', '100000.0000 NCO');
    console.log(t);
    res = await SubmitTx([t]);
    console.log(res);
    return;
    
    let p = new RpcApi('https://testnet.newcoin.org', 'pools.nco', fetch);
    let opts: PoolPayload = { id: '1' };
    console.log(opts);
    res  = await p.getPool(opts);
    console.log(JSON.stringify(res));

  }  
  catch(e) {
    console.log('\nCaught exception: ' + e);
  if (e instanceof RpcError)
    console.log(JSON.stringify(e.json, null, 2));
  }
}

const demogetpool = async (user : string) =>
{
    const api = new RpcApi("https://testnet.newcoin.org", "pools.nco", fetch);   
    let p : PoolPayload = { 
        owner : user
    };

    type RetT = {
      rows: PoolPayload[];
    }
    try{

      let q =  await api.getPoolByOwner(p);
      let t = await q.json() as RetT;

      console.log("pool:"+t.rows[0].id);
      
  } catch (e){
      console.log('\nCaught exception: ' + e);
  if (e instanceof RpcError)
    console.log(JSON.stringify(e.json, null, 2));
    }
    return 1;
}
