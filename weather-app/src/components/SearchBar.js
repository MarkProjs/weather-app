import React from "react";
import "../assets/css/searchBar.css";

export default function SearchBar(props) {
  function handleCityChange(evt) {
    props.setCity(evt.target.value);
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        value={props.city}
        placeholder="Search your city..."
        onChange={handleCityChange}
      />
    </div>
  );
}
