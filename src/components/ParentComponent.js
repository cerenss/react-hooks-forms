import React, { useState } from "react";
import DisplayData from "./DisplayData";
import Form from "./Form";

function ParentComponent() {
  const [newsletter, setNewsletter] = useState(false);
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleNewsletterChange(event) {
    setNewsletter(event.target.checked);
  }

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  return (
    <>
      <DisplayData firstName={firstName} lastName={lastName} />
      <Form
        newsletter={newsletter}
        firstName={firstName}
        lastName={lastName}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
        handleNewsletterChange={handleNewsletterChange}
      />
      ;
    </>
  );
}

export default ParentComponent;
