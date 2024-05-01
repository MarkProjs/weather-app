import { useState } from "react";
import fetchData from "./controllers/FetchModule";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchResult, setSearchResult] = useState(null);

  async function handleSearch(query) {
    setSearchResult(await fetchData(query));
    console.log(`Performing search for: ${query}`);
  }

  return (
    <div className="App">
      <div>
      <h1>Search Example</h1>
        <SearchBar onSearch={handleSearch} />
          {searchResult !== null ? (
            <p>{searchResult}</p>
          ) : (
            <p>No results found</p>
          )}
        </div>
    </div>
  );
}

export default App;
