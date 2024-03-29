import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.getonecharacter(params.theid);
  }, []);

  return (
    <div className="card mb-3" style={{ maxWidth: "1040px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={"https://starwars-visualguide.com/assets/img/characters/"+params.theid+".jpg"} 
            className="card-img-top"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title">{store.onecharacter.name}</h2>
            <h5 className="card-text">Gender: {store.onecharacter.gender}</h5>
            <h5 className="card-text">
              Birth Year: {store.onecharacter.birth_year}
            </h5>
            <h5 className="card-text">Gender: {store.onecharacter.gender}</h5>{" "}
            <h5 className="card-text">
              Eye Color: {store.onecharacter.eye_color}
            </h5>
            <h5 className="card-text">
              Hair Color: {store.onecharacter.hair_color}
            </h5>
            <h5 className="card-text">
              Skin Color: {store.onecharacter.skin_color}
            </h5>
            <h5 className="card-text">Height: {store.onecharacter.height}</h5>
            <h5 className="card-text">Mass: {store.onecharacter.mass}</h5>

          </div>
        </div>
      </div>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
