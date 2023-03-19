import {voteEnd, voteStart} from "../../index";
const { NCO_BlockchainAPI, devnet_services, devnet_urls } = require('../../../src');
const api = new NCO_BlockchainAPI({ urls: devnet_urls, services: devnet_services, is_proxy: false, debug: true });

test('it should create new member proposal', async function () {
    const input = {
        dao_owner: "dx.io",
        pass_rate: 5,
        proposer: "dx.io",
        proposer_prv_key: "5JGP9mDb1b5p6b1y8jxjVkdnzbkr1KLzJuhysVQBUMDUepfDFXh",
        vote_end: voteEnd,
        vote_start: voteStart,
        user: "dx.io"
    }
    return await api.createDaoAddMemberProposal(input);
})

test('it should create new member proposal', async function () {
    const input = {
        dao_owner: "dx.io",
        pass_rate: 5,
        proposer: "dx.io",
        proposer_prv_key: "5JGP9mDb1b5p6b1y8jxjVkdnzbkr1KLzJuhysVQBUMDUepfDFXh",
        vote_end: voteEnd,
        vote_start: voteStart,
        user: "dx.io"
    }
    return await api.createDaoRemoveMemberProposal(input);
})