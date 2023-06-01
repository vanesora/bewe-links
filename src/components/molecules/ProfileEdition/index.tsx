import React, { FunctionComponent } from "react";
import { Container, ContainerButton } from "./styles";
import { AtomImage } from "../../atoms/Image";
import { AtomSubtitle } from "../../atoms/Typography/Subtitle";
import { MoleculeProfilePicture } from "../ProfilePicture";
import { AtomBody } from "../../atoms/Typography/Body";
import { AtomIcon } from "../../atoms/Icon";
import { AtomButtonIcon } from "../../atoms/Buttons/Icon";
import { useNavigate } from "react-router";

export interface IProfileEdition {
  imgSrc: string;
  email: string;
  name: string;
}

export const MoleculeProfileEdition: FunctionComponent<IProfileEdition> = ({
  name = "",
  imgSrc,
  email,
}: IProfileEdition) => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/user");
  };

  return (
    <Container>
      <ContainerButton>
        <AtomButtonIcon
          icon="edit"
          color="primary"
          text=""
          type="button"
          onClick={() => handleButton()}
          size="medium"
        />
      </ContainerButton>

      <MoleculeProfilePicture
        imgAlt="profile"
        text={name}
        imgSrc={imgSrc}
        size="70px"
      />
      <AtomBody size="medium" text={email} align="center" />
    </Container>
  );
};
