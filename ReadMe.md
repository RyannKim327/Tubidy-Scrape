سشؤشس
### Tubidy Scrape
#### MPOP Reverse II (Ryann Kim Sesgundo)

---
### Introduction
> This is just a simple repository, developed for those who want to look for some alternatives for music api.

---
### Installation
``` Bash
npm install tubidy-scrape@latest
```

---
### How to

#### Search .search(query)
``` NodeJS
const { search } = require("tubidy-scrape")

async function test() {
    const data = await search("Something you want to search")
    console.log(data)
}

test()
```

**Result**
``` JSON
[
    {
        "link": "Song URL",
        "title": "Song title"
    },
    { ... }
]

```

---

#### Choose .choosy(url)
``` NodeJS
const { choosy } = require("tubidy-scrape")


async function test (){
    const data = await choosy("url you want to get")
    console.log(data)
}
test()
```

**Result**
``` JSON
[
    {
        "link": "link to download",
        "text": "File type and sizes"
    }, { ... }
]

```

---
#### Download .download(url)
``` NodeJS
const { download } = require("tubidy-scrape")

async function test(){
    const data = await download("url you want to download")
    console.log(data)
}

test()
```

**Result**
``` JSON
{
    "download": "a link to download directly"
}
```

> For full tutorial, kindly check the `test.js`

---
### Note
> This package is still in development, and there are unexprected errors happend. if you encountered that, kindly email me weryses19@gmail.com or create an issue on my github repository.
