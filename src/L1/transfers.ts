import { RpcError } from "eosjs";
import { TransactResult } from "eosjs/dist/eosjs-api-interfaces";
import { NCInit, NCInitServices } from "../system";
import { NCGetAccInfo, NCReturnInfo, NCReturnTxs, NCTxBal } from "../types";
import { ActionGenerator as sdkActionGen } from "./actions";
import { NCO_submit_API } from "./submit";

export class NCO_tx_API {

  //private aa_url : string;
  //private hyp_url: string;
  private debug: boolean;
  private sdkGen: sdkActionGen;
  private submitter: NCO_submit_API;
  private services: NCInitServices;

  constructor (inpt: NCInit) {
    //this.aa_url = inpt.urls.atomicassets_url;
    //this.hyp_url = inpt.urls.hyperion_url;
    this.services  = inpt.services;
    this.debug  = inpt.debug;
    this.sdkGen     = new sdkActionGen(this.services.eosio_contract, this.services.token_contract);
    this.submitter  = new NCO_submit_API(inpt);
  }


  /**
   * Get account balance
   * @param acc: NCGetAccInfo
   * @param acc.token_name will set correct contract
   * @returns Tx data
   */
  async getAccountBalance(acc: NCGetAccInfo) {

    if (!acc.contract) {

      if (acc.token_name == "GNCO")
        acc.contract = this.services.maindao_contract;
      else
        if (acc.token_name != "NCO")
          acc.contract = this.services.staking_contract;
        else
          acc.contract = this.services.eosio_contract;
    }

    let rc: NCReturnInfo = { acc_balances: [] };
    try {
      let t = await fetch(`https://nodeos-dev.newcoin.org/v1/chain/get_currency_balance`, { // TODO
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          account: acc.owner,
          code: acc.contract
        }),
      });
      rc.acc_balances = await t.json();
      //if(this.debug) if(this.debug) console.log(rc);
      return rc;
    } catch (e) {
      if(this.debug) console.log('\nCaught exception: ' + e);
      if (e instanceof RpcError && this.debug) console.log(JSON.stringify(e.json, null, 2));
      throw e;
    }
  }

      /**
   * Transfer NCO between accounts
   * @returns Transfer transaction id
   */
      async _txBalance(contract: string, inpt: NCTxBal): Promise<NCReturnTxs> {
        let r: NCReturnTxs = {};
        let tx = this.sdkGen.txBalance(contract, inpt.payer, inpt.to, inpt.amt, inpt.memo ??= "");
        let res = await this.submitter.SubmitTx([tx],
          [],
          [inpt.payer_prv_key]
        ) as TransactResult;
        r.TxID = res.transaction_id;
        return r;
    }
  
    /**
   * Transfer NCO between accounts
   * @param NCTxBal
   * @returns Transfer transaction id
   */
    async txNCOBalance(inpt: NCTxBal) {
        const r = await this._txBalance(this.services.token_contract, inpt);
        return r;
      }
    

  /**
   * Transfer GNCO between accounts
   * @param NCTxBal
   * @returns Transfer transaction id
   */
  async txGNCOBalance(inpt: NCTxBal) {
    const r = await this._txBalance(this.services.maindao_contract, inpt);
    return r;
  }


  /**
   * Transfer creator tokens between accounts
   * @param   NCTxBal 
   * @returns Transfer transaction id
   */
  async txDAOTokenBalance(inpt: NCTxBal) {
    const r = await this._txBalance(this.services.staking_contract, inpt);
    return r;
  }


  
}
