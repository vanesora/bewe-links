import styled, { CSSObject } from "styled-components";
import { ITheme } from "../../../../interfaces/setupInterface";

interface IStylesProps {
  disabled?: boolean;
  hasError: boolean;
  styles?: CSSObject;
  colors?: ITheme;
}

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const InputPassword = styled.input`
  ${({ styles }) => styles};
  outline: 0;
  padding: 10px 45px 10px 15px;
  border: 1px solid;
  border: ${({ colors }) =>
    `1px solid ${colors != null ? colors.neutral400 : ""}`};
  border-color:${({ disabled, hasError, colors }: IStylesProps) =>
    disabled === true
      ? colors?.neutral300
      : hasError
      ? colors?.secondary400
      : colors?.neutral400};
  background-color:${({ disabled, colors }: IStylesProps) =>
    disabled === true ? colors?.neutral300 : colors?.neutral100};
  color:${({ disabled, colors }: IStylesProps) =>
    disabled === true ? colors?.neutral600 : colors?.neutral700};
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus{
    border-color: ${({ colors, hasError }: IStylesProps) =>
      !hasError ? colors?.neutral700 : colors?.secondary400};
  }
  &::placeholder{
    color: ${({ colors }) => colors?.neutral500};
    font-weight: 400;
  }
`;
