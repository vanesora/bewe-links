import React, { useEffect, useState } from "react";
import { StyledCardContainer } from "./styles";
import { useSelector } from "react-redux";
import { AppState } from "../../../store/rootReducer";
import { keysTheme } from "../../../data/dataEn";

export interface ICardContainerProps {
  /** Align content in card */
  alignContent?: string;
  /** Align items in card */
  alignItems?: string;
  /** Card background color */
  bgColor?: keysTheme;
  /** Component to render on card */
  children?: any;
  /** Content direction */
  flexDirection?: string;
  /** Card height */
  height: string;
  /** Justify content card */
  justifyContent?: string;
  /** Margin card */
  margin?: string;
  /** Padding card */
  padding?: string;
  /** Shadow size card */
  shadowSize?: "small" | "regular" | "large" | "noshadow";
  /** Card width */
  width: string;
}

export const AtomCardContainer = ({
  width,
  height,
  children,
  padding = "",
  margin = "",
  bgColor = "neutral100",
  flexDirection = "column",
  alignItems = "",
  justifyContent = "",
  alignContent = "",
  shadowSize = "regular",
}: ICardContainerProps): JSX.Element => {
  const [shadow, setShadow] = useState<string>("");
  const { theme } = useSelector((state: AppState) => state.setup);

  useEffect(() => {
    const rgba = "rgba(116, 134, 141, 0.1)";
    switch (shadowSize) {
      case "small":
        setShadow(`0px 5px 8px ${rgba}`);
        break;
      case "regular":
        setShadow(`0px 4px 16px ${rgba}`);
        break;
      case "large":
        setShadow(`0px 4px 28px ${rgba}`);
        break;
      case "noshadow":
        setShadow(`0px 0px 0px ${rgba}`);
        break;
    }
  }, [shadowSize]);

  return (
    <StyledCardContainer
      data-testid="card-container"
      width={width}
      height={height}
      shadow={shadow}
      padding={padding}
      margin={margin}
      bgColor={theme[bgColor]}
      flexDirection={flexDirection}
      alignItems={alignItems}
      alignContent={alignContent}
      justifyContent={justifyContent}
    >
      {children}
    </StyledCardContainer>
  );
};
