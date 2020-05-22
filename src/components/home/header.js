import React from "react";
import Navbar from "./navbar";




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
         
        </div>
      </div>
    </div>
  );
}

export default header;
