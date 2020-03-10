import React from "react";
import backhouse from "../images/backhouse.jpg";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <h1 className="about-header">About Us</h1>
      <p className="description">
        When it comes to home construction and home remodeling services in Clark
        County Washington, local homeowners trust us! Silverstar Construction is
        a well established and reputable construction company dedicated to
        catering to the needs of the local community with pride and attention to
        detail.
      </p>
      <img src={backhouse} alt="Back of house" className="back-house" />
      <p className="description">
        With a great deal of hands-on experience and a crew compromised of
        skilled, reliable, and well-equipped professionals, we are ready to take
        on any challenge you may have for us. We take great pride in our
        reputation and standing in the local community and always go the
        distance to keep it spotless. Being the home builder of choice in town
        is a great responsibility we never take lightly.
      </p>
      <p className="description">
        So if you are looking for a home builder you can count on, you should
        give us a call right away. We are based in Ridgefield Washington and
        look forward to catering to your needs.
      </p>
      <p className="signature">Sincerely,</p>
      <p className="signature">James Barton</p>
    </div>
  );
}

export default About;
