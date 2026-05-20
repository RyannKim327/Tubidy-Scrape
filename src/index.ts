import SEARCH from "./script/search";
import { ENDPOINT, TYPES, USER_AGENT } from "./lib/static"
import REVIEW from "./script/review";
import DOWNLOAD from "./script/download";


export function Tubidy() {
	const download = DOWNLOAD(ENDPOINT, USER_AGENT)
	const review = REVIEW(ENDPOINT, USER_AGENT)
	const search = SEARCH(ENDPOINT, USER_AGENT)
	const types = TYPES

	return {
		download,
		review,
		search,
		types
	}
}
