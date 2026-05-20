import axios from "axios"
import * as cheerio from "cheerio"

export default function REVIEW(endpoint: string, ua: string) {
	return async (id: string) => {
		const { data } = await axios.get(`${endpoint}/watch/${id}/mp4/fs`, {
			headers: {
				"User-Agent": ua
			}
		})
		const $ = await cheerio.load(data)
		const html = $("li.list-group-item")
		let error: string | undefined

		html.each((i, e) => {
			const a = $(e).find("a")
			const href = a.attr("href")

			if (href?.includes("act=process")) {
				error = "This content is in process"
				return
			}
		})
		if (error) {
			return { error }
		}
		return {
			"success": "It is open to go"
		}

	}
}
