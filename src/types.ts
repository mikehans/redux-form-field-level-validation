export enum InputType {
  TEXT = "text",
  TEXTAREA = "textarea",
  SELECT = "select",
  SELECT_OTHER = "select_other"
}

export type TUserInput = {
  name: string;
  optional: boolean;
  value: string;
  default?: string | null;
  input_type: InputType;
  choices: string[] | null;
  regex: RegExp;
  is_regex_enforced: boolean;
  help_text: string;
};
