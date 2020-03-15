import React from 'react'

function AboutForm() {
    return (
        <div className="about-form--container">
            <h3 className="form-title">Book a Cab</h3>
            <form>
                <input className="form-field" type="text" placeholder="Name"/>
                <input className="form-field" type="text" placeholder="Phonenumber"/>
                <input className="form-field" type="text" placeholder="Your location"/>
                <input className="form-field" type="text" placeholder="Destination"/>
                <input className="form-field" type="text" placeholder="Choose vehicle"/>
                <button className="btn">Book Now</button>
            </form>
        </div>
    )
}

export default AboutForm
