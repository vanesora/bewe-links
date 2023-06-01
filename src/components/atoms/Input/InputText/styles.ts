import styled, { CSSObject } from "styled-components";
import { ITheme } from "../../../../interfaces/setupInterface";

interface IStylesProps {
  readOnly?: boolean;
  disabled?: boolean;
  withIcon?: boolean;
  hasError?: boolean;
  styles?: CSSObject;
  colorPalette: ITheme;
}

export const InputBase = styled.input`
  ${({ styles }) => styles};
  outline: 0;
  padding: ${({ withIcon }: IStylesProps) =>
    withIcon ? "10px 45px 10px 15px" : "10px 15px"};
  border: 1px solid;
  border-color:${({
    readOnly,
    disabled,
    hasError,
    colorPalette,
  }: IStylesProps) =>
    disabled === true
      ? colorPalette.neutral300
      : readOnly === true
      ? colorPalette.transparent
      : hasError
      ? colorPalette.secondary400
      : colorPalette.neutral400};
  background-color:${({ readOnly, disabled, colorPalette }: IStylesProps) =>
    disabled === true
      ? colorPalette.neutral300
      : readOnly === true
      ? colorPalette.transparent
      : colorPalette.neutral100};
  color:${({ disabled, colorPalette }: IStylesProps) =>
    disabled === true ? colorPalette.neutral600 : colorPalette.neutral700};
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  border-radius: 4px;
  color: ${({ colorPalette }: IStylesProps) => colorPalette.neutral700};

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus{
    border-color: ${({ readOnly, hasError, colorPalette }: IStylesProps) =>
      readOnly === true
        ? colorPalette.transparent
        : !hasError
        ? colorPalette.neutral700
        : colorPalette.secondary400};
  }
  &:hover{
    ${({ readOnly, colorPalette }: IStylesProps) =>
      readOnly &&
      "border-radius: 0px; border-color:" +
        colorPalette.neutral400 +
        "; borderWidth: 1px;  padding: 0; height: 24px; margin-top:12px;"}
  }
  &::placeholder{
    color: ${({ colorPalette }: IStylesProps) => colorPalette.neutral500};
    font-weight: 400;
  }
`;
