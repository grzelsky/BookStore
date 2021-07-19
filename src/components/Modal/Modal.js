import { useContext } from "react";
import { StoreContext } from "../../store/StoreProvider";

import { createPortal } from "react-dom";

import "./modal.scss";
const Modal = ({ children }) => {
  const { modalOn } = useContext(StoreContext);

  return createPortal(
    <div className="modal" onClick={modalOn}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        {children}
        <div className="close" onClick={modalOn}>
          &times;
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
