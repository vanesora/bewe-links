import React, { FunctionComponent } from "react";
import { Container, ContainerText } from "./styles";
import { AtomBody } from "../../atoms/Typography/Body";
import { AtomButtonIcon } from "../../atoms/Buttons/Icon";

export interface IDescription {
  url: string;
  text: string;
  id: string;
  onClick: (e?: any) => void;
}

export const MoleculeDescription: FunctionComponent<IDescription> = ({
  url,
  text,
  id,
  onClick,
}: IDescription) => {
  return (
    <Container>
      <ContainerText>
        <AtomBody size="large" text={url} weight="600" color="primary" align="left" />
        <AtomBody size="medium" text={text} weight="500" align="left"/>
      </ContainerText>
      <AtomButtonIcon color="secondary" icon="trash" type="button" text="" size="medium" onClick={()=> onClick(id)} />
    </Container>
  );
};
