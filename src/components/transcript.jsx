import React from "react";
import TranscriptPart from "./transcriptPart";

function Transcript(props) {
  const { parts } = props.transcript;
  return (
    <div>
      We'll put all the words here!
      {parts.map((part) => (
        <TranscriptPart key={part.start_secs} part={part} />
      ))}
    </div>
  );
}

export default Transcript;
