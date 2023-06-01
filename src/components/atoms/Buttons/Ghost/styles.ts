import styled, { CSSObject } from "styled-components";
import {
  ButtonColor,
  CustomColor,
  ButtonSize,
  ButtonHeight,
} from "../ButtonProps";
import {
  getOnPrincipalColorFromTheme,
  getPrincipalColorFromTheme,
} from "../ButtonHelpers";
import { ITheme } from "../../../../interfaces/setupInterface";

interface IStylesProps {
  color: ButtonColor;
  width?: string;
  customColor: CustomColor;
  size: ButtonSize;
  colorPalette: ITheme;
  styles?: CSSObject;
}

export const GeneralStyledBtn = styled.button`
  ${({ styles }) => styles}
  cursor: pointer;
  align-items: center;
  background-color: ${({ colorPalette }: IStylesProps) =>
    colorPalette.transparent};
  border-radius: 4px;
  border: none;
  color: ${({ color, customColor, colorPalette }: IStylesProps) =>
    color === "custom"
      ? colorPalette[getPrincipalColorFromTheme(customColor)]
      : colorPalette[color]};
  display: flex;
  font-size: ${({ size }: IStylesProps) =>
  size === "small" ? "10px" : size === "medium" ? "14px" : "18px"};
  font-weight: 700;
  height: ${({ size }: IStylesProps) => ButtonHeight[size]};
  justify-content: center;
  letter-spacing: 0.5px;
  line-height: 16px;
  width: ${({ width }: IStylesProps) => width};
  padding: 8px 24px;

  &:hover {
    color: ${({ color, customColor, colorPalette }: IStylesProps) =>
      color === "custom"
        ? getOnPrincipalColorFromTheme(customColor)
        : color === "primary"
        ? colorPalette.primary300
        : colorPalette.secondary300};
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
