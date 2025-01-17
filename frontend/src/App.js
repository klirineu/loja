import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import Routes from "./routes";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
