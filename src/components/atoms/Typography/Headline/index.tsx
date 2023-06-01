import React from "react";
import {
  HeadlineXLarge,
  HeadlineLarge,
  HeadlineMedium,
  HeadlineSmall,
  HeadlineXSmall,
} from "./styles";
import { ITypographyProps } from "../TypographyProps";
import { useSelector } from "react-redux";
import { AppState } from "../../../../store/rootReducer";

export const AtomHeadline = ({
  align = "center",
  size,
  text,
  color,
  weight = "500",
  styles = {},
}: ITypographyProps): JSX.Element => {
  const { theme } = useSelector((state: AppState) => state.setup);

  switch (size) {
    case "xlarge":
      return (
        <HeadlineXLarge
          color={color ? theme[color] : theme.neutral700}
          align={align}
          styles={styles}
        >
          {(text)}
        </HeadlineXLarge>
      );
    case "large":
      return (
        <HeadlineLarge
          color={color ? theme[color] : theme.neutral700}
          align={align}
          styles={styles}
        >
          {(text)}
        </HeadlineLarge>
      );
    case "medium":
      return (
        <HeadlineMedium
          color={color ? theme[color] : theme.neutral700}
          
          align={align}
          styles={styles}
        >
          {(text)}
        </HeadlineMedium>
      );
    case "small":
      return (
        <HeadlineSmall
          color={color ? theme[color] : theme.neutral700}          
          align={align}
          styles={styles}
        >
          {(text)}
        </HeadlineSmall>
      );
    case "xsmall":
      return (
        <HeadlineXSmall
          color={color ? theme[color] : theme.neutral700}          
          align={align}
          styles={styles}
        >
          {(text)}
        </HeadlineXSmall>
      );
  }
};
