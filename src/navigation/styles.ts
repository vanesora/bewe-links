import styled from "styled-components";

export interface IStylesProps {
  height: string;
}

export const ContainerNav = styled.div`
  height: ${({ height }: IStylesProps) => height};
`;
