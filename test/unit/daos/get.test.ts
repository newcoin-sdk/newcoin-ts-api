import {api} from "../index";

it("gets standard proposals", async () => {
	let resp = await api.daos.getDaoProposals({
		dao_owner: "dx.io",
		limit: 100,
	})
	console.log(resp);
}, 60000);

it("gets add member proposals", async () => {
	let resp = await api.daos.getDaoProposals({
		dao_owner: "dx.io",
		limit: 100,
	})
	console.log(resp);
}, 60000);

it("gets remove member proposals", async () => {
	let resp = await api.daos.getDaoMemberRemoveProposals({
		dao_owner: "dx.io",
		limit: 100,
	})
	console.log(resp);
}, 60000);

it("gets dao members", async () => {
	let resp = await api.daos.getDaoWhitelist({
		dao_owner: "dx.io",
	})
	console.log(resp);
}, 60000);

it("gets stake proposals", async () => {
	let resp = await api.daos.getDaoStakeProposals({
		dao_owner: "dx.io",
	})
	console.log(resp);
}, 60000);