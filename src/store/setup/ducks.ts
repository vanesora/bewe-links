import { IScreen, ITheme, IDateFormat } from '../../interfaces/setupInterface';
import { enSetup } from '../../data/dataEn';
import { esSetup } from "../../data/dataEs";
import { IAction } from "../../interfaces/global";

export interface ISetupState {
  currentTheme: string,
  dateFormat: IDateFormat,
  screen: IScreen,
  theme: ITheme,
}

export const SETUP = 'SETUP';
export const SETUP_ES = 'SETUP_ES';
export const SETUP_EN = 'SETUP_EN';

export const setUp = (localization: string) => ({
  type: SETUP,
  payload: localization
});

export const setUpES = () => ({
  type: SETUP_ES,
});

export const setUpEN = () => ({
  type: SETUP_EN,
});

const initialState: ISetupState = {
  currentTheme: enSetup.currentTheme,
  dateFormat: enSetup.dateFormat,
  screen: enSetup.screen,
  theme: enSetup.theme,
};

const setUpReducer = (
  state = initialState,
  { type }: IAction,
): ISetupState => {

  switch (type) {
    case SETUP_ES:
      return {
        ...state,
        currentTheme: esSetup.currentTheme,
        screen: esSetup.screen,
        theme: esSetup.theme,
        dateFormat: esSetup.dateFormat,
      };
    case SETUP_EN:
      return {
        ...state,
        currentTheme: enSetup.currentTheme,
        screen: enSetup.screen,
        theme: enSetup.theme,
      };
    default:
      return state;
  }
}

export default setUpReducer;