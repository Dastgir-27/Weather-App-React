import { useEffect, useState } from "react"
import "./Weather.css";
import SearchBox from "./SearchBox.jsx";
import DisplayWeatherData from "./DisplayWeatherData.jsx";



export default function Weather(){
   
    let [tempData,setTempData] = useState({temp: 0,feelsLike:"__", humidity: 0, min: 0, max: 0,location:"",country:""});
    

    let settingData = (newData) => {
        setTempData(newData);
    }


    useEffect(() => {
        async function oneTime() {
        let res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ed44d74911754d4081692238252707&q=mumbai&days=1`);
        let data = await res.json();
        let custom = data.forecast.forecastday[0].day;
        let result = {
            temp: custom.avgtemp_c,
            feelsLike: custom.condition.text,
            humidity: custom.avghumidity,
            min: custom.mintemp_c,
            max: custom.maxtemp_c,
            location: data.location.name,
            country: data.location.country,
        }
        setTempData(result);
        }
        oneTime();  
    },[]);

    return( 
        <div className="weatherDiv">
            <h2 style={{color: "white"}}>🌍Weather App</h2>
            <SearchBox settingData={settingData}/>
            <DisplayWeatherData tempData={tempData}/>
        </div>
    );
}   