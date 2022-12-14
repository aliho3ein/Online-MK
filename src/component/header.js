/* actions */
import React, { useEffect } from "react";
import { headerOpacity, headerText } from "./../actions.jsx";

export default function Headers(props) {
  useEffect(() => {
    headerText();
    headerOpacity();
  }, []);

  return (
    <header id="header">
      <h1 className="ml5">
        <span className="text-wrapper">
          <span className="line line1"></span>
          <span className="letters letters-left">{props.title[0]}</span>
          <span className="letters ampersand"></span>
          <span className="letters letters-right">{props.title[1]}</span>
          <span className="line line2"></span>
        </span>
      </h1>

      <div className="downBtn">
        <span></span>
      </div>
    </header>
  );
}
