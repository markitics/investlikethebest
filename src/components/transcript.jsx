import React, { Fragment } from "react";
import TranscriptPart from "./transcriptPart";

function Transcript(props) {
  const { parts } = props.transcript;
  const showOnlyLiked = props.showOnlyLiked; // if true, show only ones we've liked

  const filterParts = (parts) => {
    if (showOnlyLiked) return [...parts].filter((part) => part.iLiked);
    else return parts;
  };
  const showMessage = () => {
    if (showOnlyLiked)
      return (
        <Fragment>
          <p>
            <br />
          </p>
          <p>
            This page would return just the highlights you 'liked' - by
            double-tapping (on mobile) or by pressing ♥️ (on desktop).
          </p>
        </Fragment>
      );
  };
  return (
    <div className="transcript">
      <div className="searchBoxRow ml-auto p-2">
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search (not working)"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            disabled={true}
          >
            Search
          </button>
        </form>
      </div>
      {showMessage()}
      {filterParts(parts).map((part) => (
        <TranscriptPart key={part.start_secs} part={part} />
      ))}
    </div>
  );
}

export default Transcript;
