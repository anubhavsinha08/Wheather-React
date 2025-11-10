import SearchBox from "./searchBox";
import InfoBox from "./infoBox";
import { useState } from "react";

export default function WeatherApp() {
  let [weather,setWeather]= useState({
    city:"wonder land",
    temp: 27,
    temp_min: 21,
    temp_max: 29,
    humidity: 56,
    feel_like: 12,
    weather: "HAZE",
  })

  function updateWeatherInfo(newResult){
    setWeather(newResult);
  }

  return (
    <div style={{textAlign: "center"}}>
      <h1>WEATHER FORECAST</h1>
      <SearchBox updateWeatherInfo={updateWeatherInfo}/>
      <br />
      <InfoBox info={weather}/>
    </div>
  );
}
