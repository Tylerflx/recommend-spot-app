import React from "react";
import Input from "../../shared/components/FormElements/Input";
import "./newplace.css";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        type="text"
        label="Title"
        element="input"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter valid title."
      />
    </form>
  );
};

export default NewPlace;
