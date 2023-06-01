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

export const HeadlineXLarge = styled.h4`
  ${({ styles }) => styles};
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: 0em;
  text-align: ${({ align }: IStylesProps) => align};
  color: ${({ color }: IStylesProps) => color};
  white-space: break-spaces;

  @media (max-width: ${tablet.max} ) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const HeadlineLarge = styled.h4`
  ${({ styles }) => styles};
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: ${({ align }: IStylesProps) => align};
  color: ${({ color }: IStylesProps) => color};
  white-space: break-spaces;
`;

export const HeadlineMedium = styled.h5`
  ${({ styles }) => styles};
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: ${({ align }: IStylesProps) => align};
  color: ${({ color }: IStylesProps) => color};
  white-space: break-spaces;

`;

export const HeadlineSmall = styled.h6`
  ${({ styles }) => styles};
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: ${({ align }: IStylesProps) => align};
  color: ${({ color }: IStylesProps) => color};
  white-space: break-spaces;
`;

export const HeadlineXSmall = styled.h6`
  ${({ styles }) => styles};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: ${({ align }: IStylesProps) => align};
  color: ${({ color }: IStylesProps) => color};
  white-space: break-spaces;
`;
