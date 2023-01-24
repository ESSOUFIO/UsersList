import "./Button.css";
import React from "react";

const CancelBtn = ({ children, onClick, style }) => {
  return (
    <button type="button" className="CancelBtn" onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default CancelBtn;
