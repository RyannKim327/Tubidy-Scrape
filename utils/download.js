const axios = require("axios")
const cheerio = require("cheerio")

module.exports = async (link) => {
  const url = "https://tubidy.cool"
  const { data } = await axios.get(`${url}${link}`)
  const $ = cheerio.load(data)
  const html = $("li[class='list-group-item big']")
  let result = ""
  html.each((i, e) => {
    const d = $(e)
    if(d.text().includes("Download")){
      result = d.find("a").attr("href")
    }
  })
  return result
}
