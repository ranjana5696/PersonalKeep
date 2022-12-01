import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

function CreateNote(props) {

  const [notee, setNotee] = useState({

      title: '',
      content: ''
  });
  
  const inputEvent = (e) => {

    const { name, value } = e.target;

    setNotee((prevData) => {
      return {
        ...prevData,
        [name] : value,
      }
    })

  }

  const addEvent = () => {
    props.passNote(notee);
  }

  return (
    <>
      <div className='main_node'>
            <form className='form-class'>
                  <input type="text" 
                         placeholder='Title' 
                         autoComplete='off' 
                         onChange={inputEvent} 
                         value={notee.title}
                         name='title' />

                  <textarea name="content" 
                         placeholder='Write a note here...' 
                         value={notee.content} 
                         onChange={inputEvent} >
                  </textarea>
                  <button onClick={addEvent} className='btn-icon btn-position'>
                        <AddIcon className='btn-icon'/>
                  </button>
            </form>
      </div>
    </>
  )
}

export default CreateNote;
