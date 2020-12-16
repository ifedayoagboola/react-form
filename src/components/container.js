import React from "react";
import buffer from "../img/buffer.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faInstagramSquare,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Container = () => {
  return (
    <div className="mother-container">
      <div className="child-container">
        <div className="m-30 grid">
          <div className="left-side p-50">
            <h1>Let's talk</h1>
            <p>
              To request a quote or want to meet up for coffee, contact us
              directly or fill out the for and we will get bact to you promptly
            </p>
            <form action="" className="showcase-form flex">
              <label htmlFor="" className="">
                Your Name
              </label>
              <input type="text" />
              <label htmlFor="">Your Email</label>
              <input type="text" />
              <label htmlFor="">Your Message</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="7"
                placeholder="Type something you want..."
              ></textarea>
              <button className="btn">Send Message</button>
            </form>
          </div>
          <div className="right-side">
            <img src={buffer} alt="not working" />
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
            <FontAwesomeIcon className="icon" icon={faFacebook} size="2x" />
            <FontAwesomeIcon className="icon" icon={faInstagram} size="2x" />
            <FontAwesomeIcon className="icon" icon={faTwitter} size="2x" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
