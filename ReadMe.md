# Tubidy Scrape
#### MPOP Reverse II (Ryann Kim Sesgundo)

---
### Introduction
> This is a simple library for scraping music and video information from Tubidy. Developed for those looking for alternatives for music APIs.

---
### Installation
```bash
npm install tubidy-scrape@latest
```

---
### Usage

First, import and initialize the `Tubidy` factory function:

```javascript
const { Tubidy } = require("tubidy-scrape");
const tubidy = Tubidy();
```

#### Search
Search for music or videos by query.

```javascript
async function searchMusic() {
    const results = await tubidy.search("Something you want to search", 1); // query, max_pages (optional, default 1)
    console.log(results);
}

searchMusic();
```

**Result Format**
```json
[
    {
        "id": "content_id",
        "title": "Song title",
        "link": "https://..."
    },
    { ... }
]
```

---

#### Review
Check if the content is available or still being processed.

```javascript
async function checkContent() {
    const data = await tubidy.review("content_id");
    console.log(data);
}

checkContent();
```

**Result Format**
```json
{
    "success": "It is open to go"
}
// OR
{
    "error": "This content is in process"
}
```

---

#### Download
Get the download and play links for a specific content ID.

```javascript
async function getDownload() {
    const data = await tubidy.download("content_id", "mp3audio"); // id, type (optional, default "mp3audio")
    console.log(data);
}

getDownload();
```

**Available Types:**
- `mp3audio` (default)
- `mp4audio`
- `video`

**Result Format**
```json
{
    "play": "https://...",
    "download": "https://..."
}
```

---
### Changelog
For a detailed list of changes, please see the [CHANGELOG.md](./CHANGELOG.md) file.

---
### Note
> This package is still in development. If you encounter any unexpected errors, please email me at weryses19@gmail.com or create an issue on the GitHub repository.
