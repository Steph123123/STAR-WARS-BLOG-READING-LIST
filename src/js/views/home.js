import React from "react";
import "../../styles/home.css";
import { People } from "../component/people";
import { Planets } from "../component/planets";
import { Vehicles } from "../component/vehicles";

export const Home = () => (
  <div className="container-fluid">
    <div className="w-100 h-100">
      <People />
    </div>
    <div className="w-100 h-100">
      <Planets />
    </div>
    <div className="w-100 h-100">
      <Vehicles/>
    </div>
  </div>
);