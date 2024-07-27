const startBrowser = require('./browser')
const scrapeController = require('./scrapeController')

let browser = startBrowser()
console.log('0000: ', browser)
scrapeController(browser)