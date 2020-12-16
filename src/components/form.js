import React from "react";

const Form = () => {
  return (
    <div>
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
  );
};

export default Form;
