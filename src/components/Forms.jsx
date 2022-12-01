import React from "react";
import { useState } from "react";

function Forms() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    femail: "",
    fnumber: "",
  });

  const inputEvent = (e) => {
    const { value, name } = e.target;

    setFullName((preValue) => {
      console.log(preValue);

      return {
        ...preValue,
        [name]: value,
      };
      // if (name === "fName") {
      //   return {
      //     fname: value,
      //     lname: preValue.lname,
      //   };
      // } else if (name === "lName") {
      //   return {
      //     fname: preValue.fname,
      //     lname: value,
      //   };
      // }
    });
  };

  const onSubmits = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSubmits}>
        <div className="mainDivForm">
          <h1 className="formHeading">
            Hello!! {fullName.fname} {fullName.lname}
          </h1>
          <p>
            {" "}
            {fullName.femail} <br />
            {fullName.fnumber}{" "}
          </p>

          <input
            className="inputfield"
            type="text"
            placeholder="Enter Your First Name"
            name="fname"
            onChange={inputEvent}
            value={fullName.fname}
          />
          <input
            className="inputfield"
            type="text"
            placeholder="Enter Your Last Name"
            name="lname"
            onChange={inputEvent}
            value={fullName.lname}
          />
          <input
            className="inputfield"
            type="email"
            placeholder="Enter Your Email ID"
            name="femail"
            onChange={inputEvent}
            value={fullName.femail}
          />
          <input
            className="inputfield"
            type="number"
            placeholder="Enter Your Number"
            name="fnumber"
            onChange={inputEvent}
            value={fullName.fnumber}
          />

          <button type="submit" className="clickMeBtn">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Forms;
