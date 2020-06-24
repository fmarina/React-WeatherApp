import React, {useState} from 'react';
import cloudy from '../assets/images/cloudy.png';
import sunny from '../assets/images/sunny.png';
import rainy from '../assets/images/rainy.png';

const api = {
    key: "2461ad88218bfad4cb98068a09c702e8",
    url: "api.openweathermap.org/data/2.5/weather?q="
}

const days = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];
const months = [
    "January", "Fabruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

const Weather = (props) => {

    const [value, setValue] = useState("");
    const [weather, setWeather] = useState({});

    const date = new Date();    
    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const number = date.getDate();    
    const year = date.getFullYear();

    const handleKeyPress = (event) => {
        if(event.key === "Enter") {
            fetch(`http://${api.url}${value}&units=metric&appid=${api.key}`)
            .then(response => response.json())
            .then(result => {
                setWeather(result);   
                console.log(result);             
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
          ?          
            <div 
                className="card-weather"
                style={  
                        weather.weather[0].main == "Rain"
                        ? {backgroundColor : "#3d4874"}
                        : weather.weather[0].main == "Clear"
                        ? {backgroundColor : "#f5b87f"}
                        : {backgroundColor: "#5ab5d2"}
                }
            >
                <label>{day}, {number} {month} {year} </label>
                <h2>{weather.name} {weather.sys.country}</h2>
                <div className="img-weather">
                {
                    weather.weather[0].main == "Rain"
                    ? <img src={rainy} alt="logo"></img>
                    : weather.weather[0].main == "Clouds"
                    ? <img src={cloudy} alt="logo"></img>
                    : <img src={sunny} alt="logo"></img>
                
                }

                    
                </div>
                <h1>{weather.main.temp}°C</h1>
            </div> 
        : ""
        }           
        </div>

    );
}

export default Weather;