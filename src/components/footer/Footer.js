import React from "react";

function Footer() {
  return (
    <div className="container">
      <div className="footer--background">
        <div className="footer-container">
        <div className="about">
          <h3>About Our Taxi Company</h3>
          <p>
            Nulla felis tortor, rutrum eget feugiat enon, blandit tellus. Nam
            pharetra ipsum ligula volutpat, a finibus. Fuscet sed malesuada
            sollicitudin venenatis. Aenean aculis faucibus iaculis. Donec
            finibus est sit amet mi ultrices, id fringilla mauris efficitur. In
            eu enim quis nulla iaculis tempus.
          </p>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <p> No.27 - 5549436 Street Floor, Newyork City, USA </p>
          <p>info@example.com</p>
          <p>+01(234) 567 8900 </p>
        </div>
        <div className="download">
          <h3>Download Apps</h3>
          <p>
            Nulla felis tortor, rutrum eget feugiat enon, blandit tellus. Nam
            pharetra ipsum ligula volutpat, a finibus sit amet mi ultrices.
          </p>
          <div className="mobile-btns">
            <div className="android-logo"><i class="fab fa-android"></i>Android Users</div> 
            <div className="ios-logo"><i class="fab fa-apple"></i>IOS Users</div>
          </div>
        </div>
        
      </div>
      <div className="copyright--text">
          <p>
            2019 Taxi Drive. All Rights Reserved | Design by W3layouts | Cloned
            by Ayomide Bajo
          </p>
        </div>
        </div>
    </div>
  );
}

export default Footer;
