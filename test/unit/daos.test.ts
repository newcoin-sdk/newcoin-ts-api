import {devnet_services, NCO_BlockchainAPI, devnet_urls} from "../../src";
import moment from "moment/moment";

const api = new NCO_BlockchainAPI({
		urls: devnet_urls,
		services: devnet_services,
		debug: true,
		is_proxy: false
	}
);

it("creates dao", async () => {}, 60000);

it("creates standard dao proposal", async () => {
	const defaultStartTime = moment().add("2", "minutes");
	const defaultEndTime = moment().add("5", "minutes");
	const start = (defaultStartTime).utc().format("YYYY-MM-DDTHH:mm:ss");
	const end = (defaultEndTime).utc().format("YYYY-MM-DDTHH:mm:ss");
	
	let resp = await api.daos.createDaoProposal({
		dao_owner: "dx.io",
		pass_rate: 5,
		proposer: "dx.io",
		proposer_prv_key: "5JGP9mDb1b5p6b1y8jxjVkdnzbkr1KLzJuhysVQBUMDUepfDFXh",
		summary: "test3",
		title: "test3",
		vote_end: end,
		vote_start: start,
		url: "//"
	})
	
	console.log(resp);
}, 60000);

it("creates whitelist dao proposal", async () => {}, 60000);

it("creates whitelist remove proposal", async () => {
	const defaultStartTime = moment().add("2", "minutes");
	const defaultEndTime = moment().add("5", "minutes");
	const start = (defaultStartTime).utc().format("YYYY-MM-DDTHH:mm:ss");
	const end = (defaultEndTime).utc().format("YYYY-MM-DDTHH:mm:ss");
	let resp = await api.daos.removeMemberProposal({
		dao_owner: "dx.io",
		pass_rate: 5,
		proposer: "dx.io",
		proposer_prv_key: "5JGP9mDb1b5p6b1y8jxjVkdnzbkr1KLzJuhysVQBUMDUepfDFXh",
		vote_end: end,
		vote_start: start,
		user: "dx.io"
	})
	
	console.log(resp);
}, 60000);


it("approves dao proposal", async () => {
	let resp = await api.daos.approveDaoProposal({
		dao_owner: "dx.io",
		approver: "dx.io",
		approver_prv_key: "5JGP9mDb1b5p6b1y8jxjVkdnzbkr1KLzJuhysVQBUMDUepfDFXh",
		proposal_id: 1
	})
	
	console.log(resp);
}, 60000)

it("approves whitelist dao proposal", async () => {}, 6000);


