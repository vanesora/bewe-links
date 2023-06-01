import styled from "styled-components";

export interface IStylesProps {
  height: string;
}
export interface ICardsBodyProps {
  direction: string;
}
export const FormLinks = styled.form``;

export const ContainerButton = styled.div`
  margin: 40px 0;
`;


export const ContainerLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: ${({ height }: IStylesProps) => height};
`;


export const ContainerBody = styled.div`
  width : 100%;
  display: flex;
  justify-content: center;
  align-items: left;
  margin: 0;
  padding: 0;
  flex: 1;
  flex-direction: ${({ direction }: ICardsBodyProps) => direction};
`;

export const ContainerCards = styled.div`
  max-height: 100%;
  min-width: 40%;
  @media (min-width: 1050px ) {
    padding: 30px 10px
  }
`;

