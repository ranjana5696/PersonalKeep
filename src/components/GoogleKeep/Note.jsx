import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';


function Note(props) {

  return (
    <>
      <div className='note'>
            <h3> {props.title} </h3>
            <p> {props.content} </p>
            <button className='dlt btn2-position' >
                  < DeleteIcon className='dlt' />
            </button>
      </div>
    </>
  )
}

export default Note;
