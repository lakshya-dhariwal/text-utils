import React, { useState } from "react";

function Nav({ darkmode, setDarkmode }) {
  const darkModeToggle = () => {
    if (darkmode) {
      setDarkmode(false);
    } else {
      setDarkmode(true);
    }
  };
  return (
    <nav
      className={
        darkmode
          ? "navbar navbar-expand-lg navbar-dark bg-dark"
          : "navbar navbar-expand-lg  navbar-dark bg-secondary"
      }
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Text Utilities
        </a>
        <div className="d-flex">
          <button onClick={darkModeToggle} className="btn btn-secondary border">
            {darkmode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
