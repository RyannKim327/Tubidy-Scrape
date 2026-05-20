import axios from "axios"
import * as cheerio from "cheerio"
import { SearchResults } from "../interfaces"

export default function SEARCH(endpoint: string, ua: string) {
	return async (song: string, max_pages: number = 1) => {
		let results: SearchResults[] = []
		let page = 1
		while (page <= max_pages) {
			const { data } = await axios.get(`${endpoint}/search.php`, {
				headers: {
					"User-Agent": ua
				},
				params: {
					q: song,
					si: 7,
					pn: page
				}
			})

			const $ = await cheerio.load(data)
			const html = $("div.media-body")

			html.each((i, e) => {
				const content = $(e).find("a")
				const href = content.attr("href")
				if (href) {
					const title = content.attr("aria-label")
					const regex = href?.match(/\/watch\/([^\/]+)/)
					const id = regex ? regex[1] : undefined
					const link = href.startsWith("//") ? `https:${href}` : href.startsWith("/") ? `${endpoint}${href}` : href

					if (id) {
						results.push({
							id,
							title,
							link
						})
					}
				}

			})

			page++
		}
		return results
	}
}
