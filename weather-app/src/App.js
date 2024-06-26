import { useEffect, useState } from "react";
import "./App.css";
import Content from "./components/Content";

function App() {
  const [desc, setDesc] = useState("clear");
  const [weatherCondition, setWeatherCondition] = useState("clear");

  useEffect(() => {
    function changeBackGround() {
      if (desc.includes("clouds")) {
        setWeatherCondition("clouds");
      } else if (desc.includes("rain")) {
        setWeatherCondition("rain");
      } else if (desc.includes("snow")) {
        setWeatherCondition("snow");
      } else if (desc.includes("clear")) {
        setWeatherCondition("clear");
      } else {
        setWeatherCondition("mist");
      }
    }
    changeBackGround();
  }, [desc, weatherCondition]);
  return (
    <div className={`${weatherCondition}`}>
      <Content desc={desc} setDesc={setDesc} />
    </div>
  );
}

export default App;
