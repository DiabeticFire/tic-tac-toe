import React from "react";

import "./Cell.css";

const Cell = (props) => {
  return <button className="Cell" onClick={props.onPress} />;
};

export default Cell;
