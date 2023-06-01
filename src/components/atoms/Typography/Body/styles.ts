import styled, { CSSObject } from "styled-components";

export interface IStylesProps {
  align: string;
  color: string;
  styles?: CSSObject;
}

export const BodyXLarge = styled.label`
  ${({ styles }) => styles}
  display: block;
  font-size: 18px;
  font-style: normal;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0px;
  text-align: ${({ align }: IStylesProps) => align};
  color: ${({ color }: IStylesProps) => color};
  white-space: break-spaces;
`;

export const BodyLarge = styled.label`
  ${({ styles }) => styles}
  display: block;
  font-size: 16px;
  font-style: normal;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0px;
  text-align: ${({ align }: IStylesProps) => align};
  color: ${({ color }: IStylesProps) => color};
  white-space: break-spaces;
`;

export const BodyMedium = styled.label`
  ${({ styles }) => styles}
  display: block;
  font-size: 14px;
  font-style: normal;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  text-align: ${({ align }: IStylesProps) => align};
  color: ${({ color }: IStylesProps) => color};
  white-space: break-spaces;
`;

export const BodySmall = styled.label`
  ${({ styles }) => styles}
  display: block;
  font-size: 12px;
  font-style: normal;
  line-height: 16px;
  font-weight: 400;
  letter-spacing: 0px;
  text-align: ${({ align }: IStylesProps) => align};
  color: ${({ color }: IStylesProps) => color};
  white-space: break-spaces;
`;

export const BodyXsmall = styled.label`
  ${({ styles }) => styles}
  display: block;
  font-size: 11px;
  font-style: normal;
  line-height: 16px;
  font-weight: 400;
  letter-spacing: 0.2px;
  text-align: ${({ align }: IStylesProps) => align};
  color: ${({ color }: IStylesProps) => color};
  white-space: break-spaces;
`;
