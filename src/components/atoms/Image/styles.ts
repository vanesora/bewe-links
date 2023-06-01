import styled, { CSSObject } from "styled-components";
import { ResizeImageTypes } from "./index";

interface StyledProps {
  resizeMode: ResizeImageTypes;
  borderRadius: string;
  imgWidth: string;
  imgHeight: string;
  styles?: CSSObject;
}

export const Img = styled.img`
  ${({ styles }) => styles};
  width: ${({ imgWidth }: StyledProps) => imgWidth};
  height: ${({ imgHeight }: StyledProps) => imgHeight};
  object-fit: ${({ resizeMode }: StyledProps) => resizeMode};
  border-radius: ${({ borderRadius }: StyledProps) => borderRadius};
`;
