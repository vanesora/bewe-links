import styled, { CSSObject } from "styled-components";

export interface IStylesProps {
  size: string
}

export const ContainerLogo = styled.label`
  
  width: ${({ size }: IStylesProps) => size};
`;
