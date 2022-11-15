import React from "react";
import Input from "../../shared/components/FormElements/Input";
import "./newplace.css";

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input type="text" label="Title" element="input" validators={[]} />
    </form>
  );
};

export default NewPlace;
