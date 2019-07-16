import React from "react";
import "reset-css";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import logo from "./Wikipedia-logo-v2.svg";

function App() {
  return (
    <div className="App">
      <Header />
      <img src={logo} alt="Logo" className="logo-image" />
      <Search />
    </div>
  );
}

export default App;
