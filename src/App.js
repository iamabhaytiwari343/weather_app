import Search from "./components/Search.jsx"
import './App.css';
import Weather from "./components/Weather.jsx";
import { useState } from "react";
import Forecast from "./components/Forecast.jsx";
import { weatherAPI_URL, weatherAPI_KEY } from "./api.js";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
     
    const currentWeatherFetch = fetch(
      `${weatherAPI_URL}/weather?lat=${lat}&lon=${lon}&appid=${weatherAPI_KEY}&units=metric`
    );
     const forecastFetch = fetch(
      `${weatherAPI_URL}/forecast?lat=${lat}&lon=${lon}&appid=${weatherAPI_KEY}&units=metric`
    );

     Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);

  }
  return (
    <div className="container">
       <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <Weather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
