import React from "react";
import "./styles/crud.scss";
const Input = ({ title, handleInput, inputName, inputvalue }) => {
  return (
    <div className="input-wraper">
      <input
        type="text"
        name={inputName}
        value={inputvalue.postTitle}
        placeholder={title}
        onChange={handleInput}
      />
    </div>
  );
};

export default Input;
