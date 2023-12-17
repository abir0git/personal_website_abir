import {BrowserRouter, Routes, Route, Link, Switch, HashRouter } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import About from "./components/About"
import Project from "./components/Project"
import Contact from "./components/Contact"

const App = () =>
{
  return (
    <div className="app">
	{/* <BrowserRouter basename="/personal_website_abir"> */}
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
		<Route className="home"
			path="/project"
			element = {     <div><Project/></div>      }
		/>
		<Route className="home"
			path="/contact"
			element = {     <div><Contact/></div>      }
		/>
    </Routes>
	{/* </HashRouter> */}
	{/* </BrowserRouter> */}
    </div>
  );
}

export default App;