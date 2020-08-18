import React from "react";
import PlayFromButton from "./transcript/playFromButton";
import LikeButton from "./likeButton";

function TranscriptPart({ part }) {
  const renderClasses = (part) => {
    let classes = part.kind;
    if (part.kind === "spoken") {
      classes += " speaker-" + part.speaker_num;
    }
    return classes;
  };

  return (
    <div className="transcriptPart">
      {part.kind === "spoken" && <PlayFromButton part={part} />}
      <div className={renderClasses(part)}>{part.text}</div>
      <LikeButton part={part} />
    </div>
  );
}

export default TranscriptPart;
