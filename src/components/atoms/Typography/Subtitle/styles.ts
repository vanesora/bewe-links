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
  styles?: CSSObject;
}

export const SubtitleXLarge = styled.h4`
  ${({ styles }) => styles};
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: ${({ align }: IStylesProps) => align};
  color: ${({ color }: IStylesProps) => color};
  white-space: break-spaces;

  @media (max-width: ${mobile.max} ) {
    font-weight: 300;
    font-size: 30px;
    line-height: 32px;
  }

  @media (min-width: ${tablet.min}) and (max-width: ${tablet.max} ) {
    font-weight: 300;
    font-size: 32px;
    line-height: 24px;
  }
`;

export const SubtitleLarge = styled.h4`
  ${({ styles }) => styles};
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: ${({ align }: IStylesProps) => align};
  color: ${({ color }: IStylesProps) => color};
  white-space: break-spaces;

  @media (max-width: ${mobile.max} ) {
    font-weight: 300;
    font-size: 26px;
    line-height: 28px;
  }

  @media (min-width: ${tablet.min}) and (max-width: ${tablet.max} ) {
    font-weight: 300;
    font-size: 28px;
    line-height: 24px;
  }
`;

export const SubtitleMedium = styled.h5`
  ${({ styles }) => styles};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: ${({ align }: IStylesProps) => align};
  color: ${({ color }: IStylesProps) => color};
  white-space: break-spaces;

  @media (max-width: ${mobile.max} ) {
    font-weight: 300;
    font-size: 22px;
    line-height: 24px;
  }

  @media (min-width: ${tablet.min}) and (max-width: ${tablet.max} ) {
    font-weight: 300;
    font-size: 24px;
    line-height: 20px;
  }
`;

export const SubtitleSmall = styled.h6`
  ${({ styles }) => styles};
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: ${({ align }: IStylesProps) => align};
  color: ${({ color }: IStylesProps) => color};
  white-space: break-spaces;

  @media (max-width: ${mobile.max} ) {
    font-weight: 300;
    font-size: 20px;
    line-height: 22px;
  }

  @media (min-width: ${tablet.min}) and (max-width: ${tablet.max} ) {
    font-weight: 300;
    font-size: 22px;
    line-height: 16px;
  }
`;

export const SubtitleXSmall = styled.h6`
  ${({ styles }) => styles};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.2px;
  text-align: ${({ align }: IStylesProps) => align};
  color: ${({ color }: IStylesProps) => color};
  white-space: break-spaces;

  @media (max-width: ${mobile.max} ) {
    font-weight: 300;
    font-size: 18px;
    line-height: 20px;
  }

  @media (min-width: ${tablet.min}) and (max-width: ${tablet.max} ) {
    font-weight: 300;
    font-size: 20px;
    line-height: 16px;
  }
`;
