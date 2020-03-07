import React from "react";
import Home from "./Home";
import PropTypes from "prop-types";

function HomeList(props) {
  return (
    <div>
      <div className="contact-header">
        <h1>Homes</h1>
      </div>
      <div className="description">
        <p>
          Whether you’re ready to break ground on a lifelong vision or are still
          gazing at the horizon wondering what’s possible, we want to come
          alongside you as creative partners and help push the boundaries of
          what you thought a home could be. We know you’re excited about what
          comes next. We are too.
        </p>
      </div>
      {props.homeList.map(home => (
        <Home name={home.name} image={home.image} id={home.id} key={home.id} />
      ))}
    </div>
  );
}

HomeList.propTypes = {
  homeList: PropTypes.array
};

export default HomeList;
