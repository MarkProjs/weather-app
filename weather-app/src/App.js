import { useState, useEffect } from "react";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [temp, setTemp] = useState(0.0);
  const [desc, setDesc] = useState("");

  async function fetchWeatherData() {
    try {
      setIsLoading(true);
      const resp = await fetch(
        `https://api.weatherbit.io/v2.0/current?city=${city}&key=${process.env.REACT_APP_API_KEY}`
      );
      const weatherData = await resp.json();
      setData(weatherData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(()=> {
    if (city) {
      fetchWeatherData();   
    }
  }, [city]);

  function handleCityChange(evt) {
    setCity(evt.target.value);
  }
  return <div className="App">
    <input type="text" value={city} placeholder="Search..." onChange={handleCityChange}/>
      {isLoading ? (
        <p>Loading...</p>
      ) : data ? (
        <div>
          <h2>Weather in {city}</h2>
          <p>{/* Display weather data here */}</p>
        </div>
      ) : (
        <p>Please enter a city</p>
      )}

  </div>;
}

export default App;
