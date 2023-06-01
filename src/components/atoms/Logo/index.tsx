import React, { FunctionComponent } from "react";
import { ILogoSize, ILogoText } from "./types";
import { CSSObject } from "styled-components";
import { AtomImage } from "../Image";
import ImageLogo from "../../../assets/images/logo.svg";
import ImageLogoText from "../../../assets/images/logoText.svg";
import { ContainerLogo } from "./styles";

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

export const AtomLogo: FunctionComponent<ILogoProps> = ({
  size,
  text = "none",
  className = "atom__logo",
  style = {},
}: ILogoProps) => {
  return (
    <ContainerLogo size={size === "large" ? "90px": size === "medium" ? "50px" : "30px"}>
      <AtomImage
        src={text === 'none'? ImageLogo : ImageLogoText}
        alt="logo"
        imgWidth={size === "large" ? "90px": size === "medium" ? "50px" : "30px"}
        styles={style}
        className={className}
      />
    </ContainerLogo>
  );
};
