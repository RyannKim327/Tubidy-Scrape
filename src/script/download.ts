import axios from "axios"
import * as cheerio from "cheerio"
import { TYPES } from "../lib/static"

export default function DOWNLOAD(endpoint: string, ua: string) {
	return async (id: string, type: string = "mp3audio") => {
		const { data } = await axios.get(`${endpoint}/watch.php`, {
			headers: {
				"User-Agent": ua
			},
			params: {
				id,
				p: TYPES[type]?.p ?? "mp4",
				lnk: TYPES[type]?.lnk ?? 6,
				act: "down",
				t: "ssl"
			}
		})

		const $ = await cheerio.load(data)
		const html = $("i.list-group-item.big")
		let play: string | undefined
		let download: string | undefined

		html.each((i, e) => {
			const a = $(e).find("a")
			const text = a.text().toLowerCase()
			const href = a.attr("href")

			if (text.includes("play")) {
				play = href
			} else if (text.includes("download")) {
				download = href
			}
		})
		if (!play && !download) {
			return {
				error: "The content is in process"
			}
		}

		return {
			play,
			download

		}
	}
} 
