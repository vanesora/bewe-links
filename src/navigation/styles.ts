import styled from 'styled-components';
import { enSetup } from '../data/dataEn';

export const ContainerNav = styled.div`
  min-height: calc(100% - 117px);

  .marginTop {
    overflow-x: hidden;
  }

  .maxHeight {
    overflow-x: hidden;
  }

  .scrollWidth {
    background: #F3F8FA;
    max-width: 100%;
    overflow-x: auto;
    min-height: calc(100vh - 345px);

    @media (max-width: 1028px) {
      min-height: calc(100vh - 279px);
    }

    @media (max-width: 768px) {
      min-height: calc(100vh - 117px);
    }
  }
`;

export const ContainerMenu = styled.div`
  box-shadow: inset 0px -1px 0px #cbcbcb;
  width: 200px;
  height: 100%;
  max-width: 400px;
`;
export const ContainerUser = styled.div`
  box-shadow: inset 0px -1px 0px #cbcbcb;
  width: 100%;
  display: flex;
`;

ContainerUser.defaultProps = {
  theme: {
    ...enSetup.theme,
  },
};

ContainerMenu.defaultProps = {
  theme: {
    ...enSetup.theme,
  },
};
