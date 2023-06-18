import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container-fluid">
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#545e6f",
              background: isActive ? "#7600dc" : "#f0f0f0",
            })}
            to="/"
          >
            <b>Home</b>
          </NavLink>

          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#545e6f",
              background: isActive ? "#7600dc" : "#f0f0f0",
            })}
            to="/about-us"
          >
            <b>About</b>
          </NavLink>

          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#545e6f",
              background: isActive ? "#7600dc" : "#f0f0f0",
            })}
            to="/contact-us"
          >
            <b>Contact</b>
          </NavLink>

          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#545e6f",
              background: isActive ? "#7600dc" : "#f0f0f0",
            })}
            to="/gallery"
          >
            <b>Gallery</b>
          </NavLink>

          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#545e6f",
              background: isActive ? "#7600dc" : "#f0f0f0",
            })}
            to="/user-listing"
          >
            <b>UserListing</b>
          </NavLink>

        </div>
      </nav>
    </>
  );
};

export default NavBar;
