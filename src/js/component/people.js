import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const People = () => {
  const { actions, store } = useContext(Context);
  return (
    <div className=" card-group  "style={{ overflowX:"scroll"}} >
      {store.people.map((value) => {
        return (

          <div className="card m-5 "style={{ width: "20rem" }} >
            <img src="https://starwars-visualguide.com/assets/img/films/1.jpg"/>
            <div className="card-body">

              <h5 className="card-title">{value.name}</h5>
              
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

