import styled from "styled-components";

export interface IStylesProps {
  height: string;
}

export const FormLogin = styled.form``;

export const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: ${({ height }: IStylesProps) => height};
`;

export const ContainerButton = styled.div`
  margin-top: 40px;
`;

export const ContainerLogo = styled.div`
  width : 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h5{
    margin: 25px 0;
  }
`;

export const ContainerBody = styled.div`
  width : 100%;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  margin: 0;
  padding: 0;
  flex: 1;
`;
