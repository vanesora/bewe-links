import styled from 'styled-components';
import { enSetup } from '../../data/dataEn';

export const ContainerMenu = styled.div`
    height: 100%;
    margin-top: 25px;
    max-width: 300px;
    min-height: calc(100vh - 345px);
    width: 90%;
    .button{
        color: transparent
    }

    @media (min-width: ${defaultProps => defaultProps.theme.grid.small.value}) {
        min-height: calc(100vh - 117px);
        min-width: 200px;
        width: 290px;
    }

    /* @media (min-width: ${defaultProps => defaultProps.theme.grid.medium.value}) {
        min-height: calc(100vh - 279px);
        padding-left: 75px;
    } */
`