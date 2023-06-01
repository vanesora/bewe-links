import React from "react";
import {
  Body
} from "./styles";
import { ISize, ITypographyProps } from "../TypographyProps";
import { useSelector } from "react-redux";
import { AppState } from "../../../../store/rootReducer";

export const AtomBody = ({
  size,
  text,
  color,
  weight = '500',
  align = "center",
  styles = {},
  onClick,
}: ITypographyProps) => {
  const { theme } = useSelector((state: AppState) => state.setup);

  const fontSize = (size:ISize) =>{
    switch (size) {
      case "xlarge":
        return '18px'
      case "large":
        return '16px';
      case "medium":
        return '14px';
      case "small":
        return '12px'
      case "xsmall":
        return '11px';
    }
  }

  return (
    <Body
      color={color ? theme[color] : theme.neutral700}
      align={align}
      styles={styles}
      weight={weight}
      size={fontSize(size)}
    >
      {text}
    </Body>
  );
};
