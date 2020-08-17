import React, { Fragment } from "react";

function PlayFromButton({ part }) {
  const simplifyTimestamp = (hhmmss) => {
    if (hhmmss.startsWith("00:")) {
      return hhmmss.slice(3);
    }
    return hhmmss;
  };

  return (
    <Fragment>
      <div class="timestampAndPlayButton">
        <span
          className={
            "btn btn-info ml-1 play-button speaker-" + part.speaker_num
          }
          data-from={part.start_secs}
        >
          <i className="fa fa-play"></i>
        </span>
        {simplifyTimestamp(part.start_hhmmss)}
      </div>
    </Fragment>
  );
}

export default PlayFromButton;
