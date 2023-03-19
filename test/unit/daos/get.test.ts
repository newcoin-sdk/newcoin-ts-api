import {api} from "../../index";

it("gets standard proposals", async () => {
	let resp = await api.daos.getDaoStandardProposals({
		dao_id: 0,
		proposal_id: "",
		dao_owner: "dx.io",
		limit: 100
	})
	console.log(resp.rows[0].vote_start, resp.rows[0].vote_end);
}, 60000);

it("gets add member proposals", async () => {
	let resp = await api.daos.getDaoAddMemberProposals({
		dao_id: 0, proposal_id: "",
		dao_owner: "dx.io",
		limit: 100
	})
	console.log(resp);
}, 60000);

it("gets remove member proposals", async () => {
	let resp = await api.daos.getDaoRemoveMemberProposals({
		dao_id: 0, proposal_id: "",
		dao_owner: "dx.io",
		limit: 100
	})
	console.log(resp);
}, 60000);

it("gets dao members", async () => {
	let resp = await api.daos.getDaoMembers({
		dao_owner: "dx.io",
	})
	console.log(resp);
}, 60000);

it("gets stake proposals", async () => {
	let resp = await api.daos.getDaoStakeProposals({
		dao_id: 0, proposal_id: "",
		dao_owner: "dx.io"
	})
	console.log(resp);
}, 60000);