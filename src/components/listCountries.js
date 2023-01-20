export async function listCountries() {
	let htmlCountries = await renderCountries()

	return `${htmlCountries}`
}

async function fetchCountries() {
	const options = {
		method: 'GET',
	}

	try {
		const response = await fetch('https://restcountries.com/v3.1/all', options)
		return await response.json()
	} catch (error) {
		console.error(`Error. ${error.message}`)
	}
}

async function renderCountries() {
	let dataCountries = fetchCountries()
	let renderHtml = ''

	await dataCountries.then((data) => {
		data.forEach((countrie) => {
			let capitals = 
			
			renderHtml += `
				<article class="jd-countrie">
					<figure class="jd-countrie-figure">
						<img class="jd-countrie-figure--img" src="${countrie.flags.png}" alt="${countrie.name.common} flag">
					</figure>
					<aside class="jd-countrie-text">
						<h2 class="jd-countrie-text--title">${countrie.name.common}</h2>
						<div>
							<span>Population</span>
							<span>${countrie.population}</span>
						</div>
						<div>
							<span>Region</span>
							<span>${countrie.region}</span>
						</div>
						<div>
							<span>Capital</span>
							${
								countrie.capital.forEach(cap => {
									cap
								})
							}
						</div>
					</aside>
				</article>
			`
		})
	})

	return renderHtml
}
