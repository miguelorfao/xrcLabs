import React from "react";

function Buttons({
  type,
  btnClass,
  onClick,
  label,
  modal,
  modalTarget,
  onSubmit,
}) {
  return (
    <div className="w-100">
      <button
        type={type}
        className={btnClass}
        onClick={onClick}
        onSubmit={onSubmit}
        data-bs-toggle={modal}
        data-bs-target={modalTarget}
      >
        {label}
      </button>
    </div>
  );
}

export default Buttons;
