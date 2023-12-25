import {BrowserRouter, Routes, Route, Link, Switch, HashRouter } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import About from "./components/About"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Academic from "./components/Academic";
import Personal from "./components/Personal";
import Paintings from "./components/Paintings";
import Recipes from "./components/Recipes";
import Flutes from "./components/Flutes";

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
			path="/academic"
			element = {     <div><Academic/></div>      }
		/>
		<Route className="home"
			path="/personal"
			element = {     <div><Personal/></div>      }
		/>
		<Route className="home"
			path="/contact"
			element = {     <div><Contact/></div>      }
		/>
		<Route className="home"
			path="/personal/paintings"
			element = {     <div><Paintings/></div>      }
		/>
		<Route className="home"
			path="/personal/flutes"
			element = {     <div><Flutes/></div>      }
		/>
		<Route className="home"
			path="/personal/recipes"
			element = {     <div><Recipes/></div>      }
		/>
    </Routes>
	{/* </HashRouter> */}
	{/* </BrowserRouter> */}
    </div>
  );
}

export default App;