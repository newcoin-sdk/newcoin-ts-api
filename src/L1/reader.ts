
import { TxData } from "../aassets/atomicTypes";
const { ExplorerApi } = require("atomicassets");
import { NCInit } from "../system";

export class NCO_read_API {

  private aa_url : string;
  private hyp_url: string;

  constructor (inpt: NCInit) {
    this.aa_url = inpt.urls.atomicassets_url;
    this.hyp_url = inpt.urls.hyperion_url;
  }

  // hyperion
  readTx = async (txId: string) => {
    const req = this.hyp_url + `/v2/history/get_transaction?id=${txId}`;
    const txr = await fetch(req);
    const jtxr = await txr.json();
    return jtxr as TxData;
  }

  //AA
  readAsset = async (asset_id: string) => {
    const api = new ExplorerApi(this.aa_url, "atomicassets", { fetch: fetch });
    const asset = await api.getAsset(asset_id);
    return asset;
  };

  getActions = (txData: TxData, filterActionNames: string[]) => {
    
    console.log(txData);
    return (txData.actions || []).filter(
      action => filterActionNames.includes(action.act.name)
    );
  }

  // aa
  txToAssetId = async (txId: string) => {
    const txData = await this.readTx(txId);
    const mints = this.getActions(txData, ["logmint"]);
    const assets = mints.map((a) => a.act.data.asset_id);
    return assets;
  }

  // hyperion
  txToTemplateId = async (txId: string) => {
    const txData = await this.readTx(txId);
    const mints = this.getActions(txData, ["lognewtempl"]);
    const templates = mints.map((a) => a.act.data.template_id);
    return templates;
  }

  getCollectionTemplateID = async (colleciton: string, schema: string, tpl_type: string) => {
    const req = this.aa_url + `/atomicassets/v1/templates?collection_name=${colleciton}&schema_name=${schema}&template_data.link_type=${tpl_type}`;
    const jtxr = await (await fetch(req)).json();
    console.log("got response " +JSON.stringify(jtxr));
    if ( jtxr.data == undefined ) return -1;
    if ( jtxr.data[0] == undefined) return -1;
    return jtxr.data[0].template_id ?? -1; 
  };
}
