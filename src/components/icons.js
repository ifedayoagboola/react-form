import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Icons = () => {
  return (
    <div>
      <FontAwesomeIcon className="icon" icon={faFacebook} size="2x" />
      <FontAwesomeIcon className="icon" icon={faInstagram} size="2x" />
      <FontAwesomeIcon className="icon" icon={faTwitter} size="2x" />
    </div>
  );
};

export default Icons;
