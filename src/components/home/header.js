import React from "react";
import Navbar from "./navbar";
import  img  from "../../img/cab.png";

function header() {
  return (
    <div className="header">
      <div className="container">
        <div className="navbar--container">
          <Navbar />
        </div>

        <div className="text--container">
          <h1>Book Your Cab Now</h1>
          <h2>+1(12) 366 411 4999</h2>
          <p>Always Available, Best Cabs, Safe Journey.</p>
          {/* <img src={img} alt="cab" width="100%" height="100%"/> */}
        </div>
      </div>
    </div>
  );
}

export default header;
