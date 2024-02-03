import React from "react";

function Modal({
  modal_className,
  id,
  tabindex,
  role,
  modalTitleID,
  hidden,
  title,
  children,
}) {
  return (
    <div>
      <div
        className={modal_className}
        id={id}
        tabindex={tabindex}
        role={role}
        aria-labelledby={modalTitleID}
        aria-hidden={hidden}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalTitleId">
                {title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
