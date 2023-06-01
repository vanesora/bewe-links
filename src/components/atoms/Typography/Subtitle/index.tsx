import React, {FunctionComponent} from "react";
import { ITypographyProps } from "../TypographyProps";
import {
  SubtitleXLarge,
  SubtitleLarge,
  SubtitleMedium,
  SubtitleSmall,
  SubtitleXSmall,
} from "./styles";
import { useSelector } from "react-redux";
import { AppState } from "../../../../store/rootReducer";

export const AtomSubtitle: FunctionComponent<ITypographyProps> = ({
  align = "center",
  size,
  text,
  color,
  weight = "thin",
  styles = {},
}: ITypographyProps) => {
  const { theme } = useSelector((state: AppState) => state.setup);

  switch (size) {
    case "xlarge":
      return (
        <SubtitleXLarge
          color={color ? theme[color] : theme.neutral700}
          align={align}
          styles={styles}
        >
          {text}
        </SubtitleXLarge>
      );
    case "large":
      return (
        <SubtitleLarge
          color={color ? theme[color] : theme.neutral700}
          align={align}
          styles={styles}
        >
          {text}
        </SubtitleLarge>
      );
    case "medium":
      return (
        <SubtitleMedium
          color={color ? theme[color] : theme.neutral700}
          align={align}
          styles={styles}
        >
          {text}
        </SubtitleMedium>
      );
    case "small":
      return (
        <SubtitleSmall
          color={color ? theme[color] : theme.neutral700}
          align={align}
          styles={styles}
        >
          {text}
        </SubtitleSmall>
      );
    case "xsmall":
      return (
        <SubtitleXSmall
          color={color ? theme[color] : theme.neutral700}
          align={align}
          styles={styles}
        >
          {text}
        </SubtitleXSmall>
      );
  }
};
