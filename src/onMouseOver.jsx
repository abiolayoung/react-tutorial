import React from "react";
import { useState } from "react";

function MouseOver() {
  const [mouseOver, setMouseOver] = useState("React Tutorial");
  const [mouseLeave, setMouseLeave] = useState(false);

  function handleMouseOver(event) {
    event.preventDefault();
    setMouseOver("React made easy");
    setMouseLeave(false);
  }

  function handleMouseLeave(event) {
    event.preventDefault();
    setMouseOver("React Tutorial");
    setMouseLeave(true);
  }

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className="mouseOver"
    >
      <h2>{mouseLeave ? mouseOver : mouseOver}</h2>
    </div>
  );
}

export default MouseOver;
