import React from "react";
import PlayFromButton from "./transcript/playFromButton";

function TranscriptPart({ part }) {
  return (
    <div>
      <p>
        <PlayFromButton part={part} /> {part.text}
      </p>
    </div>
  );
}

export default TranscriptPart;
