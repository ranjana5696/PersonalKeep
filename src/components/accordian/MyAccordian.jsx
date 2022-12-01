import React, { useState } from "react";


const MyAccordian = ({question, answer}) => {

  const [show, setShow] = useState(false);

  return (
    <>
      <div className="accordian-mainHeading" >
        <button onClick={ () => setShow(!show) } className="accordian-btn" >{show? '-' : '+'}</button> 
        <h3 className="accordian-question" > {question} </h3>
      </div>
      {
        show && <p className="accordian-answer" > {answer} </p>
      }
    </>
  );
};

export default MyAccordian;
