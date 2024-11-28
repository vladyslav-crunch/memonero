import React from "react";
import Spinner from "../ui/spinner/spinner.component";

const Preloader = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spinner />
    </div>
  );
};

export default Preloader;
