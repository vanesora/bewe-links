import { IScreen, ITheme, IDateFormat } from "./setupInterface";

export interface IAction {
  type: string;
  payload?: any;
}

export interface IStateStatus {
  errorMessage: string;
  errorCode: string;
  message: string;
  pending: boolean;
  success: boolean;
}

export interface ISetup {
  currentTheme: string,
  dateFormat: IDateFormat,
  screen: IScreen,
  theme: ITheme,
}

export interface IGenericResponse {
  status: number;
  success: boolean;
  data?: any;
  statusCode?: number;
  message?: string;
  apicode?: number;
  user?: string;
}

export interface IGenericErrorResponse {
  errorMessage: string;
  errorCode?: string;
  message?: string;
}