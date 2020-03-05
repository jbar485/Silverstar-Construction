import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Home.css";

function Home(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.image} alt={props.name}></img>
    </div>
  );
}

Home.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Home;
