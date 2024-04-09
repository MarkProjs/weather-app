import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    (async () => {
      setData(await FetchModule.fetchData(searchInput));
    })();
  }, [searchInput]);



  return <div className="App">
    


  </div>;
}

export default App;
