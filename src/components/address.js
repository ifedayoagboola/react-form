import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Address = () => {
  return (
    <div>
      <p className="pb-5 mt-100">
        <FontAwesomeIcon className="" icon={faMapMarkerAlt} /> {"\u00A0"}
        {"\u00A0"}151, New Park Ave, Hartford, CT 06106, United States
      </p>
      <p>
        <FontAwesomeIcon className="" icon={faPhone} /> {"\u00A0"}
        {"\u00A0"}+1 (203) 302-9545
      </p>
      <p>
        {" "}
        <FontAwesomeIcon className="" icon={faEnvelope} /> {"\u00A0"}
        {"\u00A0"}Contactus@inveritasoft.com
      </p>
    </div>
  );
};

export default Address;
