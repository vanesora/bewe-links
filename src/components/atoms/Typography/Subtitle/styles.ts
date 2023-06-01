import styled, { CSSObject } from "styled-components";

const tablet = {
  min: "768px",
  max: "460px",
}

const mobile = {
  max: "460px",
}

export interface IStylesProps {
  align: string;
  color: string;
  weight: string;
  styles?: CSSObject;
}

export const SubtitleXLarge = styled.h4`
  ${({ styles }) => styles};
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  font-weight: ${({ weight }: IStylesProps) => weight};
  text-align: ${({ align }: IStylesProps) => align};
  color: ${({ color }: IStylesProps) => color};
  white-space: break-spaces;
`;

export const SubtitleLarge = styled.h4`
  ${({ styles }) => styles};
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  font-weight: ${({ weight }: IStylesProps) => weight};
  text-align: ${({ align }: IStylesProps) => align};
  color: ${({ color }: IStylesProps) => color};
  white-space: break-spaces;
`;

export const SubtitleMedium = styled.h5`
  ${({ styles }) => styles};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  font-weight: ${({ weight }: IStylesProps) => weight};
  text-align: ${({ align }: IStylesProps) => align};
  color: ${({ color }: IStylesProps) => color};
  white-space: break-spaces;
`;

export const SubtitleSmall = styled.h6`
  ${({ styles }) => styles};
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  font-weight: ${({ weight }: IStylesProps) => weight};
  text-align: ${({ align }: IStylesProps) => align};
  color: ${({ color }: IStylesProps) => color};
  white-space: break-spaces;
`;

export const SubtitleXSmall = styled.h6`
  ${({ styles }) => styles};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.2px;
  font-weight: ${({ weight }: IStylesProps) => weight};
  text-align: ${({ align }: IStylesProps) => align};
  color: ${({ color }: IStylesProps) => color};
  white-space: break-spaces;
`;
