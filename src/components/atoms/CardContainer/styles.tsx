import styled from "styled-components";

export interface IStylesProps {
  width: string;
  height: string;
  shadow: string;
  padding: string;
  margin: string;
  bgColor: string;
  flexDirection: string;
  alignItems: string;
  alignContent: string;
  justifyContent: string;
}

export const StyledCardContainer = styled.div`
  width: ${({ width }: IStylesProps) => width};
  height: ${({ height }: IStylesProps) => height};
  box-shadow: ${({ shadow }: IStylesProps) => shadow};
  border-radius: 8px;
  padding: ${({ padding }: IStylesProps) => padding};
  margin: ${({ margin }: IStylesProps) => margin};
  background-color: ${({ bgColor }: IStylesProps) => bgColor};
  display: flex;
  flex-direction: ${({ flexDirection }: IStylesProps) => flexDirection};
  align-items: ${({ alignItems }: IStylesProps) => alignItems};
  align-content: ${({ alignContent }: IStylesProps) => alignContent};
  justify-content: ${({ justifyContent }: IStylesProps) => justifyContent};
`;
