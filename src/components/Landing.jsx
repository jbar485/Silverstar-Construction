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
            Donny. The craftsmanship and care you put into our home really
            shows. Without the "Barton-boys" this build would have become a
            disaster. We both are so grateful and humbled by the way you conduct
            business, how you guided us through every step and really supported
            us in the last final push. You were the key component in making our
            build turn out well. Thank you. Thank you. Thank you...
          </p>
          <cite>Eric + Monique Anton</cite>
        </blockquote>
      </div>
      <div>
        <blockquote class="quote-card">
          <p>
            To sum up our experience, this was our first time building a home
            and our expectations were greatly exceeded. This custom home builder
            met all of our needs on time and managed to complete the project
            within our budget and the timeframe we have set. If you are looking
            to build a home in the area, check out the services of these guys.
            You won’t regret it!
          </p>
          <cite>Opal Gallegos</cite>
        </blockquote>
      </div>
      <div>
        <blockquote class="quote-card">
          <p>
            These home builders did an amazing job on my kitchen remodel. they
            worked very quickly. We went from demolition to completion in less
            than 4 weeks. The room looks gorgeous and I could not be happier
            with the outcome. I would not think twice before hiring them again!
          </p>
          <cite>Josh Leicester</cite>
        </blockquote>
      </div>
      <div>
        <blockquote class="quote-card">
          <p>
            This specialist changed the game! He recently did some work for me.
            The new construction project was completed on time and in a
            professional manner. Most importantly, he is honest, reliable, and
            open-minded. He cares about the job and wants you to be happy. That
            is invaluable!
          </p>
          <cite>Marty Basher</cite>
        </blockquote>
      </div>
    </div>
  );
}

export default Landing;
