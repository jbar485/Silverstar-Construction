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
      <div className="contact-page">
        <h1 className="contact-header">Contact</h1>
        <p className="description">
          If you want to build the house of your dreams or have your current one
          remodeled Silverstar Construction is the company to call! We look
          forward to the opportunity to cater to your needs and exceed your
          expectations. Trust our experienced home builders to help you achieve
          the results you want.
        </p>
        <div className="information">
          <p className="info">Phone: +1 (360)921-0007</p>
          <p className="info">Email: silverstarhomes20@gmail.com</p>
          <p className="info">Address: 4117 NE 232 ST Ridgefield Wa. 98642</p>
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
