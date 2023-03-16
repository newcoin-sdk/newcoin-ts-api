import {
    NCApproveDaoProposal,
    NCCreateDao,
    NCCreateDaoProposal,
    NCCreateDaoStakeProposal,
    NCCreateDaoUserWhitelistProposal,
    NCDaoProposalVote,
    NCDaoWithdrawVoteDeposit,
    NCExecuteDaoProposal,
    NCGetDaoProposals,
    NCGetDaoWhiteList,
    NCGetVotes,
    NCReturnTxs
} from "../types";

import {TransactResult} from "eosjs/dist/eosjs-api-interfaces";
import {ActionGenerator as DaosAG, ChainApi as DaosChainApi} from '@newfound8ion/newcoin.daos-js'
import {DAOPayload, GetTableRowsPayload, ProposalPayload} from "@newfound8ion/newcoin.daos-js/dist/interfaces";
import fetch from 'cross-fetch';

import {NCO_submit_API} from "./submit"
import {NCInit, NCInitServices, NCInitUrls} from "../system";

const ecc = require("eosjs-ecc-priveos");
export { NCO_daos_API }

class NCO_daos_API {
    private debug : boolean;
    private services : NCInitServices;
    private urls: NCInitUrls;
    
    private cApi: DaosChainApi;
    private aGen: DaosAG;
    
    private submitter: NCO_submit_API;
    
    constructor( inpt: NCInit ) {
        this.debug = inpt.debug;
        this.services = inpt.services;
        this.urls = inpt.urls;
        
        this.cApi = new DaosChainApi(this.urls.nodeos_url, this.services.daos_contract, fetch);
        this.aGen = new DaosAG(this.services.daos_contract, this.services.staking_contract);
        this.submitter = new NCO_submit_API(inpt);
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
     * DAO creation. One per account.
     * @param inpt : NCCreateDao
     * @returns NCReturnTxs.TxID_createDao, NCReturnTxs.dao_id
     */
    async createDao(inpt: NCCreateDao) {
        
        const t = await this.aGen.createDao(
            [{ actor: inpt.author, permission: "active" }],
            inpt.author,
            inpt.descr
        );
        const res = await this.SubmitTx(t,
            [], [inpt.author_prv_key]) as TransactResult;
        
        let p: DAOPayload = { owner: inpt.author };
        if(this.debug) console.log("Get dao by owner: ", JSON.stringify(p));
        let q = await this.cApi.getDAOByOwner(p);
        let w = await q.json();
        if(this.debug) console.log("received from getDaoByOwner" + JSON.stringify(w));
        
        let r: NCReturnTxs = {};
        r.TxID_createDao = res.transaction_id;
        r.dao_id = w.rows[0].id.toString();
        return r;
    }
    
    
    /**
     *
     * @param inpt : NCCreateDaoProposal
     * @returns NCReturnTxs.TxID_createDaoProposal, NCReturnTxs.proposal_id
     */
    async createDaoProposal(inpt: NCCreateDaoProposal) {
        const t = await this.aGen.createProposal(
            [{ actor: inpt.proposer, permission: "active" }],
            inpt.proposer, Number(inpt.dao_id),
            inpt.title, inpt.summary,
            inpt.url, inpt.pass_rate, inpt.vote_start, inpt.vote_end
        );
        
        const res = await this.SubmitTx(t,
            [], [inpt.proposer_prv_key]) as TransactResult;
        
        let r: NCReturnTxs = {};
        r.TxID_createDaoProposal = res.transaction_id;
        r.dao_id = <string>inpt.dao_id;
    }
    
    
    /**
     *
     * @param inpt : NCCreateDaoUserWhitelistProposal
     * @returns NCReturnTxs.TxID_createDaoProposal, NCReturnTxs.proposal_id
     */
    async createDaoUserWhitelistProposal(inpt: NCCreateDaoUserWhitelistProposal) {
        const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));
        
        const t = await this.aGen.createWhiteListProposal(
            [{ actor: inpt.proposer, permission: "active" }],
            inpt.proposer, Number(dao_id), inpt.user,
            inpt.type, inpt.pass_rate,
            inpt.vote_start, inpt.vote_end
        );
        
        const res = await this.SubmitTx(t,
            [],
            [inpt.proposer_prv_key]) as TransactResult;
        
        let r: NCReturnTxs = {};
        r.TxID_createDaoProposal = res.transaction_id;
        r.dao_id = <string>dao_id;
        return r;
    }

    
    /**
     *
     * @param inpt : NCCreateDaoUserWhitelistProposal
     * @returns NCReturnTxs.TxID_createDaoProposal, NCReturnTxs.proposal_id
     */
    async createDaoStakeProposal(inpt: NCCreateDaoStakeProposal) {
        const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));
        
        const t = await this.aGen.createStakeProposal(
            [{ actor: inpt.proposer, permission: "active" }],
            inpt.proposer, Number(dao_id),
            inpt.to, inpt.quantity,inpt.pass_rate,
            inpt.vote_start, inpt.vote_end
        );
        
        const res = await this.SubmitTx(t,
            [],
            [inpt.proposer_prv_key]) as TransactResult;
        
        let r: NCReturnTxs = {};
        r.TxID_createDaoProposal = res.transaction_id;
        r.dao_id = <string>dao_id;
        return r;
    }
    
    
    /**
     *
     * @param inpt : NCApproveDaoProposal
     * @returns NCReturnTxs.TxID_approveDaoProposal
     */
    async approveDaoProposal(inpt: NCApproveDaoProposal) {
        const approveAction = await this.aGen.approveProposal(
            [{actor: inpt.approver, permission: "active"}],
            inpt.approver,
            <number>(inpt.dao_id),
            inpt.proposal_id
        );

        const { transaction_id } = await this.SubmitTx(
            approveAction,
            [ecc.privateToPublic(inpt.approver_prv_key)],
            [inpt.approver_prv_key]
        ) as TransactResult;

        let r: NCReturnTxs = transaction_id ? { TxID_approveDaoProposal: transaction_id } : {};
        return r;

    }
    
    /**
     *
     * @param inpt : NCApproveDaoProposal
     * @returns NCReturnTxs.TxID_approveDaoProposal
     */
    async approveDaoWhitelistProposal(inpt: NCApproveDaoProposal) {
        const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));
        
        if (inpt.proposal_id == undefined) throw ("Proposal undefined ID");
        
        const t = await this.aGen.approveWhiteListProposal(
            [{ actor: inpt.approver, permission: "active" }],
            inpt.approver,
            Number(dao_id), inpt.proposal_id
        );
        
        const res = await this.SubmitTx(t,
            [ecc.privateToPublic(inpt.approver_prv_key)], [inpt.approver_prv_key]) as TransactResult;
        
        let r: NCReturnTxs = {};
        r.TxID_approveDaoProposal = res.transaction_id;
        return r;
    }
    
    /**
     *
     * @param inpt : NCApproveDaoProposal
     * @returns NCReturnTxs.TxID_approveDaoProposal
     */
    async approveDaoStakeProposal(inpt: NCApproveDaoProposal) {
        const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));
        
        if (inpt.proposal_id == undefined) throw ("Proposal undefined ID");
        
        const t = await this.aGen.approveStakeProposal(
            [{ actor: inpt.approver, permission: "active" }],
            inpt.approver,
            Number(dao_id), inpt.proposal_id
        );
        
        const res = await this.SubmitTx(t,
            [ecc.privateToPublic(inpt.approver_prv_key)], [inpt.approver_prv_key]) as TransactResult;
        
        let r: NCReturnTxs = {};
        r.TxID_approveDaoProposal = res.transaction_id;
        return r;
    }
    
    /**
     *
     * @param inpt : NCExecuteDaoProposal
     * @returns NCReturnTxs.TxID_executeDaoProposal
     */
    async executeDaoProposal(inpt: NCExecuteDaoProposal) {
        const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));
        
        if (inpt.proposal_id == undefined) throw ("Proposal ID undefined");
        
        const t = await this.aGen.executeProposal(
            [{ actor: inpt.exec, permission: "active" }],
            Number(dao_id), inpt.proposal_id
        );
        
        const res = await this.SubmitTx(t,
            [ecc.privateToPublic(inpt.exec_prv_key)], [inpt.exec_prv_key]) as TransactResult;
        
        let r: NCReturnTxs = {};
        r.TxID_executeDaoProposal = res.transaction_id;
        return r;
    }
    
    /**
     * @param inpt : NCExecuteDaoProposal
     * @returns NCReturnTxs.TxID_executeDaoProposal
     */
    async executeDaoWhitelistProposal(inpt: NCExecuteDaoProposal) {
        const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));
        
        if (inpt.proposal_id == undefined) throw ("Proposal ID undefined");
        
        const t = await this.aGen.executeWhiteListProposal(
            [{ actor: inpt.exec, permission: "active" }], Number(dao_id), inpt.proposal_id
        );
        
        const res = await this.SubmitTx(t, [], [inpt.exec_prv_key]) as TransactResult;
        
        let r: NCReturnTxs = {};
        r.TxID_executeDaoProposal = res.transaction_id;
        return r;
    }
    
    /**
     * @param inpt : NCExecuteDaoProposal
     * @returns NCReturnTxs.TxID_executeDaoProposal
     */
    async executeDaoStakeProposal(inpt: NCExecuteDaoProposal) {
        const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));
        
        if (inpt.proposal_id == undefined) throw ("Proposal ID undefined");
        
        const t = await this.aGen.executeStakeProposal(
            [{ actor: inpt.exec, permission: "active" }], Number(dao_id), inpt.proposal_id
        );
        
        const res = await this.SubmitTx(t, [], [inpt.exec_prv_key]) as TransactResult;
        
        let r: NCReturnTxs = {};
        r.TxID_executeDaoProposal = res.transaction_id;
        return r;
    }
    
    /**
     * @param inpt : NCDaoProposalVote
     * @returns NCReturnTxs.TxID_voteDaoProposal
     */
    async voteOnProposal(inpt: NCDaoProposalVote) {
        
        const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));
        //if(this.debug) console.log("Vote for DAO proposal", JSON.stringify(inpt));
        const t = await this.aGen.vote(
            [{ actor: inpt.voter, permission: "active" }],
            inpt.voter, inpt.quantity, inpt.proposal_type || "standart",
            <string>dao_id, inpt.proposal_id, inpt.option
        );
        
        if(this.debug) console.log("Vote for DAO proposal: ", JSON.stringify(t));
        const res = await this.SubmitTx(t,
            [], [inpt.voter_prv_key]) as TransactResult;
        
        if(this.debug) console.log("received from VoteForDaoProposal" + JSON.stringify(res));
        return { TxID_voteDaoProposal: res.transaction_id } as NCReturnTxs;
    }
    
    /**
     * @param inpt : NCDaoWithdrawVoteDeposit
     * @returns NCReturnTxs.TxID_voteDaoProposal
     */
    async withdrawVoteDeposit(inpt: NCDaoWithdrawVoteDeposit) {
        //const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));
        if(this.debug) console.log("withdraw vote deposit make action", JSON.stringify(inpt));
        const t = await this.aGen.withdraw(
            [{ actor: inpt.voter, permission: "active" }],
            inpt.voter, +inpt.vote_id
        );
        
        if(this.debug) console.log("Withdraw vote deposit send action: ", JSON.stringify(t));
        const res = await this.SubmitTx(t,
            [], [inpt.voter_prv_key]) as TransactResult;
        
        //if(this.debug) console.log("received from withdraw: " + JSON.stringify(res));
        return { TxID_WithdrawVoteDeposit: res.transaction_id } as NCReturnTxs;
    }
    
    
    

    // @ts-ignore
    async removeMemberProposal (inpt) {
        const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));
        
        const t = await this.aGen.createRemoveWhiteListProposal(
            [{ actor: inpt.proposer, permission: "active" }],
            inpt.proposer, Number(dao_id),
            inpt.user, inpt.pass_rate,
            inpt.vote_start, inpt.vote_end
        );
        
        const res = await this.SubmitTx(t,
            [],
            [inpt.proposer_prv_key]) as TransactResult;
        
        let r: NCReturnTxs = {};
        r.TxID_removeFromWhiteList = res.transaction_id;
        r.dao_id = dao_id;
        let ps = await this.getDaoMemberRemoveProposals({ ...inpt, dao_id } as NCGetDaoProposals );
        // r.proposals = ps;
        if(this.debug) console.log("Got response: " + JSON.stringify(ps));
        r.proposal_id = ps.rows[ps.rows.length - 1].id;
        return r;
    }
    // daos end
    
      /**
     * @param input 
     * 
     */
      async approveRemoveMemberProposal(inpt: NCApproveDaoProposal) {
        
        try {
            const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));

            console.log(`dao_owmer: ${inpt.dao_owner}, dao_id: ${dao_id}`);

            if (inpt.proposal_id == undefined) throw ("Proposal ID undefined");

            console.log("Got dao_id: ", dao_id, " number: ", Number(dao_id));

            const t = await this.aGen.approveProposal(
                [{actor: inpt.approver, permission: "active"}],
                inpt.approver,
                Number(dao_id), inpt.proposal_id
            );

            console.log("Got action: ", JSON.stringify(t));

            const res = await this.SubmitTx(t, 
                [ecc.privateToPublic(inpt.approver_prv_key)],
                [inpt.approver_prv_key]) as TransactResult;
            
                let r: NCReturnTxs = {};
                r.TxID_approveDaoProposal = res.transaction_id;

                return r;

        } catch(e) {
            console.log((e as any).message);
            console.log(JSON.stringify(e));

            throw e;
        }
    }

    async executeRemoveMemberProposal(inpt: NCExecuteDaoProposal) {
        
        const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));

        if (inpt.proposal_id == undefined) throw ("Proposal ID undefined");

        const t = await this.aGen.executeRemoveWhiteListProposal(
            [{actor: inpt.exec, permission: "active"}],
            Number(dao_id),
            inpt.proposal_id
        );

        const res = await this.SubmitTx(t, [], [inpt.exec_prv_key]) as TransactResult;

        let r: NCReturnTxs = {};

        r.TxID_executeDaoProposal = res.transaction_id;

        return r;
    }
    
    /**
     * @param inpt : getDaoIdByOwner
     * @returns NCReturnTxs.TxID_createDao, NCReturnTxs.dao_id
     */
    async getDaoIdByOwner(owner?: string, noFail?: boolean) : Promise<string> {
        if (!owner)
            throw new Error("DAO undefined");
        
        let p: DAOPayload = { owner: owner }
        if(this.debug) console.log("Get dao by owner: ", JSON.stringify(p));
        let q = await this.cApi.getDAOByOwner(p);
        let w = await q.json();
        
        if(this.debug) console.log("received from getDaoByOwner" + JSON.stringify(w));
        if (!w.rows.length && !noFail)
            throw new Error('User has no dao');
        
        const r: string = w.rows[0]?.id?.toString();
        if(!r && !noFail)
            throw new Error("DAO undefined");
        
        return r;
    }
    
    async getDaoProposals(inpt: NCGetDaoProposals) {
        
        if(this.debug) console.log("Get regular DAO proposals list: ", JSON.stringify(inpt));
        const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner, true));
        if(!dao_id) return { dao_id: null };
        
        if(inpt.proposal_author && (inpt.proposal_id == undefined))
        {
            let w = await this.cApi.getProposalByProposer( { daoID: dao_id,  proposal_author: inpt.proposal_author } as ProposalPayload );
            inpt.proposal_id = await w.json();
        }
        
        if(inpt.proposal_id) inpt.lower_bound = inpt.upper_bound = inpt.proposal_id;
        
        const opt = {
            json: true,
            code: this.services.daos_contract,
            scope: dao_id,
            table: "proposals",
            lower_bound: inpt.lower_bound,
            upper_bound: inpt.upper_bound,
            limit: ~~(inpt.limit??"10"),
            reverse: inpt.reverse,
            index_position: "1",
        } as GetTableRowsPayload;
        
        if(this.debug) console.log("*** get tablerow args" +  JSON.stringify(opt));
        let w = await (await this.cApi.getTableRows( opt )).json();
        
        if(this.debug) console.log("received proposal list" + JSON.stringify(w));
        return { ...w, dao_id };
    }
    
    async getDaoWhitelistProposals(inpt: NCGetDaoProposals) {
        
        if(this.debug) console.log("Get whitelist proposal list: ", JSON.stringify(inpt));
        const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner, true));
        if(!dao_id) return { dao_id: null };
        
        if(inpt.proposal_author && (inpt.proposal_id == undefined))
        {
            let w = await this.cApi.getWhiteListProposalByProposer( { daoID: dao_id,  proposal_author: inpt.proposal_author } as ProposalPayload );
            inpt.proposal_id = await w.json();
        }
        
        if(inpt.proposal_id) inpt.lower_bound = inpt.upper_bound = inpt.proposal_id;
        
        const opt = {
            json: true,
            code: this.services.daos_contract,
            scope: dao_id,
            table: "whlistprpls",
            lower_bound: inpt.lower_bound,
            upper_bound: inpt.upper_bound,
            limit: ~~(inpt.limit??"10"),
            reverse: inpt.reverse,
            index_position: "1",
        } as GetTableRowsPayload;
        
        if(this.debug) console.log("*** get tablerow args" +  JSON.stringify(opt));
        let w = await (await this.cApi.getTableRows( opt )).json();
        
        if(this.debug) console.log("received whitelist proposal list" + JSON.stringify(w));
        return { ...w, dao_id };
    }
    
    async getDaoStakeProposals(inpt: NCGetDaoProposals) {
        
        if(this.debug) console.log("Get stake proposal list: ", JSON.stringify(inpt));
        const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner, true));
        if(!dao_id) return { dao_id: null, comm: "could not get dao_id for this owner" };
        
        
        // --  ***
        if(inpt.proposal_author && (inpt.proposal_id == undefined))
        {
            let w = await this.cApi.getProposalByProposer( { daoID: dao_id,  proposal_author: inpt.proposal_author } as ProposalPayload );
            inpt.proposal_id = await w.json();
        }
        
        // --- ***
        if(inpt.proposal_id) inpt.lower_bound = inpt.upper_bound = inpt.proposal_id;
        const opt = {
            json: true,
            code: this.services.daos_contract,
            scope: dao_id,
            table: "stakeprpls",
            lower_bound: inpt.lower_bound,
            upper_bound: inpt.upper_bound,
            limit: ~~(inpt.limit??"10"),
            reverse: inpt.reverse,
            index_position: "1",
        } as GetTableRowsPayload;
        
        if(this.debug) console.log("*** get tablerow args" +  JSON.stringify(opt));
        let w = await (await this.cApi.getTableRows( opt )).json();
        
        if(this.debug) console.log("received stake proposal list" + JSON.stringify(w));
        return { ...w, dao_id };
    }
    
    async getDaoWhitelist(inpt: NCGetDaoWhiteList) {
        const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));
        //let q = await this.cApi.getDAOWhiteList({ id: inpt.dao_id as string });
        //let w = await q.json();
        const opt = {
            json: true,
            code: this.services.daos_contract,
            scope: dao_id,
            table: "whitelist",
            key_type: "name",
            lower_bound: inpt.lower_bound,
            upper_bound: inpt.upper_bound,
            limit: ~~(inpt.limit??"10"),
            reverse: inpt.reverse,
            index_position: "1",
        } as GetTableRowsPayload;
        let w = await (await this.cApi.getTableRows( opt )).json();
        if(this.debug) console.log("received white list" + JSON.stringify(w));
        return { ...w, dao_id };
    }
    
    async getVotes(inpt: NCGetVotes) {
        let w;
        
        const opt = {
            json: true,
            code: this.services.daos_contract,
            scope: inpt.voter,
            table: "votes",
            key_type: "i64",
            lower_bound: inpt.lower_bound,
            upper_bound: inpt.upper_bound,
            limit: ~~(inpt.limit??"10"),
            reverse: inpt.reverse,
            index_position: "1",
        } as GetTableRowsPayload;
        
        w = await (await this.cApi.getTableRows(opt)).json();
        if(this.debug) console.log("received from getVotes " + JSON.stringify(w.rows));
        return w;
    }
    
    async getDaoMemberRemoveProposals(inpt: NCGetDaoProposals) {
        if(this.debug) console.log("Get rmv member proposal list: ", JSON.stringify(inpt));
        const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner, true));
        if(!dao_id) return { dao_id: null, comm: "could not get dao_id for this owner" };
        
        if(inpt.proposal_id) inpt.lower_bound = inpt.upper_bound = inpt.proposal_id;
        const opt = {
            json: true,
            code: this.services.daos_contract,
            scope: dao_id,
            table: "rmvwhltprpls",
            lower_bound: inpt.lower_bound,
            upper_bound: inpt.upper_bound,
            limit: ~~(inpt.limit??"10"),
            reverse: inpt.reverse,
            index_position: "1",
        } as GetTableRowsPayload;
        
        if(this.debug) console.log("*** get tablerow args" +  JSON.stringify(opt));
        let w = await (await this.cApi.getTableRows( opt )).json();
        
        if(this.debug) console.log("received proposal list" + JSON.stringify(w));
        return { ...w, dao_id };
    }
    
};