import styled, { CSSObject } from "styled-components";
import {
  ButtonColor,
  CustomColor,
  ButtonSize,
  ButtonHeight,
} from "../ButtonProps";
import {
  getPrincipalColorFromTheme,
  getColorFromTheme,
  getOnPrincipalColorFromTheme,
} from "../ButtonHelpers";
import { ITheme } from "../../../../interfaces/setupInterface";

interface IStylesProps {
  color: ButtonColor;
  width: string;
  customColor: CustomColor;
  size: ButtonSize;
  colorPalette: ITheme;
  styles?: CSSObject;
}

export const GeneralStyledButton = styled.button`
  ${({ styles }) => styles}
  cursor: pointer;
  align-items: center;
  background-color: ${({ color, customColor, colorPalette }: IStylesProps) =>
    color === "custom"
      ? colorPalette[getPrincipalColorFromTheme(customColor)]
      : color === "primary"
      ? colorPalette.primary
      : colorPalette.secondary};
  border-radius: 4px;
  border: ${({ color, customColor, colorPalette }: IStylesProps) =>
    "2px solid " +
    (color === "custom"
      ? colorPalette[getPrincipalColorFromTheme(customColor)]
      : color === "primary"
      ? colorPalette.primary
      : colorPalette.secondary)};
  display: flex;
  font-size: ${({ size }: IStylesProps) =>
    size === "small" ? "12px" : "16px"};
  font-weight: 700;
  height: ${({ size }: IStylesProps) => ButtonHeight[size]};
  justify-content: center;
  letter-spacing: 0.5px;
  line-height: 16px;
  width: ${({ width }: IStylesProps) => width};
  padding: 8px 24px;
  color: ${({ color, customColor, colorPalette }: IStylesProps) =>
    color === "custom"
      ? colorPalette[getColorFromTheme(customColor)]
      : colorPalette.neutral100};

  &:hover {
    background-color: ${({ color, customColor, colorPalette }: IStylesProps) =>
      color === "custom"
        ? getOnPrincipalColorFromTheme(customColor)
        : color === "primary"
        ? colorPalette.primary300
        : colorPalette.secondary300};
    border: ${({ color, customColor, colorPalette }: IStylesProps) =>
      "2px solid" +
      (color === "custom"
        ? getOnPrincipalColorFromTheme(customColor)
        : color === "primary"
        ? colorPalette.primary300
        : colorPalette.secondary300)};
  }

  &:disabled {
    background-color: ${({ colorPalette }: IStylesProps) =>
      colorPalette.neutral200};
    border-radius: 4px;
    border:${({ colorPalette }: IStylesProps) =>
      `1px solid ${colorPalette.neutral400}`};
    color: ${({ colorPalette }: IStylesProps) => colorPalette.neutral500};
  }
`;
