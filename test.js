const { choosy, search, download } = require("./index.js")

async function test(){
  const a = await search("214 rivermaya")
  console.log(a)
  const b = await choosy(a[0].link)
  console.log(b)
  const c = await download(b[0].link)
  console.log(c)
}
test()
