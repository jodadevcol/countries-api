import './../assets/css/normalize.css'
import './../assets/css/style.css'
import { listCountries } from './components/listCountries.js'

let _Countries = document.querySelector('#jd-countries')

if (_Countries !== null) {
	listCountries().then((data) => {
		_Countries.innerHTML = `${data}`
	})
}
