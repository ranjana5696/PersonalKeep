import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

function GoogleKeep() {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {

    setAddItem((prevData) => {
      return [...prevData, note];
    });
    console.log(note);
  };
  
  return (
    <div>
      <Header />
      <CreateNote passNote={addNote} />
      <Note />
      <Footer />
    </div>
  );
}

export default GoogleKeep;
