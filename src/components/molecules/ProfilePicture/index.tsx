import React, {FunctionComponent} from "react";
import { Container } from "./styles";
import { AtomImage } from "../../atoms/Image";
import { AtomSubtitle } from "../../atoms/Typography/Subtitle";

export interface IProfilePicture {
  size?: string;
  imgSrc: string;
  imgAlt: string;
  text: string
}

export const MoleculeProfilePicture: FunctionComponent<IProfilePicture> = ({
  size = "150px",
  imgSrc,
  imgAlt,
  text
}: IProfilePicture) => {
  return (
    <Container>
      <AtomImage
        src={imgSrc}
        alt={imgAlt}
        imgHeight={size}
        imgWidth={size}
        borderRadius={'50%'}
      />
      <AtomSubtitle size="xsmall" text={text} align="center" weight="700"/>
      
    </Container>
  );
};
