import React from "react";
import front from "../images/front.jpg";
import basketabll from "../images/basketball.jpeg"
import smallLogo from "../images/small-logo.png";
import "./Landing.css";

function Landing() {
  return (
    <div>
      <div className="intro-div">
        <div className="intro-inner">
          <h3>Make your dream a Reality</h3>
          <p>
            For three decades, Silverstar Construction has been building custom
            homes in Clark County. Let us make your dream in to a reality.
          </p>
          <img src={smallLogo} alt="Front of House" className="small-logo" />
        </div>
        <img src={front} alt="Front of House" className="home-image" />
      </div>
      <div>
        <div className="employee">
          <h3 className="landing-header">Customer Satisfaction First</h3>
          <div className="description">
            <p>
              Established in 1990 we serve our clients with great respect and
              professionalism. We always put customer satisfaction first and go
              the distance to meet the needs and exceed the expectations of our
              clients. Silverstar Construction is fully licensed and we offer
              free estimates. With us, you will get quality yet affordable
              construction or home remodeling services.
            </p>
          </div>
        </div>
      </div>
      <div className="quote">
        <div>
          <div class="box box1">
            <p>
              We are finally all settled in. A big thanks to you, your boys and
              Donny. The craftsmanship and care you put into our home really
              shows. Without the "Barton-boys" this build would have become a
              disaster. We both are so grateful and humbled by the way you
              conduct business, how you guided us through every step and really
              supported us in the last final push. You were the key component in
              making our build turn out well. Thank you. Thank you. Thank you...
            </p>
            <h4>Eric + Monique Anton</h4>
          </div>
        </div>

        <div>
          <div class="box box2">
            <p>
              To sum up our experience, this was our first time building a home
              and our expectations were greatly exceeded. This custom home
              builder met all of our needs on time and managed to complete the
              project within our budget and the timeframe we have set. If you
              are looking to build a home in the area, check out the services of
              these guys. You won’t regret it!
            </p>
            <h4>Opal Gallegos</h4>
          </div>
        </div>

        <div>
          <div class="box box3">
            <p>
              This specialist changed the game! He recently did some work for
              me. The new construction project was completed on time and in a
              professional manner. Most importantly, he is honest, reliable, and
              open-minded. He cares about the job and wants you to be happy.
              That is invaluable!
            </p>
            <h4>Marty Basher</h4>
          </div>
        </div>

        <div>
          <div class="box box4">
            <p>
              These home builders did an amazing job on my kitchen remodel. they
              worked very quickly. We went from demolition to completion in less
              than 4 weeks. The room looks gorgeous and I could not be happier
              with the outcome. I would not think twice before hiring them
              again!
            </p>
            <h4>Josh Leicester</h4>
          </div>
        </div>
        <div className="quality">
          
          <div className="quality-description">
            <h3 className="quality-header">Quality is our Motto</h3>
            <p>
            With a great deal of hands-on experience and a crew compromised of
          skilled, reliable, and well-equipped professionals, we are ready to
          take on any challenge you may have for us. We take great pride in our
          reputation and standing in the local community and always go the
          distance to keep it spotless. Being the home builder of choice in town
          is a great responsibility we never take lightly.
            </p>
          </div>
          <img src={basketabll} alt="basketball court" className="quality-image" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
