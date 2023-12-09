import {BrowserRouter, Routes, Route, Link, useNavigate, HashRouter } from "react-router-dom";
import { useState } from "react";
import "./style.css"
import logo from "../imgs/a.jpg"
import NavbarDropdown from "./NavbarDropdown";

const Navbar = () => 
{
    const [DD, setDD] = useState(false);

    function DD_activate()
    {
        // console.log("Bui");
        if(!DD)
        {
            setDD(true);
        }
        else
        {
            setDD(false);
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" data-spy="affix" data-offset-top="0">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src={logo} alt=""></img></a>

                    <div className="dropdown">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" aria-expanded="false" 
                        aria-label="Toggle navigation" onClick={DD_activate}>
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {DD && <NavbarDropdown></NavbarDropdown>}
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto align-items-center">
                            <li className="nav-item">
                                <a className="nav-link" href="/personal_website_abir">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/personal_website_abir/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#service">Service</a>
                            </li>                   
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#blog">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>          
            </nav>
        </div>
    );
}

export default Navbar;