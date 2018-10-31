const puppeteer = require('puppeteer')

async function launch() {
	// const launchOptions = { headless: true, userDataDir: './tmp' } // works
	const launchOptions = { headless: false, userDataDir: './tmp' } // doesn't work

	await puppeteer.launch(launchOptions)
	await puppeteer.launch(launchOptions)
	await puppeteer.launch(launchOptions)

	console.log('all good!')
}

launch()
