import React from "react";
import "./btn.css";
import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="modal">
      <p className="modal__text">Are you sure?</p>
      <div className="modal__btns">
        <button onClick={props.onCancel} className="btn btn--alt modal__btn">
          Cancel
        </button>
        <button onClick={props.onConfirm} className="btn btn--main modal__btn">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Modal;
