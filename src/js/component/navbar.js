import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light mb-3 mx-3 px-5">
      <Link to="/">
        <img src="https://cdn.dribbble.com/users/1071652/screenshots/10008839/media/abb0ce7db87017cff19a8e57189426b9.jpg?compress=1&resize=450x338&vertical=top" className="img-fluid"  style={{ width: "8rem", height: "5rem" }}/>
      </Link>
      <div className="ml-auto">
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favs
          </button>
          <ul class="dropdown-menu">
            {store.favs.map((value) => {
              return (
                <li>
                  {value}
                  <i
                    class="fas fa-trash ms-1"
                    onClick={() => {
                      actions.favorites(value);
                    }}
                    style={{ color: "#ff0000" }}
                  ></i>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
