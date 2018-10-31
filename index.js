const puppeteer = require('puppeteer')

async function launch() {
	const launchOptions = { headless: false, userDataDir: './tmp' }

	await puppeteer.launch(launchOptions)
	await puppeteer.launch(launchOptions)
	await puppeteer.launch(launchOptions)
}

launch()
