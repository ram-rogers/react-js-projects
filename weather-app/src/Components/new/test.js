const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f20f0ab8f8msha843c63ff52a588p19e7c6jsn1937210fde24',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};

try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}