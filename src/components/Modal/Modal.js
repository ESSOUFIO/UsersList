import "./Modal.css";
import ReactDOM from "react-dom";
import React, { Fragment } from "react";
import { UI_db } from "../../Context/UIContext";

const Back = () => {
  const { showModal, CloseModal } = UI_db();
  return (
    <div
      className={`Back ${showModal ? "showBack" : null}`}
      onClick={CloseModal}
    ></div>
  );
};

const Overlay = ({ children }) => {
  const { showModal } = UI_db();
  return (
    <div className={`Overlay ${showModal ? "showOverlay" : null}`}>
      {children}
    </div>
  );
};

const Modal = ({ children }) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <Fragment>
          <Back />
          <Overlay>{children}</Overlay>
        </Fragment>,
        document.getElementById("modal")
      )}
    </div>
  );
};

export default Modal;
