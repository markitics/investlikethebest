import React from "react";
import TranscriptPart from "./transcriptPart";

function Transcript(props) {
  const { parts } = props.transcript;
  return (
    <div className="transcript">
      <div className="ml-auto">
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      We'll put all the words here!
      {parts.map((part) => (
        <TranscriptPart key={part.start_secs} part={part} />
      ))}
    </div>
  );
}

export default Transcript;
