import { CSSObject } from "styled-components";
import { keysTheme } from "../../../data/dataEn";

export type IAlign = "left" | "center" | "right";
export type ISize = "xlarge" | "large" | "medium" | "small" | "xsmall";


export interface ITypographyProps {
  /** Align text horizontally */
  align?: IAlign;
  /** Color of text */
  color?: keysTheme;
  /** Text font size */
  size: ISize;
  /** CSS properties for HTML, these styles cannot change the styles of the already defined component */
  styles?: CSSObject;
  /** Text to display in the component, you can insert line breaks using string with backquote by entering enter key */
  text: string;
  /** Text weight */
  weight?: string;
  /** Click action */
  onClick?: (e?: any) => void;
}
