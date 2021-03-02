import React from "react";
import { Field } from "redux-form";

import TextInput from "./TextInput";
import {
  required as requiredFunc
  // testRegex
} from "../validators";
// import SelectInput, { OptionListElement } from "./SelectInput";

import { TUserInput, InputType } from "../types";

interface IProps {
  userInputs: TUserInput[];
}

const testRegex = (value: string, allValues: any, props: any, name: string) => {
  // console.log("allValues", allValues);
  // console.log("props", props);
  // console.log("name", name);
  const { userInputs } = props;

  let errorString;

  userInputs.forEach((userInput: TUserInput) => {
    const { name: userInputName, regex, is_regex_enforced } = userInput;

    if (userInputName === name) {
      const isValid = regex.test(value);
      console.log("isValid", isValid);

      if (!isValid) {
        errorString = "Must be alphebetical";
      }
    }
  });

  return errorString;
};

export const RenderUserInputField: React.FC<IProps> = ({ userInputs }) => {
  return (
    <>
      {userInputs.map((userInput) => {
        const {
          input_type,
          name,
          optional,
          regex,
          is_regex_enforced
        } = userInput;

        let validateFuncs = [];
        let warnFuncs = [];

        if (!optional) {
          validateFuncs.push(requiredFunc);
        }

        if (regex) {
          if (is_regex_enforced) {
            validateFuncs.push(null);
          } else {
            warnFuncs.push(null);
          }
        }

        if (input_type === InputType.TEXT) {
          // Text input type.
          return (
            <Field
              component={TextInput}
              name={name}
              key={name}
              label={name}
              required={!optional}
              warn={warnFuncs}
              // validate={validateFuncs}
              validate={[testRegex]}
              regex={regex}
            />
          );
        } else {
          return null;
        }
      })}
    </>
  );
};
