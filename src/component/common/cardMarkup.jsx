import React from "react";

const CardMarkup = (props) => {
  return (
    <div className="card card-style">
      <div className="card-body">
        <div
          style={{ float: "right", cursor: "pointer" }}
          onClick={props.onClick}
        >
          x
        </div>
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.location}</h6>
        <p className="card-text">{props.intro}</p>
      </div>
    </div>
  );
};

export default CardMarkup;
