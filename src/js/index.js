import axios from 'axios';

export async function init(cb) {
	console.clear();

	let response;
	let countries = [];
	let count = 0;

	try {
		const result = await axios.get(
			'https://restcountries.com/v3.1/all?fields=name,tld,flags,languages,region,subregion,population,currencies,capital,borders,fifa'
		);
		response = result.data;
		response.sort(compare);
	} catch (error) {
		console.error(error);
	}

	response.forEach((r) => {
		countries = [
			...countries,
			{
				id: count++,
				name: r.name.common,
				nativeName: r.name?.nativeName?.[Object.keys(r.name?.nativeName)[0]]?.common,
				topLevelDomain: r.tld,
				img: r.flags.png,
				speaks: r.languages,
				region: r.region,
				subregion: r.subregion,
				population: r.population,
				currencies: r.currencies?.[Object.keys(r?.currencies)[0]],
				capital: r.capital,
				neighbors: getNames(r.borders, response)
			}
		];
	});
	// console.log(countries[0].neighbors);

	cb(countries);
}
function getNames(tab, params) {
	let bords = [];
	params.forEach((p) => {
		if (tab.includes(p.fifa)) {
			// console.log(p.name.common);
			bords = [...bords, p.name.common];
		}
	});
	return bords;
}
function compare(a, b) {
	if (a.name.common < b.name.common) {
		return -1;
	}
	if (a.name.common > b.name.common) {
		return 1;
	}
	return 0;
}
