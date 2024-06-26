import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import "../assets/css/content.css";

export default function Content(props) {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [city, setCity] = useState("");
  const [dataName, setDataName] = useState("Montreal");
  const [temp, setTemp] = useState(0.0);
  const [feelsLike, setFeelsLike] = useState(0.0);
  const [iconURL, setIconURL] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }
  }, []);

  useEffect(() => {
    const fetchWeatherData = async ({ city, lat, lon }) => {
      try {
        let url;
        if (city) {
          url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`;
        } else if (lat && lon) {
          url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`;
        } else {
          throw new Error(
            "Either city or latitude and longitude must be provided"
          );
        }

        const resp = await fetch(url);
        const data = await resp.json();
        if (resp.ok) {
          setDataName(data.name);
          setTemp(Math.round(data.main.temp - 273.15));
          setFeelsLike(Math.round(data.main.feels_like - 273.15));
          props.setDesc(data.weather[0].description);
          setIconURL(
            `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
          );
        } else {
          throw new Error(data.message || "Error fetching weather data");
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    if (city) {
      fetchWeatherData({ city });
    } else if (location.latitude && location.longitude) {
      fetchWeatherData({ lat: location.latitude, lon: location.longitude });
    }
  }, [location, city]);

  return (
    <div className="Content">
      <h1>Weather App</h1>
      <SearchBar city={city} setCity={setCity} />
      {dataName ? (
        <div className="main-content">
          <h2>{dataName}</h2>
          <img src={iconURL} alt="weather-icon" />
          <p id="desc">{props.desc}</p>
          <div className="temp">
            <p>Temp: {temp} °C</p>
            <p>Feels like: {feelsLike} °C</p>
          </div>
          <p id="credits">Data provided by OpenWeatherMap ＜（＾－＾）＞</p>
        </div>
      ) : (
        <p>There is an error! We will get back to you! (っ °Д °;)っ</p>
      )}
    </div>
  );
}
