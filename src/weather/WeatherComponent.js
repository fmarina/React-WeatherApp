import React, {useState} from 'react';
import cloudy from '../assets/images/cloudy.png';
import sunny from '../assets/images/sunny.png';
import rainy from '../assets/images/rainy.png';

const api = {
    key: "2461ad88218bfad4cb98068a09c702e8",
    url: "api.openweathermap.org/data/2.5/weather?q="
}

const Weather = (props) => {

    const [value, setValue] = useState("");
    const [weather, setWeather] = useState({});

    const handleKeyPress = (event) => {
        if(event.key === "Enter") {

            fetch(`http://${api.url}${value}&appid=${api.key}`)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setWeather(result);
                setValue("");
            });
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

            <div className="card-weather">
                <label>Monday, 27th April</label>
                <label>6:27am</label>
                <h2>London</h2>
                <div className="img-weather">
                    <img src={cloudy} alt="logo"></img>
                </div>
                <h1>10°C</h1>
                
            </div>
        </div>

    );
}

export default Weather;