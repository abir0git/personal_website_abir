import {BrowserRouter, Routes, Route, Link, useNavigate, HashRouter } from "react-router-dom";
import { useState } from "react";
import React, { useEffect } from 'react';

const NavbarDropdown = (props) =>
{

    useEffect(() => {
        console.log(props.active);
        var active = document.getElementById(props.active);
        console.log(active);
        active.style.fontWeight = 'bold';
      }, []);

    return(
        <div className="dropdown-content">
            <Link className="nav-link" id="nav-home" to="/">Home</Link>
            <Link className="nav-link" id="nav-about" to="/about">About</Link>
            <Link className="nav-link" id="nav-project" to="/project">Projects</Link>
            <Link className="nav-link" id="nav-academic" to="/academic">Academic</Link>
            <Link className="nav-link" id="nav-personal" to="/personal">Personal</Link>
            <Link className="nav-link" id="nav-contact" to="/contact">Contact</Link>
        </div>
    );
} 

export default NavbarDropdown;