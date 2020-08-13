import React from "react";
const InputMarkup = (props) => {
  return (
    <div className="col">
      <div className="form-group">
        <label htmlFor={props.name}>{props.name}</label>
        <input
          type="text"
          className="form-control"
          id={props.name}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

export default InputMarkup;
