import {devnet_services, NCO_BlockchainAPI, devnet_urls} from "../src";
import moment from "moment";

const defaultStartTime = moment().add("2", "minutes");
const defaultEndTime = moment().add("5", "minutes");

export const api = new NCO_BlockchainAPI({
		urls: devnet_urls,
		services: devnet_services,
		debug: true,
		is_proxy: false
	});
export const voteStart = (defaultStartTime).utc().format("YYYY-MM-DDTHH:mm:ss");
export const voteEnd = (defaultEndTime).utc().format("YYYY-MM-DDTHH:mm:ss");
