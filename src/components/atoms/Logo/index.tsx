import React, { useMemo, useContext } from "react";
import { ILogoSize, ILogoText } from "./types";
import { CSSObject } from "styled-components";
import { AtomImage } from "../Image";

export interface ILogoProps {
  /** Logo Size */
  size: ILogoSize;
  /** Add MyCooler text to the logo */
  text?: ILogoText;
  /** Select size of logo */
  className?: string;
  /* CSS object that will be applied to logo atom */
  style?: CSSObject;
}



export const AtomLogo = ({
  size,
  text = "none",
  className = "atom__logo",
  style = {},
}: ILogoProps) => {
  return (
    <>
      <AtomImage
        src="../../../assets/images/logo.png"
        alt="logo"
        imgWidth={size === "large" ? "20px": size === "medium" ? "15px" : "10px"}
        styles={style}
        className={className}
      />
      {text === "centered" && <h1>{'TOWPEAKS'}</h1>}
    </>
  );
};
