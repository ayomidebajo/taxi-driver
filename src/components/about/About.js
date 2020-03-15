import React from "react";
import AboutText from "./AboutText";
import AboutForm from "./AboutForm";
import Man from "./Man";

function About() {
  return (
      <div className="container">
    <div className="about--container">
      
      <div>
        <AboutText />
      </div>
      <div>
        <AboutForm />
      </div>
      <div>
        <Man />
      </div>
      </div>
    </div>
  );
}

export default About;
