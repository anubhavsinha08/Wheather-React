import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import './SearchBox.css'

export default function SearchBox() {
    let[city,setCity]= useState("")

    let ApiUrl="https://api.openweathermap.org/data/2.5/weather";
    let ApiKey="099b2c0580aba67afad0502ae9ce0a21";

    let getWeatherInfo=async()=>{
       let resopnse= await fetch(`${ApiUrl}?q=${city}&appid=${ApiKey}&units=metric`);
       let jsonResponse = await resopnse.json();
       console.log(jsonResponse);

       let result={
        city: city,
        temp: jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description
       }
       console.log(result);
    }


    function handleChange(event){
        setCity(event.target.value)
    }

    let handleSubmiit=(event)=>{
        event.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    }
  return (
    <div className="SearchBox">
      {/* <h1>Search For Weather</h1> */}
      <form onSubmit={handleSubmiit}>
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
        
        <Button variant="outlined" type="submit" className="submitBtn">Submit</Button>
      </form>
    </div>
  );
}
