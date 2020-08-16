import React, { Fragment } from "react";
// import NavBar from "./navBar";
import { toast } from "react-toastify";
import QueryString from "query-string";

function episode({ match, location }) {
  const { redirect } = QueryString.parse(location.search);
  if (redirect) toast.error("We just have ep 181 as an example");
  else toast("This transcript was time-stamped by Descript");

  return (
    <Fragment>
      <div>Here we have details about one episode</div>
    </Fragment>
  );
}

export default episode;
