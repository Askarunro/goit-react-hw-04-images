import React, { Component } from "react";
import { useEffect, useState} from "react";
import { createPortal } from "react-dom";
import m from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

function Modal({onClose,children}) {

  const [state, setState]=useState(false)

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
      console.log(e.code)
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", e=>{
      if (e.code === "Escape") {
        onClose();
      }
    });
    setState(true)
  });

  useEffect(() => {
    window.removeEventListener("keydown", e=>{
      if (e.code === "Escape") {
        onClose();
      }
    });
  },[]);

 

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={m.Overlay} onClick={handleBackdropClick}>
      <div className={m.Modal}>{children}</div>
    </div>,
    modalRoot
  );
}

export default Modal;
