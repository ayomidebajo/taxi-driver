import React from "react";
import Select from 'react-select';

function AboutForm() {

  const  options = [
    { value: 'blues', label: 'Blues' },
    { value: 'rock', label: 'Rock' },
    { value: 'jazz', label: 'Jazz' },
    { value: 'orchestra',label: 'Orchestra' } 
  ];
  return (
    <div className="about-form--container">
      <h3 className="form-title">Book a Cab</h3>
      <form>
        <input className="form-field" type="text" placeholder="Name" />
        <input className="form-field" type="text" placeholder="Phonenumber" />
        <input className="form-field" type="text" placeholder="Your location" />
        <input className="form-field" type="text" placeholder="Destination" />
        
        <Select options = {options} className="select--option" placeholder="Vehicle"/>

        <button className="btn">Book Now</button>
      </form>
    </div>
  );
}

export default AboutForm;
