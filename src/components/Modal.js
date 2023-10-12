import React from "react";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 blur-0">
      <div
        className="absolute inset-0 bg-black opacity-0"
        onClick={onClose}
      ></div>
      <div className="p-6 rounded-lg w-96 z-10">{children}</div>
    </div>
  );
}

export default Modal;
