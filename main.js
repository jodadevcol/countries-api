import './style.css'
import { listCountries } from './src/listCountries.js'

// document.querySelector('#app').innerHTML = `
//   <div>${listCountries()}</div>
// `

listCountries().then((data) => {
	document.querySelector('#app').innerHTML = `
    <div>${data}</div>
  `
})
