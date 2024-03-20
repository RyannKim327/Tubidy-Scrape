const search = require("./utils/search.js")
const choosy = require("./utils/choosy.js")
const download = require("./utils/download.js")

async function test(){
  const a = await search("chasing cars")
  const b = await choosy(a[0].link)
  const c = await download(b[0].download)
  console.log(c)
}

test()
