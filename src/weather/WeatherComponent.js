import React from 'react';
import cloudy from '../assets/images/cloudy.png';
import sunny from '../assets/images/sunny.png';
import rainy from '../assets/images/rainy.png';

const Weather = (props) => {
    return (
        <div className="form-container">
            <input
                type="text"
                placeholder="Enter the city" 
                autoFocus               
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