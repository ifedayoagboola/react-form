import React from "react";
import ChildContainer from "./childContainer";

const MotherContainer = () => {
  return (
    <div className="mother-container">
      <ChildContainer />
    </div>
  );
};

export default MotherContainer;
