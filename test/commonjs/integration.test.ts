// requires from transpiled code to ensure the build is working as expected
const { NCO_BlockchainAPI, devnet_services, devnet_urls } = require('../../src/index');
const {voteStart, voteEnd} = require("../index");
const api = new NCO_BlockchainAPI({ urls: devnet_urls, services: devnet_services, is_proxy: false, debug: true });
import {NCApproveDaoProposal, NCCreateDaoProposal} from "../../src";
test('it should perform a test call correctly', async () => {
    const keyPair = await api.createKeyPair();
    expect(keyPair.prv_key).toBeDefined();
    expect(keyPair.pub_key).toBeDefined();
})

async function createDaoProposal(input: NCCreateDaoProposal) {
    if (!input) throw Error('missing data')
    if (!input.proposer) throw Error('missing proposer')
    if (!input.proposer_prv_key) throw Error('missing proposer_prv_key')
    if (!input.pass_rate) throw Error('missing pass_rate')
    if (!input.title) throw Error('missing title')
    if (!input.summary) throw Error('missing summary')
    if (!input.vote_start) throw Error('missing vote_start')
    if (!input.vote_end) throw Error('missing vote_end')
    if (!input.url) throw Error('missing url')
    if(!input.dao_id) throw Error('missing dao_id')
    return await api.createDaoProposal(input)
}

async function approveDaoProposal(input: NCApproveDaoProposal) {
    if (!input) throw Error('missing input')
    if (!input.approver) throw Error('missing approver')
    if (!input.approver_prv_key) throw Error('missing approver_prv_key')
    if(!input.dao_id) throw Error('missing dao_id')
    return await api.approveDaoProposal(input)
}

async function voteDaoProposal(args: any) {
    return await api.voteOnProposal(args);
}

async function executeDaoProposal(args:any) {
    return await api.executeDaoProposal(args);
}

test('it should create standard proposal', async function () {
    const input = {
        proposer: "dx.io",
        proposer_prv_key: "5JGP9mDb1b5p6b1y8jxjVkdnzbkr1KLzJuhysVQBUMDUepfDFXh",
        dao_id: "0",
        dao_owner: "dx.io",
        title: "test",
        summary: "test",
        url: "test",
        pass_rate: 50,
        vote_start: voteStart,
        vote_end: voteEnd
    }
    return await createDaoProposal(input);
})

test('it should approve standard proposal', async function () {
    const input = {
        approver: "dx.io",
        approver_prv_key: "5JGP9mDb1b5p6b1y8jxjVkdnzbkr1KLzJuhysVQBUMDUepfDFXh",
        dao_id: 0,
        dao_owner: "dx.io",
        proposal_id: 11,
    }
    return await approveDaoProposal(input);
})

test('it should vote on standard proposal', async function () {
    const input = {
        voter: "dx.io",
        voter_prv_key: "5JGP9mDb1b5p6b1y8jxjVkdnzbkr1KLzJuhysVQBUMDUepfDFXh",
        proposal_id: 12,
        proposal_type: "standart",
        quantity: "1.0000 DXDXIO",
        option: "YES",
        dao_id: "0",
    }
    return await voteDaoProposal(input);
})

test('it should execute standard proposal', async function () {
    const input = {
        exec: "dx.io",
        exec_prv_key: "5JGP9mDb1b5p6b1y8jxjVkdnzbkr1KLzJuhysVQBUMDUepfDFXh",
        dao_id: "0",
        proposal_id: 12,
    }
    return await executeDaoProposal(input);
})