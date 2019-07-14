import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  let cityLinks = [
    { route: "/weather/Toronto", label: "Toronto" },
    { route: "/weather/Montreal", label: "Montreal" }
  ];
  return (
    <nav className="navbar navbar-dark bg-primary fixed-top">
      <Link className="navbar-brand" to="/">
        Weather App
      </Link>
      {cityLinks.map(link => (
        <Link key={link.route} to={link.route}>
          {link.label}
        </Link>
      ))}
      <Link to="/gallery">Gallery</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default NavBar;
