import { useState, useEffect } from "react";
import fetchData from "./controllers/FetchModule";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchResult, setSearchResult] = useState(null);

  async function handleSearch(query) {
    const result = await fetchData(query)
    setSearchResult(result);
    console.log(`Performing search for: ${query}`);
    
  }
  useEffect(()=> {
    console.log(searchResult);
  }, [searchResult]);
  return (
    <div className="App">
      <div>
      <h1>Search Example</h1>
        <SearchBar onSearch={handleSearch} />
          {/* {searchResult !== null ? (
            <p>{searchResult}</p>
          ) : (
            <p>No results found</p>
          )} */}
        </div>
    </div>
  );
}

export default App;
