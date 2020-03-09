import React from "react";
import Home from "./Home";
import PropTypes from "prop-types";
import "./HomeList.css";
import back from "../images/back.jpg";
import back2 from "../images/back2.jpg";
import backhouse from "../images/backhouse.jpg";
import basketball from "../images/basketball.jpeg";
import bath from "../images/bath.jpg";
import entry from "../images/entry.jpeg";
import front from "../images/front.jpg";
import gym from "../images/gym.jpg";
import housefront from "../images/housefront.jpg";
import housefront2 from "../images/housefront2.jpg";
import infinity from "../images/infinity.jpg";
import kitchen from "../images/kitchen.jpg";
import outdoorkitchen from "../images/outdoorkitchen.jpg";
import pillar from "../images/pillar.jpeg";
import pool from "../images/pool.jpg";
import secret1 from "../images/secret1.jpeg";
import secret2 from "../images/secret2.jpg";
import yard from "../images/yard.jpg";

function HomeList(props) {
  return (
    <div className="homes-page">
      <div className="homes-header">
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
      <div className="gallery-header">
        <h3>Gallery</h3>
      </div>
      {props.homeList.map(home => (
        <Home name={home.name} image={home.image} id={home.id} key={home.id} />
      ))}
      <div className="gallery">
        <img
          src={housefront}
          alt="Picture of front of house"
          className="galleryI"
        />
        <img src={back} alt="Back of house" className="galleryI" />
        <img src={back2} alt="Back of house" className="galleryI" />
        <img src={backhouse} alt="Back of house" className="galleryI" />
        <img src={basketball} alt="Basketball court" className="galleryI" />
        <img src={bath} alt="Master Bath" className="galleryI" />
        <img src={entry} alt="Entryway" className="galleryI" />
        <img src={front} alt="Front of House" className="galleryI" />
        <img src={gym} alt="Home gym" className="galleryI" />
        <img src={housefront2} alt="Front of House" className="galleryI" />
        <img src={infinity} alt="Infinity Pool" className="galleryI" />
        <img src={kitchen} alt="Kitchen" className="galleryI" />
        <img
          src={outdoorkitchen}
          alt="Outdoor Kitchen"
          className="galleryI"
        />
        <img src={pillar} alt="Pillars" className="galleryI" />
        <img src={pool} alt="Pool" className="galleryI" />
        <img src={secret1} alt="Secret Office" className="galleryI" />
        <img src={secret2} alt="secret office" className="galleryI" />
        <img src={yard} alt="Backyard" className="galleryI" />
      </div>
    </div>
  );
}

HomeList.propTypes = {
  homeList: PropTypes.array
};

export default HomeList;
