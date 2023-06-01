import { enSetup } from "../data/dataEn";
import { IPath } from "./ducks/ducks";

interface MockStoreTest {
    setup: any;
    pathActual: IPath;
}

const basicConfig = {
    errorMessage: '',
    pending: false,
    success: true,
    errorCode: '',
    message: '',
}

export const mockTest: MockStoreTest = {
    setup: enSetup,
    pathActual: {
        path: '/',
        ...basicConfig
    }
};

