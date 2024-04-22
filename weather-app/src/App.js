import { useState, useEffect } from "react";
import fetchData from "./controllers/FetchModule";
function App() {
  const [data, setData] = useState();
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    (async () => {
      setData(await fetchData("montreal"));
    })();
  }, []);



  return <div className="App">
    <p>{data}</p>


  </div>;
}

export default App;
