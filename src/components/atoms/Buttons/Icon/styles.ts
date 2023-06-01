import styled, { CSSObject } from "styled-components";
import {
  ButtonColor,
  CustomColor,
  ButtonSize,
  ButtonHeight,
} from "../ButtonProps";
import {
  getColorFromButtonIcon,
  getOnColorFromButtonIcon,
} from "../ButtonHelpers";
import { ITheme } from "../../../../interfaces/setupInterface";

interface IStylesProps {
  color: ButtonColor;
  width?: string;
  customColor: CustomColor;
  size: ButtonSize;
  styles?: CSSObject;
  colorPalette: ITheme;
}

export const GeneralStyledBtn = styled.button`
  cursor: pointer;
  position: relative;
  align-items: center;
  background-color: transparent;
  border: none;
  display: flex;
  font-size: ${({ size }: IStylesProps) =>
    size === "small" ? "10px" : size === "medium" ? "14px" : "18px"};
  font-weight: 700;
  height: ${({ size }: IStylesProps) => ButtonHeight[size]};
  justify-content: center;
  letter-spacing: 0.5px;
  line-height: 16px;
  width: ${({ width }: IStylesProps) => width || "64px"};
  padding: 0;
  color: ${({ color, customColor }: IStylesProps) =>
    getColorFromButtonIcon(color, customColor)};
  ${({ styles }) => styles}

  &:hover {
    color: ${({ color, customColor }: IStylesProps) =>
      getOnColorFromButtonIcon(color, customColor)};
    svg {
      fill: ${({ color, customColor }: IStylesProps) =>
        getOnColorFromButtonIcon(color, customColor)};
    }
  }

  &:disabled {
    color: ${({ colorPalette }: IStylesProps) => colorPalette.neutral500};
    svg {
      fill: ${({ colorPalette }: IStylesProps) => colorPalette.neutral500};
    }
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
`;
