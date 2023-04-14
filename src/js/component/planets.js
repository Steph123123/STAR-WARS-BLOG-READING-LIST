import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Planets = () => {
  const { actions, store } = useContext(Context);
  return (
    <div className="d-flex flex-nowrap overflow-auto">
      {store.planets.map((value) => {
        return (
          <div className="card mx-2" style={{ minWidth: "18rem" }} key={value.name}>
            <img
              src="https://starwars-visualguide.com/assets/img/films/1.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{value.name}</h5>
            </div>
            <Link to={"/singleplanet/"+ value.uid} className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        );
      })}
    </div>
  );
};