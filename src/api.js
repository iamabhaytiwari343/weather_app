export const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
export const geoDBoptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '753d5abf17mshd27c2afb8c5cfb9p1f5cb3jsn6e5386a9bb2e',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

// try {
// 	const response = await fetch(url, geoDBoptions);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }