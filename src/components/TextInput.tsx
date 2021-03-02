import React from "react";
import { WrappedFieldProps } from "redux-form";

interface TextInputProps extends WrappedFieldProps {
  label: string;
  validate?: Validator;
  name: string;
  required: boolean;
}

// this is part of Field.d.ts. How do I get it in here?
type Validator = (value: any, allValues?: any, props?: any, name?: any) => any;

export default function TextInput({
  meta,
  input,
  label,
  required,
  name
}: TextInputProps): JSX.Element {
  // const { name: inputName, ...inputProps } = input;
  const { touched, error, warning } = meta;

  console.log("meta", meta);
  console.log("error", error);

  return (
    <div>
      <label>{label || "A Label"}</label>
      <input type="text" {...input} name={name} />
      {touched && error && <span>{error}</span>}
      {touched && warning && <span>Warning: {warning}</span>}
    </div>
  );
}
