const axios = require("axios")
const cheerio = require("cheerio")

module.exports = async (url) => {
  if(!url.startsWith("https:") || !url.startsWith("http:")){
    url = `https:${url}`
  }
  const { data } = await axios.get(url)
  const $ = cheerio.load(data)
  const html = $("li[class='list-group-item']")
  let result = []
  html.each((i, e) => {
    result.push({
      "link": $(e).find("a").attr("href"),
      "text": $(e).find("a").text().replace(/\n/, "")
    })
  })
  return result
}
