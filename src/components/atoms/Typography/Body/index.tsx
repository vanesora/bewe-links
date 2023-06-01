import React, { useContext } from "react";
import {
  BodyXLarge,
  BodyLarge,
  BodyMedium,
  BodySmall,
  BodyXsmall,
} from "./styles";
import { ITypographyProps } from "../TypographyProps";
import { useSelector } from "react-redux";
import { AppState } from "../../../../store/rootReducer";

export const AtomBody = ({
  size,
  text,
  color,
  weight = "thin",
  align = "center",
  styles = {},
  onClick,
}: ITypographyProps) => {
  const { theme } = useSelector((state: AppState) => state.setup);

  switch (size) {
    case "xlarge":
      return (
        <BodyXLarge
          color={color ? theme[color] : theme.neutral700}
          align={align}
          styles={styles}
        >
          {text}
        </BodyXLarge>
      );
    case "large":
      return (
        <BodyLarge
          color={color ? theme[color] : theme.neutral700}
          align={align}
          styles={styles}
        >
          {text}
        </BodyLarge>
      );
    case "medium":
      return (
        <BodyMedium
          color={color ? theme[color] : theme.neutral700}
          align={align}
          styles={styles}
          onClick={onClick}
        >
          {text}
        </BodyMedium>
      );
    case "small":
      return (
        <BodySmall
          color={color ? theme[color] : theme.neutral700}
          align={align}
          styles={styles}
        >
          {text}
        </BodySmall>
      );
    case "xsmall":
      return (
        <BodyXsmall
          color={color ? theme[color] : theme.neutral700}
          align={align}
          styles={styles}
        >
          {text}
        </BodyXsmall>
      );
  }
};
