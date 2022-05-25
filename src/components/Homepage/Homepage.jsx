import React from "react";
import FeaturesStrip from "./Features-strip";
import "./Homepage.css";
import logo from "../../style/assets/logo-ex.jpeg";

function Homepage() {
  return (
    <div className="Homepage">
      <div className="Homepage-header"></div>
      <FeaturesStrip />
      <div className="homepage-shutout">
        <div className="homepage-shutout_text">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, temporibus sapiente quibusdam numquam facere sunt
            laboriosam itaque amet fugit, excepturi sint enim iusto alias id
            quis incidunt vel a repellendus.
          </span>
        </div>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default Homepage;
