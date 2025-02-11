import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
function App() {
  const Api_key = "f2c6fadc790148e7aa190452251102";
  const inputRef = useRef(null);
  const fetchWeather = async () => {
    const URL = `https://api.weatherapi.com/v1/current.json?key=` + { Api_key };
    {
      Api_key;
    }
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "--data");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-sky-400 min-h-screen grid place-items-center">
      <div className="bg-sky-200 p-5 w-100 rounded-lg ">
        <input
          type="text"
          ref={inputRef}
          placeholder="Enter Your Location"
          className="text-xl ml-5 font-serif hover:placeholder-sky-900 border-b border-sky-300 flex-1"
        />

        <button onClick={fetchWeather}>
          <FaSearch className="text-xl text-sky-950" />
        </button>
      </div>
    </div>
  );
}

export default App;
