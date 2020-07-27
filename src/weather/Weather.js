import React, {useState} from 'react';
import cloudy from '../assets/images/cloudy.png';
import sunny from '../assets/images/sunny.png';
import rainy from '../assets/images/rainy.png';

const api = {
    key: process.env.REACT_APP_API_KEY,
    url: "api.openweathermap.org/data/2.5/weather?q="
}

const days = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];
const months = [
    "January", "Fabruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

const Weather = () => {

    const [value, setValue] = useState("");
    const [weather, setWeather] = useState({});

    const date = new Date();    
    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const number = date.getDate();    
    const year = date.getFullYear();
    let style = {};
    let src="";

    const handleKeyPress = (event) => {
        if(event.key === "Enter") {
            fetch(`https://${api.url}${value}&units=metric&appid=${api.key}`)
            .then(response => response.json())
            .then(result => {
                setWeather(result);               
                setValue("");
            })
        }
    }   
    
    return (
        <div className="form-container">
            <input
                type="text"
                value={value}
                placeholder="Enter the city" 
                autoFocus
                onChange={event => setValue(event.target.value)}
                onKeyPress={handleKeyPress}
            />
        {
           (typeof weather.main !== "undefined")
           ? (
               (weather.weather[0].main === "Rain")
               ? ( 
                    style = {backgroundColor : "#3d4874"}, 
                    src = rainy
                  )
                : weather.weather[0].main === "Clear"
                ? (
                    style = {backgroundColor : "#f5b87f"},
                    src = sunny
                  )
                : (
                    style = {backgroundColor: "#5ab5d2"},
                    src = cloudy
                  ),
                
                <div className="card-weather" style={style} >   
                    <label className="date">{day}, {number} {month} {year} </label>
                    <h2>{weather.name} {weather.sys.country}</h2>
                    <div className="img-weather">
                        <img src={src} alt="weather-icon"></img>                        
                    </div>                    
                    <label>{weather.weather[0].main}</label>
                    <h1>{weather.main.temp}°C</h1>
                </div> 
            )
           : ("")
        }           
        </div>
    );
}

export default Weather;