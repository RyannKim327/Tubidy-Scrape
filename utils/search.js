const axios = require("axios")
const cheerio = require("cheerio")

module.exports = async (query) => {
  const url = "https://music.tubidy.com"
  const { data } = await axios.get(`${url}/search`, {
    params: {
      q: query
    }
  })

  const $ = cheerio.load(data)
  const html = $("article[class='item container h-100']")
  let results = []
  console.log(html)
  html.each((i, e) => {
    // const body = $(e).find("div[class='media-body']")
    const content = $(e).find("a")
    const link = content.attr("href")
    const title_container = content.next("div[class='title-container me-2']")
    const title = title_container.children("h3").text()
    const time = title_container.children("div[class='d-flex align-items-center']").find("time").find("span").text()
    results.push({
      "link": link,
      "title": title,
      "duration": time
    })
  })
  //console.log(chasing cars)
  return results
}
