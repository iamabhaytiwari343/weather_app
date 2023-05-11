export const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
export const geoDBoptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '753d5abf17mshd27c2afb8c5cfb9p1f5cb3jsn6e5386a9bb2e',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const weatherAPI_URL="https://api.openweathermap.org/data/2.5";
export const weatherAPI_KEY="004d9636f48479079ef848cb5945eb5b";

// try {
// 	const response = await fetch(url, geoDBoptions);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }