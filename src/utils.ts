import { NCInit } from "./system";
//import { readAsset, readAssetBySchema } from "./io/nft";
import { NCO_read_API } from "./L1/reader";


export class NCO_utils_API {

    //private aa_url;
    private reader;

    constructor(n: NCInit){
        //this.aa_url = n.urls.atomicassets_url;
        this.reader = new NCO_read_API(n);
    };

    normalizeUsername = (username: string, r: string) => {
        return username.replace(/\./g, r + r.repeat(12 - username.length));
    };

    // Collection names 
    getRootCollectionName = (username: string) => {
        return this.normalizeUsername(username, "z");
    };

    getFileCollectionName = (username: string) => {
        return this.normalizeUsername(username, "y");
    };

    // schema names 
    getRootCollectionNftSchemaName = (username: string) => {
        return this.normalizeUsername(username, "w");
    };

    getRootCollectionProfileSchemaName = (username: string) => {
        return this.normalizeUsername(username, "p");
    };

    // links to other collecitons with descriptions
    getRootCollectionLinkSchemaName = (username: string) => {
        return this.normalizeUsername(username, "b");
    };

    getFileCollectionFileSchemaName = (username: string) => {
        return this.normalizeUsername(username, "v");
    };

    // templates
    /*    getRootCollectionDefaultSchemaTemplateName = (username: string) => {
        return this.normalizeUsername(username, "t");
    };*/
    getLinkSchemaLikeTemplateID = (username: string,  _col?: string, _sch?: string) => {
        const col = _col??this.getRootCollectionName(username);
        const sch = _sch??this.getRootCollectionLinkSchemaName(username);
        return this.reader.getCollectionTemplateID(col, sch ,'like');
    };

    getLinkSchemaBadgeTemplateID = (username: string, _col?: string, _sch?: string) => {
        const col = _col??this.getRootCollectionName(username);
        const sch = _sch??this.getRootCollectionLinkSchemaName(username);
        return this.reader.getCollectionTemplateID(col, sch ,'badge');
    };
    
    getLinkSchemaFollowTemplateID = (username: string) => {
        const col = this.getRootCollectionName(username);
        const sch = this.getRootCollectionLinkSchemaName(username);
        return this.reader.getCollectionTemplateID(col, sch, 'follow');
    };
        
    getLinkSchemaRepostTemplateID = (username: string) => {
        return this.normalizeUsername(username, 'p');
    };

    getLinkSchemaNftMirrorTemplateID = (username: string) => {
        return this.normalizeUsername(username, 'm');
    };

}
