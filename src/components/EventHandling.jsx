import React, { useState } from "react";

export default function EventHandling() {
  const purple = "#8e44ad";
  const [bg, setBg] = useState(purple);
  const [name, setName] = useState("Click Me");

  const BGchange = () => {
    let newBg = "#34495e";
    setBg(newBg);
    setName("Ouchh!!");
  };

  const bgBack = () => {
      setBg(purple);
      setName("Click Me");
  }

  return (
    <>
      <div style={{ backgroundColor: bg }} className="mainDiv ">
        <button className="clickMeBtn someMoreStyles" onClick={BGchange} onDoubleClick={bgBack} >
          {" "}
          {name}{" "}
        </button>
      </div>
    </>
  );
}
