import styled, { CSSObject } from "styled-components";

export interface IStylesProps {
  align: string;
  color: string;
  styles?: CSSObject;
  weight: string;
  size: string
}

export const Body = styled.label`
  ${({ styles }) => styles}
  display: block;
  font-size: ${({ size }: IStylesProps) => size};
  font-style: normal;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0px;
  font-weight: ${({ weight }: IStylesProps) => weight};
  text-align: ${({ align }: IStylesProps) => align};
  color: ${({ color }: IStylesProps) => color};
  white-space: break-spaces;
`;
