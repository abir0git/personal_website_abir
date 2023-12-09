import {BrowserRouter, Routes, Route, Link, useNavigate, HashRouter } from "react-router-dom";

const NavbarDropdown = () =>
{
    return(
        <div className="dropdown-content">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <a className="nav-link" href="#service">Service</a>
            <a className="nav-link" href="#portfolio">Portfolio</a>
            <a className="nav-link" href="#blog">Blog</a>
            <a className="nav-link" href="#contact">Contact</a>
        </div>
    );
} 

export default NavbarDropdown;