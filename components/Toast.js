import { ShowToastContext } from "@/context/ShowToastContext";
import React, { useContext, useEffect } from "react";

function Toast({ msg }) {
  const { showToastMsg, setShowToastMsg } = useContext(ShowToastContext);
  useEffect(() => {
    setInterval(() => {
      setShowToastMsg(null);
    }, 2500);
  }, [showToastMsg]);

  return (
    <div className="toast toast-top toast-end">
      <div className="alert alert-success bg-green-300">
        <span>{msg}</span>
      </div>
    </div>
  );
}

export default Toast;
