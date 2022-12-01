import React, { useState } from "react";
import { questions } from "./accordianAPI";
import "./accordian.css";
import MyAccordian from "./MyAccordian";

const Accordian = () => {
  const [data, setData] = useState(questions);

  return (
    <>
      <div className="accordian-div">
        <h1 className="accordian-heading">React Interview Questions</h1>
        {data.map((curr) => {
          const { id } = curr;
          return <MyAccordian key={id} {...curr} />;
        })}
      </div>
    </>
  );
};

export default Accordian;
