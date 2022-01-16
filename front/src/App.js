import React, { useState, useEffect } from "react";
import axios from "axios";
// import weatherAPI from "../api/weatherAPI";

function App() {
  const [result, setResult] = useState("");
  const [userInput, setUserInput] = useState("");
  const [clickSearch, setClickSearch] = useState("");

  useEffect(() => {
    const clickedOnSearch = async () => {
      try {
        const data = await axios.get(`/weather?address=${clickSearch}`);
        setResult(data.data);
      } catch (err) {
        throw Error(err);
      }
    };
    clickedOnSearch();
  }, [clickSearch]);

  const onChangeFunc = (e) => {
    setUserInput(e.target.value);
  };

  const onClickFunc = (e) => {
    e.preventDefault();
    setClickSearch(userInput);
  };

  return (
    <div>
      <h1>Weather</h1>
      <h3>Use this site to get your wearher</h3>
      <form>
        <input onChange={onChangeFunc} type="text" value={userInput} />
        <button onClick={onClickFunc}>Search</button>
      </form>
      <div>
        <div>{result.forecast}</div>
        <div>{result.location}</div>
      </div>
    </div>
  );
}

export default App;
