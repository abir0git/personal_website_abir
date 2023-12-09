import {BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import About from "./components/About"

const App = () =>
{
  return (
    <div className="app">
	<BrowserRouter>
    <Routes>
		<Route className="home"
			path="/personal_website_abir"
			element = {     <div><Home/></div>      }
		/>
		<Route className="home"
			path="/personal_website_abir/about"
			element = {     <div><About/></div>      }
		/>
    </Routes>
	</BrowserRouter>
    </div>
  );
}

export default App;