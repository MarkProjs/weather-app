import { useState, } from "react";

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

  function handleCityChange(evt) {
    setCity(evt.target.value);
  }

  function handleSearch() {
    fetchWeatherData();
  }

  return (
    <div className="App">
      <input
        type="text"
        value={city}
        placeholder="Search..."
        onChange={handleCityChange}
      />
      <button onClick={handleSearch}>Search</button>
      {isLoading ? (
        <p>Loading...</p>
      ) : data ? (
        <div>
          <p>Temperature in {city}: {data.data[0].app_temp} C</p>
          <p>Description: {data.data[0].weather.description}</p>
        </div>
      ) : (
        <p>No weather data available</p>
      )}
    </div>
  );
}

export default App;
