import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => (
  <Fragment>
    <div className="row justify-content-center">
      <div className="message-image">
        <div className="col page-not-found background-image" />
      </div>
    </div>
    <div className="row justify-content-center">
      <Link className="btn" to="/">
        Back To Home
      </Link>
    </div>
  </Fragment>
);

export default PageNotFound;
