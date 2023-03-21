import {api} from "../../index";

it("gets standard proposals", async () => {
	let resp = await api.getDaoStandardProposals({
		dao_id: 0,
		dao_owner: "dx.io",
	})
	console.log(resp.rows[0].vote_start, resp.rows[0].vote_end);
}, 60000);

it("gets add member proposals", async () => {
	let resp = await api.getDaoAddMemberProposals({
		dao_id: 0, proposal_id: "",
		dao_owner: "dx.io",
		limit: 100
	})
	console.log(resp);
}, 60000);

it("gets remove member proposals", async () => {
	let resp = await api.getDaoRemoveMemberProposals({
		dao_id: 0, proposal_id: "",
		dao_owner: "dx.io",
		limit: 100
	})
	console.log(resp);
}, 60000);

it("gets dao members", async () => {
	let resp = await api.getDaoMembers({
		dao_owner: "dx.io",
	})
	console.log(resp);
}, 60000);

it("gets stake proposals", async () => {
	let resp = await api.getDaoStakeProposals({
		dao_id: 0, proposal_id: "",
		dao_owner: "dx.io"
	})
	console.log(resp);
}, 60000);