import React from "react";

function PlayFromButton({ part }) {
  return (
    <span className="btn btn-info {part.start_secs}">{part.start_hhmmss}</span>
  );
}

export default PlayFromButton;
