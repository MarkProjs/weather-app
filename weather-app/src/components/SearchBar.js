import React from "react";

export default function SearchBar(props) {
  
  function handleCityChange(evt) {
    props.setCity(evt.target.value);
  }


  return (
    <input
        type="text"
        value={props.city}
        placeholder="Search your city..."
        onChange={handleCityChange}
      />
  );
}
