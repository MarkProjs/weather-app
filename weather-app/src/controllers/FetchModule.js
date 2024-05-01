async function fetchData(city) {
let url = `https://api.tomorrow.io/v4/weather/forecast?location=${city.toLowerCase()}&apikey=${process.env.REACT_APP_API_KEY}`;
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
