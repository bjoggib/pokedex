import React from "react";

const ProgressBar = ({ stat, baseStat }) => (
  <div className="row">
    <div className="col-12 col-md-3">{stat.name}</div>
    <div className="col-12 col-md-9">
      <div className="progress">
        <div
          className="progress-bar"
          style={{ width: `${baseStat}%` }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <small>{baseStat}%</small>
        </div>
      </div>
    </div>
  </div>
);

export default ProgressBar;
