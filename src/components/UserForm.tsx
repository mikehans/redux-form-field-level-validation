import React, { FormEvent } from "react";
import { reduxForm } from "redux-form";
// import { alphaOnly, required } from "../validators";

// import TextInput from "./TextInput";
// import SelectInput, { OptionListElement } from "./SelectInput";
import { RenderUserInputField } from "./RenderUserInputField";

import { TUserInput } from "./UserForm";

interface UserFormProps {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  invalid: boolean;
  userInputs: TUserInput[];
  validationEnforced: [{ fieldName: string; validatorName: string }];
  validationWarning: [{ fieldName: string; validatorName: string }];
}

// // These are a couple of maps defining what validators to apply to what fields.
// const validationEnforced = {
//   firstNameField: ["required"],
//   lastNameField: ["alphaOnly"]
// };
// const validationWarning = { firstNameField: ["alphaOnly"] };

export function UserForm(props: UserFormProps): JSX.Element {
  const { handleSubmit, invalid, userInputs } = props;

  // const optionList: OptionListElement[] = [
  //   { value: "opt1", label: "Option 1" },
  //   { value: "opt2", label: "Option 2" }
  // ];

  // const userInputsFromBackend: TUserInput[] = [
  //   {
  //     name: "Text field with regex enforced",
  //     optional: false,
  //     value: "",
  //     // ^ This is what you will need to pre-populate the field with on the edit form.
  //     default: null,
  //     // ^ This is used to pre-fill a form field with a default value (commonly used for user agents)
  //     input_type: InputType.TEXT,
  //     // ^ can be: "text", "textarea", "password", "choices", "choices_other"
  //     choices: null,
  //     regex: /^[a-z]+$/i,
  //     is_regex_enforced: true,
  //     help_text: ""
  //   },
  //   {
  //     name: "Select other with regex not enforced",
  //     optional: true,
  //     value: "",
  //     input_type: InputType.SELECT_OTHER,
  //     choices: ["Option 1", "Option 2", "Option 3"],
  //     regex: /^[a-z]+$/i,
  //     is_regex_enforced: false,
  //     help_text: ""
  //   }
  // ];

  return (
    <form onSubmit={handleSubmit}>
      {userInputs && userInputs.length > 0 && (
        <RenderUserInputField userInputs={userInputs} />
      )}
      {/* <Field
        name="firstNameField"
        label="Given Name"
        component={TextInput}
        validate={[required]}
        warn={alphaOnly}
      />

      <Field
        name="lastNameField"
        label="Last Name"
        component={TextInput}
        validate={[required, alphaOnly]}
      />

      <Field
        name="selectList"
        label="Select List Test"
        onChange={() => console.log("selectList onChange function")}
        component={SelectInput}
        optionList={optionList}
      /> */}
      <button type="submit" disabled={invalid}>
        Submit
      </button>
    </form>
  );
}

export const ConnectedUserForm = reduxForm({
  form: "userForm"
})(UserForm);
