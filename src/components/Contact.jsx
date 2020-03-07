import React from "react";
import plane from "../images/plane.png";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  render() {
    return (
      <div className='contact-page'>
        <div className="contact-header">
          <h1>Contact</h1>
        </div>
        <div className="description">
          <p>
            Whether you’re ready to break ground on a lifelong vision or are
            still gazing at the horizon wondering what’s possible, we want to
            come alongside you as creative partners and help push the boundaries
            of what you thought a home could be. We know you’re excited about
            what comes next. We are too.
          </p>
        </div>
        <div className="information">
          <div className="info">
            <p>Phone: +1 (360)921-0007</p>
          </div>
          <div className="info">
            <p>Email: silverstarhomes20@gmail.com</p>
          </div>
          <div className="info">
            <p>Address: 4117 NE 232 ST Ridgefield Wa. 98642</p>
          </div>
        </div>
        <div className="formStyles">
          <form>
            <input
              className="inputStylesTop"
              id="name"
              type="text"
              placeholder="Name"
            />
            <br />
            <input
              className="inputStyles"
              id="email"
              type="email"
              placeholder="Email"
            />
            <br />
            <input
              className="inputStyles"
              id="subject"
              type="subject"
              placeholder="Subject"
            />
            <br />
            <textarea
              className="inputStylesArea"
              id="message"
              type=""
              placeholder="Message"
            />
            <br />
            <button type="submit" className="btn">
              <img src={plane} alt="Send Mail" className="plane" />
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
