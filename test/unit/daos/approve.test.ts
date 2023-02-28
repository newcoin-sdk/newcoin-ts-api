import { api } from "../index";

it("approves standard proposal", async () => {
	let resp = await api.daos.approveDaoProposal({
		dao_owner: "dx.io",
		approver: "dx.io",
		approver_prv_key: "5JGP9mDb1b5p6b1y8jxjVkdnzbkr1KLzJuhysVQBUMDUepfDFXh",
		proposal_id: 0
	})
	console.log(resp);
}, 60000)

// you must whitelist yourself, and this user is already whitelisted
// no current add member proposals
it("approves add member proposal", async () => {
	let resp = await api.daos.approveDaoWhitelistProposal({
		dao_owner: "dx.io",
		approver: "dx.io",
		approver_prv_key: "5JGP9mDb1b5p6b1y8jxjVkdnzbkr1KLzJuhysVQBUMDUepfDFXh",
		proposal_id: 0
	})
	console.log(resp);
}, 6000);

// it says proposal can not be approved
it("approves remove member proposal", async () => {
	let resp = await api.daos.approveRemoveMemberProposal({
		dao_owner: "dx.io",
		approver: "dx.io",
		approver_prv_key: "5JGP9mDb1b5p6b1y8jxjVkdnzbkr1KLzJuhysVQBUMDUepfDFXh",
		proposal_id: 0
	})
	console.log(resp);
}, 6000);

it("approves stake proposal", async () => {
	let resp = await api.daos.approveDaoStakeProposal({
		dao_owner: "dx.io",
		approver: "dx.io",
		approver_prv_key: "5JGP9mDb1b5p6b1y8jxjVkdnzbkr1KLzJuhysVQBUMDUepfDFXh",
		proposal_id: 0
	})
	console.log(resp);
}, 6000);