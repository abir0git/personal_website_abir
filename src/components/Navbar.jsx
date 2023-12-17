import {BrowserRouter, Routes, Route, Link, useNavigate, HashRouter } from "react-router-dom";
import { useState } from "react";
import React, { useEffect } from 'react';
import "./style.css"
import logo from "../imgs/logo.png"
import NavbarDropdown from "./NavbarDropdown";

const Navbar = (props) => 
{
    const [DD, setDD] = useState(false);

    useEffect(() => {
        console.log(props.active);
        var active = document.getElementById(props.active);
        console.log(active);
        active.style.color = '#ff7a57';
      }, []);

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

                        {DD && <NavbarDropdown active={props.active}></NavbarDropdown>}
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto align-items-center">
                            <li className="nav-item">
                                <Link className="nav-link" id="nav-home" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" id="nav-about" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" id="nav-project" to="/project">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" id="nav-contact" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>          
            </nav>
        </div>
    );
}

export default Navbar;