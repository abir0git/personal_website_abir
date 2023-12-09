import {BrowserRouter, Routes, Route, Link, Switch, HashRouter } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import About from "./components/About"

const App = () =>
{
  return (
    <div className="app">
	<BrowserRouter basename="/personal_website_abir">
	{/* <HashRouter> */}
    <Routes>
		<Route className="home"
			path="/"
			element = {     <div><Home/></div>      }
		/>
		<Route className="home"
			path="/about"
			element = {     <div><About/></div>      }
		/>
    </Routes>
	{/* </HashRouter> */}
	</BrowserRouter>
    </div>
  );
}

export default App;
