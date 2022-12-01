import React, { useState } from "react";

const UsingHooks = () => {
  
  let newTime = new Date().toLocaleTimeString();

  let [count, setCount] = useState(0);
  let [currtime, setCurrtime] = useState(newTime);

  const ClickMe = () => {
    setCount(count + 1);
    console.log("clicked");
  };

  const GetTime = () => {
    newTime = new Date().toLocaleTimeString();
    setCurrtime(newTime);
    console.log("clicked");
  };

  return (
    <>
      <div className="mainDiv">
        <div className="wrapper">
          <h1 className="numberHeading"> {count} </h1>
          <button className="clickMeBtn" onClick={ClickMe}>
            {" "}
            Click Me{" "}
          </button>
        </div>

        <div className="wrapper">
          <h1 className="numberHeading"> {currtime} </h1>
          <button className="clickMeBtn" onClick={GetTime}>
            {" "}
            Get Time{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default UsingHooks;
