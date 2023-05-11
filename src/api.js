export const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
export const geoDBoptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '',// your API KEY of rapidAPI GEODB
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const weatherAPI_URL="https://api.openweathermap.org/data/2.5";
export const weatherAPI_KEY=""; //YOUR API KEY OF OPEN WEATHER

// try {
// 	const response = await fetch(url, geoDBoptions);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }