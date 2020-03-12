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
          <form
            id="contact-form"
            onSubmit={this.handleSubmit.bind(this)}
            method="post"
          >
            <input
              className="inputStylesTop"
              id="name"
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.onNameChange.bind(this)}
            />
            />
            <br />
            <input
              className="inputStyles"
              id="email"
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
            />
            <br />
            <textarea
              className="inputStylesArea"
              id="message"
              type=""
              placeholder="Message"
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
            />
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
  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {}
}

export default Contact;
