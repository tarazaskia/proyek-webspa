import React, { Component } from "react";
import { Routes, NavLink, HashRouter } from "react-router-dom";
import './style.css';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="title">Single Page Application</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
          </ul>
          <div className="content">
          <Routes exact path="/Home" Component={Home} />
          <Routes path="/About"Component={About} />
          <Routes path="/Contact" Component={Contact} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;