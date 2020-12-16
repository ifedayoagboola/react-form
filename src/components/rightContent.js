import React from "react";
import ImageComponent from "./imageComponent";
import Address from "./address";
import Icons from "./icons";

const RightContent = () => {
  return (
    <div className="right-side">
      <ImageComponent />
      <Address />
      <Icons />
    </div>
  );
};

export default RightContent;
