import React, {} from "react";
import "./input.css";

const Input = (props) => {
  const changeHandler = (event) => {

  };

  //depends on which element we will render input or textarea
  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
      />
    ) : (
      <textarea id={props.id} rows={props.rows || 3} /> //defaut is 3 if not set
    );

  return (
    <div className={`form-control`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  );
};

export default Input;
