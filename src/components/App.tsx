import React from "react";
import { ConnectedUserForm } from "./UserForm";

import { TUserInput, InputType } from "../types";

// const submitFunction = (e: any) => {
//   console.log("FORM SUBMIT!", e);
// };

const userInputsFromBackend: TUserInput[] = [
  {
    name: "Text field with regex enforced",
    optional: false,
    value: "",
    // ^ This is what you will need to pre-populate the field with on the edit form.
    default: null,
    // ^ This is used to pre-fill a form field with a default value (commonly used for user agents)
    input_type: InputType.TEXT,
    // ^ can be: "text", "textarea", "password", "choices", "choices_other"
    choices: null,
    regex: /^[a-z]+$/i,
    is_regex_enforced: true,
    help_text: ""
  },
  {
    name: "Select other with regex not enforced",
    optional: true,
    value: "",
    input_type: InputType.SELECT_OTHER,
    choices: ["Option 1", "Option 2", "Option 3"],
    regex: /^[a-z]+$/i,
    is_regex_enforced: false,
    help_text: ""
  }
];

export const App = () => {
  return (
    <>
      <h2>Hello React Starter Kit</h2>
      <ConnectedUserForm
        //   onSubmit={submitFunction}
        userInputs={userInputsFromBackend}
      />
    </>
  );
};
