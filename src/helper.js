async function weatherData(input){
    try{
        let res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ed44d74911754d4081692238252707&q=${input}&days=1`);
        let data = await res.json();
        let custom = data.forecast.forecastday[0].day;
        let result = {
            temp: custom.avgtemp_c,
            feelsLike: custom.condition.text,
            humidity: custom.avghumidity,
            min: custom.mintemp_c,
            max: custom.maxtemp_c,
            location: data.location.name,
            country: data.location.country
        }
        return result;
    } catch(err){
        throw err;
    }
   
}

export {weatherData};