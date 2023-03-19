import {api} from "../../index";

it('votes on standard proposal', async function () {
    let resp = await api.daos.voteOnProposal({
        dao_id: 0,
        option: "",
        proposal_id: "1",
        proposal_type: "standart",
        quantity: "1.0000",
        voter_prv_key: "5JGP9mDb1b5p6b1y8jxjVkdnzbkr1KLzJuhysVQBUMDUepfDFXh",
        dao_owner: "dx.io",
        voter: "dx.io"
    })
    console.log(resp);
});

it('votes on add member proposal', function () {
    let resp = api.daos.voteOnProposal({
        dao_id: 0,
        option: "",
        proposal_id: "1",
        proposal_type: "whitelist",
        quantity: "1.0000",
        voter_prv_key: "5JGP9mDb1b5p6b1y8jxjVkdnzbkr1KLzJuhysVQBUMDUepfDFXh",
        dao_owner: "dx.io",
        voter: "dx.io"
    })
    console.log(resp);
});

it('votes on remove member proposal', function () {
    let resp = api.daos.voteOnProposal({
        dao_id: 0,
        option: "",
        proposal_id: "1",
        proposal_type: "whitelist",
        quantity: "1.0000",
        voter_prv_key: "5JGP9mDb1b5p6b1y8jxjVkdnzbkr1KLzJuhysVQBUMDUepfDFXh",
        dao_owner: "dx.io",
        voter: "dx.io"
    })
    console.log(resp);
});

it('votes on stake proposal', function () {
    let resp = api.daos.voteOnProposal({
        dao_id: 0,
        option: "",
        proposal_id: "1",
        proposal_type: "stake",
        quantity: "1.0000",
        voter_prv_key: "5JGP9mDb1b5p6b1y8jxjVkdnzbkr1KLzJuhysVQBUMDUepfDFXh",
        dao_owner: "dx.io",
        voter: "dx.io"
    })
    console.log(resp);
});