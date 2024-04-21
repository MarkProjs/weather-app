async function fetchData(city) {
  let url = new URL(
    `https://api.tomorrow.io/v4/weather/forecast?location=${city.toLowerCase()}&apikey=${
      process.env.TOMORROW_API_KEY
    }`,
    location.origin
  );
  let data;
  try {
    let response = await fetch(url);
    if (response.ok) {
      let allData = await response.json();
      
    } else {
      data = null;
    }
  } catch (error) {
    data = null;
  }
  return data;
}

export default fetchData;
