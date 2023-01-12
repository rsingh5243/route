import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Product from "./Product";
import "./App.css";
import Contact from "./Contact";
import Home from "./Home";
import About from "./About";

export default function Myapp() {
  return (
    <>
      <div className="conatiner">
        <div className="row">
          <Router>
            <ul className="ul">
              <li className="li">
                <Link to="/">Home</Link>
              </li>
              <li className="li">
                <Link to="/product">Product</Link>
              </li>
              <li className="li">
                <Link to="/about">About</Link>
              </li>
              <li className="li">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <Routes>
              <Route exact path="/" element={<Home></Home>}></Route>
              <Route
                exact
                path="/product"
                element={<Product></Product>}
              ></Route>
              <Route exact path="/about" element={<About></About>}></Route>
              <Route
                exact
                path="/contact"
                element={<Contact></Contact>}
              ></Route>
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}
