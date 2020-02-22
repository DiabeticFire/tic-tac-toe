import React from "react";

import "./Cell.css";

const Cell = (props) => {
  return (
    <button className="Cell" onClick={props.onPress}>
      {props.children}
    </button>
  );
};

export default Cell;
