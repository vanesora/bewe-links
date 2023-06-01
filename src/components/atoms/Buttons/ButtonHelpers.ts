import { enSetup } from "../../../data/dataEn";
import { ButtonColor, CustomColor } from "./ButtonProps";

const theme = enSetup.theme;

export const getColorFromTheme = (customColor: CustomColor) => {
  switch (customColor) {
    case "light":
      return "neutral700";
    default:
      return "neutral100";
  }
};

export const getOnPrincipalColorFromTheme = (customColor: CustomColor) => {
  switch (customColor) {
    case "light":
      return theme.neutral200;
    case "dark":
    case "neutral":
      return theme.neutral700;
    default:
      return theme.neutral200;
  }
};

export const getPrincipalColorFromTheme = (customColor: CustomColor) => {
  switch (customColor) {
    case "dark":
      return "neutral700";

    case "light":
      return "neutral100";
    case "neutral":
      return "neutral500";
    default:
      return customColor;
  }
};

export const getColorFromButtonIcon = (
  color: ButtonColor,
  customColor: CustomColor,
) => {
  if (color === "custom") {
    return getPrincipalColorFromTheme(customColor);
  } else {
    return color;
  }
};

export const getOnColorFromButtonIcon = (
  color: ButtonColor,
  customColor: CustomColor
) => {
    if (color === "custom") {
      return getOnPrincipalColorFromTheme(customColor);
    } else {
      return theme[`${color}300`];
    }
};
