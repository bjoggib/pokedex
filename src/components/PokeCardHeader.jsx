import React from "react";
import { stringCapitalized } from "../helpers/utils";

const PokeCardHeader = ({ id, name, button }) => (
  <div className="card-header">
    <div className="row">
      <div className="col col-md-6">
        <h2>
          <u>#{id}</u>
          <span className="mx-3">
            <u>{stringCapitalized(name)}</u>
          </span>
        </h2>
      </div>
      <div className="col">
        <div className="text-center float-right">{button}</div>
      </div>
    </div>
  </div>
);

export default PokeCardHeader;
