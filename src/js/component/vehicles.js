import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Vehicles = () => {
  const { actions, store } = useContext(Context);
  return (
    <div className="d-flex flex-nowrap overflow-auto">
      {store.vehicles.map((value) => {
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
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        );
      })}
    </div>
  );
};