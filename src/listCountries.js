export async function listCountries() {
	let htmlCountries = await renderCountries()

	return `
		List countries

		${htmlCountries}
	`
}

async function fetchCountries() {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'a7f342b9aemsh89aa9237b4df2b1p186775jsn27adb78d5dd1',
			'X-RapidAPI-Host': 'ajayakv-rest-countries-v1.p.rapidapi.com',
		},
	}

	try {
		const response = await fetch('https://restcountries.com/v3.1/all', options)
		return await response.json()
	} catch (error) {
		console.error(`Error. ${error}`)
	}
}

async function renderCountries() {
	let dataCountries = fetchCountries()
	let renderHtml = ''

	await dataCountries.then((data) => {
		data.forEach((countrie) => {
			renderHtml += `
				<article>
					<figure>
						<img src="${countrie.flags.png}" alt="${countrie.name.common} flag">
					</figure>
					<aside>
						<h2>${countrie.name.common}</h2>
					</aside>
				</article>
			`
		})
	})

	return renderHtml
}
