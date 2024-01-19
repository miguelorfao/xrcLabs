import React from "react";

function Buttons({ btnClass, onClick, label }) {
  return (
    <div className="w-100">
      <button className={btnClass} onClick={onClick}>
        {label}
      </button>
    </div>
  );
}

export default Buttons;
