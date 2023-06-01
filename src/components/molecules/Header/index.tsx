import React, {FunctionComponent} from "react";
import { Container, ContainerButtons } from "./styles";
import { AtomLogo } from "../../atoms/Logo";
import { AtomButtonOutline } from "../../atoms/Buttons/Outline";
import { IButtonsNav } from "../../../interfaces/setupInterface";

export interface IHeaderProps {
  isLogin: boolean;
  onClick?: () => void;
  text: IButtonsNav;
  path?: string;
}

export const MoleculeHeader: FunctionComponent<IHeaderProps> = ({
  isLogin = false,
  onClick,
  text,
  path,
}: IHeaderProps) => {
  return (
    <Container>
      {isLogin && <AtomLogo size="small" text="none" />}
      <ContainerButtons>
        <AtomButtonOutline
          color="primary"
          type="submit"
          text={
            isLogin ? text.logout : path === "login" ? text.signup : text.login
          }
          size="small"
          width="90px"
          onClick={onClick}
        />
      </ContainerButtons>
    </Container>
  );
};
