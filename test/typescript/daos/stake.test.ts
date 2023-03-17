import {voteEnd, voteStart} from "../../index";
const { NCO_BlockchainAPI, devnet_services, devnet_urls } = require('../../../src');
const api = new NCO_BlockchainAPI({ urls: devnet_urls, services: devnet_services, is_proxy: false, debug: true });

test('it should create stake proposal', async function () {
    const input = {
        quantity: {contract: "pool.nco", quantity: "1.0000 GNCO"},
        to: "vectornew.io",
        dao_owner: "dx.io",
        dao_id: 0,
        pass_rate: 5,
        proposer: "dx.io",
        proposer_prv_key: "5JGP9mDb1b5p6b1y8jxjVkdnzbkr1KLzJuhysVQBUMDUepfDFXh",
        vote_end: voteEnd,
        vote_start: voteStart
    }
    return await api.createDaoStakeProposal(input);
})

test('it should approve stake proposal', async function () {
    const input = {
        approver: "dx.io",
        approver_prv_key: "5JGP9mDb1b5p6b1y8jxjVkdnzbkr1KLzJuhysVQBUMDUepfDFXh",
        dao_id: 0,
        dao_owner: "dx.io",
        proposal_id: 1,
    }
    return await api.approveDaoStakeProposal(input);
})

test('it should vote stake proposal', async function () {
    const input = {
        proposal_id: 1,
        voter: "dx.io",
        voter_prv_key: "5JGP9mDb1b5p6b1y8jxjVkdnzbkr1KLzJuhysVQBUMDUepfDFXh",
        proposal_type: "stake",
        quantity: "1.0000 DXDXIO",
        option: "YES",
        dao_id: "0",
    }
    return await api.voteOnProposal(input);
})

test('it should execute stake proposal', async function () {
    const input = {
        exec: "dx.io",
        exec_prv_key: "5JGP9mDb1b5p6b1y8jxjVkdnzbkr1KLzJuhysVQBUMDUepfDFXh",
        dao_id: "0",
        proposal_id: 1,
    }
    return await api.executeDaoStakeProposal(input);
})
