import React from "react";
import LeftContent from "./leftContent";
import RightContent from "./rightContent";

const Content = () => {
  return (
    <div className="m-30 grid">
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default Content;
