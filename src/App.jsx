import React, { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

function App() {
  const Api_key = "f2c6fadc790148e7aa190452251102";
  const inputRef = useRef(null);
  const [weatherData, setWeatherData] = useState(null);
  const fetchWeather = async () => {
    const location = inputRef.current.value;
    if (location) {
      const URL = `https://api.weatherapi.com/v1/current.json?key=${Api_key}&q=${location}`;
      try {
        const response = await fetch(URL);
        if (!response.ok) throw new Error("Could not fetch weather data");
        const data = await response.json();
        setWeatherData(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
  };
  return (
    <div className=" min-h-screen bg-sky-400 grid place-items-center ">
      <div className=" grid place-items-center border-2 border-sky-800 rounded-3xl p-5 gap-6 bg-gradient-to-r from-sky-600 to-sky-300">
        <h1 className="font-extrabold text-3xl text-sky-950">Weather App</h1>
        <div className="bg-sky-200 p-5 w-100  rounded-lg flex">
          <input
            type="text"
            ref={inputRef}
            placeholder="Enter Your Location"
            className="text-xl ml-5 font-serif hover:placeholder-sky-900 border-b border-sky-300 flex-1"
          />
          <div>
            <button onClick={fetchWeather}>
              <FaSearch className="text-xl  text-sky-950" />
            </button>
          </div>
        </div>
        {weatherData && (
          <div className="border bg-sky-300 p-3 rounded-3xl grid place-items-center">
            <h1 className="font-bold border-b underline-offset-3">
              {weatherData.location.name}
            </h1>
            <p>{weatherData.current.temp_c}°C</p>
            <p>{weatherData.current.condition.text}</p>
            <p>Humidity: {weatherData.current.humidity}%</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default App;
