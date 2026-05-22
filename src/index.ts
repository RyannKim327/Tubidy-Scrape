import SEARCH from "./script/search";
import { ENDPOINT, TYPES, USER_AGENT } from "./lib/static"
import REVIEW from "./script/review";
import DOWNLOAD from "./script/download";
import { DownloadResult, ReviewResult, SearchResults } from "./interfaces";


export function Tubidy() {
	const download = DOWNLOAD(ENDPOINT, USER_AGENT)
	const review = REVIEW(ENDPOINT, USER_AGENT)
	const search = SEARCH(ENDPOINT, USER_AGENT)

	return {
		download,
		review,
		search,
		TYPES,
	}
}
