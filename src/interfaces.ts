export interface SearchResults {
	id: string,
	title?: string,
	link?: string
}

export interface ReviewResult {
	error?: string
	success?: string
}

export interface DownloadResult {
	play?: string
	download?: string,
	error?: string
}
