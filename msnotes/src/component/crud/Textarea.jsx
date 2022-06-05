import React from 'react';
import './styles/crud.scss'; 

const Textarea = ({handleInput,name}) => {
    return (
        <div className="textarea-wraper">

            <textarea name={name}  placeholder="Write description here.." onChange={handleInput} />
          
        </div>
    )
}

export default Textarea
