import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  
  function handleInputChange(event) {
    setQuery(event.target.value);
  }

  function handleSearch() {
    onSearch(query);
  }

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
