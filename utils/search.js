const axios = require("axios")
const cheerio = require("cheerio")

module.exports = async (query) => {
  const url = "https://tubidy.cool"
  const { data } = await axios.get(`${url}/search.php?q=${query}`)
  const $ = cheerio.load(data)
  const html = $("div[class='media-body']") // $("div[class='container-fluid pagecontent']")
  let results = []
  // console.log(html)
  html.each((i, e) => {
    // const body = $(e).find("div[class='media-body']")
    const content = $(e).find("a")
    const link = content.attr("href")
    const title = content.attr('aria-label')
    results.push({
      "link": link,
      "title": title
    })
  })
  //console.log(chasing cars)
  return results
}
