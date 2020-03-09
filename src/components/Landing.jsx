import React from "react";
import front from "../images/front.jpg";
import "./Landing.css";

function Landing() {
  return (
    <div>
      <div className="intro-div">
        <div className="introWords">
          <h1>hi</h1>
        </div>
        <div className="introImage">
          <img src={front} alt="Front of House" className="imager" />
        </div>
      </div>
      <div>
        <blockquote class="quote-card">
          <p>
            We are finally all settled in. A big thanks to you, your boys and
            Donny. The craftmanship and care you put into our home really shows.
            Without the "Barton-boys" this build would have become a disaster.
            We both are so grateful and humbled by the way you conduct buisness,
            how you guided us through every step and really supported us in the
            last final push. You were the key component in making our build turn
            out well. Thank you. Thank you. Thank you...
          </p>
          <cite>Eric + Monique Anton</cite>
        </blockquote>
      </div>
      <div>
        <blockquote class="quote-card">
          <p>
            We are finally all settled in. A big thanks to you, your boys and
            Donny. The craftmanship and care you put into our home really shows.
            Without the "Barton-boys" this build would have become a disaster.
            We both are so grateful and humbled by the way you conduct buisness,
            how you guided us through every step and really supported us in the
            last final push. You were the key component in making our build turn
            out well. Thank you. Thank you. Thank you...
          </p>
          <cite>Eric + Monique Anton</cite>
        </blockquote>
      </div>
      <div>
        <blockquote class="quote-card">
          <p>
            We are finally all settled in. A big thanks to you, your boys and
            Donny. The craftmanship and care you put into our home really shows.
            Without the "Barton-boys" this build would have become a disaster.
            We both are so grateful and humbled by the way you conduct buisness,
            how you guided us through every step and really supported us in the
            last final push. You were the key component in making our build turn
            out well. Thank you. Thank you. Thank you...
          </p>
          <cite>Eric + Monique Anton</cite>
        </blockquote>
      </div>
    </div>
  );
}

export default Landing;
