import React from "react";
import Agents from './Agents';

function Stats() {
  return (
    <div className="container">
      <div className="stats--container">
        <div className="stats">
          <i class="fa fa-users" aria-hidden="true"></i>
          <h2 className="white">10,000+</h2>
          <p className="white">Passengers</p>
        </div>
        <div className="stats">
          <i class="fa fa-car" aria-hidden="true"></i>
          <h2 className="white">1200</h2>
          <p className="white">Cab Drivers</p>
        </div>
        <div className="stats">
          <i class="fa fa-map" aria-hidden="true"></i>
          <h2 className="white">500</h2>
          <p className="white">Cab Routes</p>
        </div>
      </div>
      <Agents />
    </div>
  );
}

export default Stats;
