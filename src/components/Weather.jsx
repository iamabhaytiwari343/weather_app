import "./weather.css";
import React from 'react';
import sunny from '../icons/01d.png'

const Weather = () => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">Belgrade</p>
                    <p className="description">Sunny</p>
                </div>

                <img src={sunny} alt="weather" className="weatherIcon" />
            </div>
            <div className="bottom">
                <p className="temperature">18</p>
                <div className="details">
                    <div className="parameterRow">
                        <span className="parameterLabel">Details</span>

                    </div>
                    <div className="parameterRow">
                        <span className="parameterLabel">feels like</span>
                        <span className="parameterValue">22 degree celsius</span>
                    </div>
                    <div className="parameterRow">
                        <span className="parameterLabel">wind</span>
                        <span className="parameterValue">22 m/s</span>
                    </div>
                    <div className="parameterRow">
                        <span className="parameterLabel">Humidity</span>
                        <span className="parameterValue">22 m/s</span>
                    </div>
                    <div className="parameterRow">
                        <span className="parameterLabel">pressure</span>
                        <span className="parameterValue">22 m/s</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather