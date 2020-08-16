import React, { Fragment } from "react";
import { toast } from "react-toastify";
// import NavBar from "./navBar";

const NotFound = () => {
  toast.error("Please check the URL!");
  return (
    <Fragment>
      <h1>Ooops! Page Not Found</h1>
    </Fragment>
  );
};

export default NotFound;
