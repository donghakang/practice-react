import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./List";
import Header from "./Header.jsx";

function App() {
  // ****
  const [item, setItem] = useState(["JSX", "JAVA"]);
  const [lang, setLang] = useState();
  const [loading, setLoading] = useState(false);
  // ****

  useEffect(() => {
    console.log("when rendering... ");
  }, [lang]);

  // // fetch the data from server
  // useEffect(() => {
  //   fetchInitData();
  // }, []);     //--> 한번 만 실행이 된다.

  // const fetchInitData = async () => {
  //   setLoading(true);
  //   const response = await fetch('https://localhost:8080/todo');
  //   const initialData = await response.json();
  //   console.log(initialData);
  //   setLoading(false);
  // }

  const changeInputData = (e) => {
    setLang(e.target.value);
  };

  const addData = (e) => {
    e.preventDefault(); // 다음 화면으로 전환하는것을 방지한다.
    setItem([...item, lang]); // 기존 List에 아이템을 추가한다.
  };

  return (
    <div>
      <h1>LIST</h1>
      <Header language={item} />
      <form action="">
        <input
          type="text"
          name=""
          id=""
          placeholder="Type list here"
          onChange={changeInputData}
        ></input>
        <input type="button" value="Submit" onClick={addData}></input>
      </form>
      <List language={item} loading={loading} />
    </div>
  );
}

export default App;
