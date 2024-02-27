const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const {response} = require("express");

const app = express()

const url = 'https://whatagrouplinks.com/'

axios(url)
.then(response => {
    const html = response.data
    console.log(html)
})

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`)