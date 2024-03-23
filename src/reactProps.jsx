import React from "react";

function Languages({ general, front, back }) {
  return (
    <div className="lang">
      <h2>{general}</h2>
      <h2>{front}</h2>
      <h2>{back}</h2>
    </div>
  );
}

export default Languages;
