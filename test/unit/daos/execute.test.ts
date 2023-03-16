// import {api, voteEnd, voteStart} from "./index";

import {api} from "../../index";

it('executes standard proposal', async function () {
    let resp = api.daos.executeDaoProposal({
        dao_id: 0,
        proposal_author: "",
        proposal_id: 0,
        exec_prv_key: "5JGP9mDb1b5p6b1y8jxjVkdnzbkr1KLzJuhysVQBUMDUepfDFXh",
        dao_owner: "dx.io",
        exec: "dx.io"
    })
    console.log(resp);
});

it('executes add member proposal', async function () {});

it('executes remove member proposal', async function () {});

it('executes stake proposal', async function () {});