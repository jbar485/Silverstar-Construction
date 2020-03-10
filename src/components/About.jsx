import React from "react";
import backhouse from "../images/backhouse.jpg";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Us</h1>
      </div>
      <div className="description">
        <p>
          When it comes to home construction and home remodeling services in
          Clark County Washington, local homeowners trust us! Silverstar
          Construction is a well established and reputable construction company
          dedicated to catering to the needs of the local community with pride
          and attention to detail.
        </p>
      </div>
      <div className="about-image">
      <img src={backhouse} alt="Back of house" className="back-house" />  
      </div>
      <div className="description">
        <p>
          With a great deal of hands-on experience and a crew compromised of
          skilled, reliable, and well-equipped professionals, we are ready to
          take on any challenge you may have for us. We take great pride in our
          reputation and standing in the local community and always go the
          distance to keep it spotless. Being the home builder of choice in town
          is a great responsibility we never take lightly.
        </p>
      </div>
      <div className="description">
        <p>
          So if you are looking for a home builder you can count on, you should
          give us a call right away. We are based in Ridgefield Washington and
          look forward to catering to your needs.
        </p>
      </div>
    </div>
  );
}

export default About;
