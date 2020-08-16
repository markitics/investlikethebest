import React, { useState, useEffect, Fragment } from "react";
// import NavBar from "./navBar";
import { toast } from "react-toastify";
import QueryString from "query-string";

const START_CLAPS = 14;

function Episode({ match, location }) {
  const [claps, setClaps] = useState(START_CLAPS);

  useEffect(() => {
    document.title = `${claps} 👏 Charlie Songhurst `;
  });

  const incrementClaps = () => {
    if (claps === 14)
      toast("This is a quick demo; number of claps is not saved.");
    setClaps(claps + 1);
  };

  const { redirect } = QueryString.parse(location.search);
  if (redirect) toast.warning("We just have ep 181 as an example");
  //   else toast("This transcript was time-stamped by Descript");

  return (
    <Fragment>
      <h1>Charlie Songhurst</h1>
      <div className="">Here we have details about one episode</div>
      <p>{claps} claps</p>
      <button className="btn btn-sm btn-light" onClick={() => incrementClaps()}>
        Clap
      </button>
    </Fragment>
  );
}

export default Episode;
