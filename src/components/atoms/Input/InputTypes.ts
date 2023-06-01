import { CSSObject } from "styled-components";

export type IInputType = "text" | "password" | "email";

export type ErrorsInput =
  | "min"
  | "max"
  | "minLength"
  | "maxLength"
  | "regExp"
  | "required"
  | null;

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  type?: IInputType;
  className?: string;
  /** Css proprieties */
  styles?: CSSObject;
  /** Must be true when a custom validation fails   */
  error?: boolean;
}
