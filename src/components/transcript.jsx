import React, { Fragment } from "react";
import TranscriptPart from "./transcriptPart";
import { Link } from "react-router-dom";

function Transcript(props) {
  const { parts } = props.transcript;
  const showOnlyLiked = props.showOnlyLiked; // if true, show only ones we've liked

  const filterParts = (parts) => {
    if (showOnlyLiked) return [...parts].filter((part) => part.liked);
    else return parts;
  };
  const showMessage = () => {
    if (showOnlyLiked)
      return (
        <Fragment>
          <div className="p-3">
            <p>
              This page shows you just the highlights you 'liked' - by pressing{" "}
              <i className="fa fa-heart-o"></i>.
            </p>
            <p>
              (Tap <i className="fa fa-heart" style={{ color: "red" }}></i>{" "}
              again to unlike.)
            </p>
            <p>
              Return to the{" "}
              <Link to="/episode/181/transcript" className="blueLink">
                transcript
              </Link>{" "}
              to 'like' more moments from the conversation.
            </p>
          </div>
        </Fragment>
      );
  };

  const showSearchForm = () => {
    return null;
    if (!showOnlyLiked)
      return (
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
      );
  };

  return (
    <div className="transcript">
      {showSearchForm()}
      {showMessage()}
      {filterParts(parts).map((part) => (
        <TranscriptPart key={part.id} part={part} />
      ))}
    </div>
  );
}

export default Transcript;
