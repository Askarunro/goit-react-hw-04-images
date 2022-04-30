import React, { Component } from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import m from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

function Modal({ onClose, children }) {
  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };
  window.addEventListener("keydown", handleKeyDown);

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
