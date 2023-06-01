import styled from "styled-components";

interface IContainerStyledProps {
  width: string;
  height: string;
}

interface ITextContainerProps {
  bottomMargin: string;
  isTextOver: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: ${({ width }: IContainerStyledProps) =>
    width ? `${width}` : "min-content"};
  height: ${({ height }: IContainerStyledProps) =>
    height ? `${height}` : "min-content"};
`;
export const TextContainer = styled.div`
  bottom: ${({ bottomMargin, isTextOver }: ITextContainerProps) =>
    isTextOver ? `${bottomMargin}` : "0px"};
  position: ${({ isTextOver }: ITextContainerProps) =>
    isTextOver ? "absolute" : "static"};
`;
