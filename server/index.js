const axios = require("axios")
const cheerio = require("cheerio")
const express = require("express")
const cors = require("cors")

const URLS = []
async function run() {
    //TODO: create a function that enters info from user input to all URLs we want to scrape in order to generate results.
    try {
        const { data } = await axios.get(url)

        const $ = cheerio.load(data)
    } catch (err) {
        console.log("ERROR: ", err)
    }
}

run()
const app = express()
const PORT = process.env.PORT || 3001

// Static route to serve up the content of our built webpack bundle which is located in the dist folder
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`))
