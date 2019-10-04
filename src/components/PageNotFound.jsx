import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => (
  <div>
    <div className="row justify-content-center">
      <img src="/assets/pageNotFoundImage.png" alt="not found message" />
    </div>
    <div className="row justify-content-center">
      <Link className="btn" to="/">
        Back To Home
      </Link>
    </div>
  </div>
);

export default PageNotFound;
