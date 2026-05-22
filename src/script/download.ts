import axios from "axios"
import * as cheerio from "cheerio"
import { TYPES } from "../lib/static"

export default function DOWNLOAD(endpoint: string, ua: string) {
	return async (id: string, type?: string) => {
		const { data } = await axios.get(`${endpoint}/watch.php`, {
			headers: {
				"User-Agent": ua
			},
			params: {
				id,
				p: TYPES[type?.toString() ?? "mp4"]?.p ?? "mp4",
				lnk: TYPES[type?.toString() ?? "mp4"]?.lnk ?? 6,
				act: "down",
				t: "ssl"
			}
		})

		const $ = await cheerio.load(data)
		const html = $("li.list-group-item.big")
		let play: string | undefined
		let download: string | undefined

		html.each((i, e) => {
			const a = $(e).find("a")
			const text = a.text().toLowerCase()
			const href = a.attr("href")
			if (href?.toLowerCase().includes("act=process")) {
				return {
					error: "The content is in process"
				}
			}
			if (text.includes("play")) {
				play = href
			} else if (text.includes("download")) {
				download = href
			}
		})

		return {
			play,
			download

		}
	}
} 
