import React from "react";

const SlotM = (props) => {
 
  let {x,y,z} = props;

  if ((x === y) && (y === z)) {
    return (
      <> 
        <div className="slot-inner">
        
          <h1>
            {x} {y} {z}
          </h1>
          <h1> This is Matching </h1>
          <hr />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slot-inner">
        
          <h1>
            {props.x} {props.y} {props.z}
          </h1>
          <h1> This is Not Matching </h1>
          <hr />
        </div>
      </>
    );
  }
};

function SlotMachineGame() {
  return (
    <>
      <h1 className="SlotMachineGame-heading">
        🎰 Welcome to
        <span style={{ fontWeight: "bold" }}> Slot Machine Game </span> 🎰
      </h1>
      <div className="slotmachine">
          <SlotM  x='😄' y='😄' z='😄' />
          <SlotM  x='😄' y='😄' z='🎅' />
      </div>
    </>
  );
}

export default SlotMachineGame;
