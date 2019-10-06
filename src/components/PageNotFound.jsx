import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ErrorImageMessage from "./ErrorImageMessage";

const PageNotFound = () => (
  <Fragment>
    <ErrorImageMessage classes="page-not-found" />;
    <div className="row justify-content-center">
      <Link className="btn btn-lg" to="/">
        Back To Home
      </Link>
    </div>
  </Fragment>
);

export default PageNotFound;
