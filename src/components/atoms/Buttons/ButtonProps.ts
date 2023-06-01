import { CSSObject } from "styled-components";

export type ButtonColor = "primary" | "secondary" | "custom";
export type ButtonType = "button" | "submit" | "reset";
export type ButtonTypeDesign = "default" | "icon" | "outline";
export type CustomColor =
  | "dark"
  | "light"
  | "neutral";
export type ButtonSize = "small" | "medium" | "large";

export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Enable or disable the button */
  disabled: boolean;
  /** Click action */
  onClick?: (e?: any) => void;
  /** Type of color */
  color: ButtonColor;
  /** Text of button */
  text: string;
  /** This property specifies the button type HTML */
  type: ButtonType;
  /** Size of component + measurement unit */
  width?: string;
  /** Css proprieties */
  styles?: CSSObject;
  /** Css proprieties */
  customColor?: CustomColor;
  /** Size Button */
  size?: ButtonSize;
}

export const ButtonHeight = {
  small: "32px",
  medium: "48px",
  large: "64px",
};
