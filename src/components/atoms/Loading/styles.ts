import styled, { keyframes } from 'styled-components';

export const Load = styled.div`
  position: fixed;
  z-index: 100;
  color: #FFFFFF;
  display: block;
  text-align: center;
  background: rgba(20, 20, 20, 0.5);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const SquareLoad = styled.div`
  display: inline-block;
  position: relative;
  top: 25%;
`;

export const skScaleoutWebkit = keyframes`
  0% { -webkit-transform: scale(0) }
  100% {
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
`

export const skScaleout = keyframes`
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  } 100% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
    opacity: 0;
  }
`

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  margin: 100px auto;
  background-color: #333;
  border-radius: 100%;
  -webkit-animation: ${skScaleoutWebkit} 1.0s infinite ease-in-out;
  animation: ${skScaleout} 1.0s infinite ease-in-out;
`;
