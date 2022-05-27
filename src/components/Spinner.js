import React from "react";

const Spinner = () => {
  return (
    <div className="d-flex my-4 py-4 align-items-center container">
      <strong>Loading...</strong>
      <div
        className="spinner-border ms-auto"
        role="status"
        aria-hidden="true"
      ></div>
    </div>
  )
}

export default Spinner;
