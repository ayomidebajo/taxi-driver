import React from "react";

function navbar() {
  return (
    <div className="container">
      <div className="navbar">
        <ul className="nav-list">
          <li>
            <a href="#">
            <h3><i class="fas fa-car-alt"></i>Taxi Drive</h3>
            </a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Tarrifs</a>
          </li>
          <li>
            <a href="#">Stats</a>
          </li>
          <li>
            <a href="#">App download</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default navbar;
