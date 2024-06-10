async function fetchData(city) {
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`;
  let data;
  try {
    let response = await fetch(url);
    if (response.ok) {
      data = await response.json();
    } else {
      data = null;
    }
  } catch (error) {
    data = null;
  }
  return data;
}

export default fetchData;
