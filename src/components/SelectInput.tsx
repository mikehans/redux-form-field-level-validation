/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { WrappedFieldProps } from "redux-form";

export interface SelectInputProps extends WrappedFieldProps {
  label: string;
  name: string;
  optionList: OptionListElement[];
}

export interface OptionListElement {
  value: string;
  label: string;
}

export default function SelectInput({
  meta,
  input,
  label,
  name,
  optionList
}: SelectInputProps): JSX.Element {
  const { touched, error, warning } = meta;

  return (
    <div>
      <label>{label || "A Label"}</label>
      <select {...input} name={name} id={name}>
        <option value="">- Select -</option>
        {optionList.map((option: OptionListElement) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
        <option value="other">Other</option>
      </select>
    </div>
  );
}
