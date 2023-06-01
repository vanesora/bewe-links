import { IAction } from "../../../interfaces/global";

export interface ILogoutRedirectDuck {
  errorMessage: string;
  pending: boolean;
  success: boolean;
  logoutRedirect: string;
};

// ACTION TYPES
export const GET_LOGOUT_REDIRECT_REQUEST = 'GET_LOGOUT_REDIRECT_REQUEST';
export const GET_LOGOUT_REDIRECT_PENDING = 'GET_LOGOUT_REDIRECT_PENDING';
export const GET_LOGOUT_REDIRECT_SUCCESS = 'GET_LOGOUT_REDIRECT_SUCCESS';
export const GET_LOGOUT_REDIRECT_FAILURE = 'GET_LOGOUT_REDIRECT_FAILURE';

// ACTIONS
export const getLogoutRedirectStart = () => ({
  type: GET_LOGOUT_REDIRECT_REQUEST
});

export const getLogoutRedirectPending = () => ({
  type: GET_LOGOUT_REDIRECT_PENDING,
})

export const getLogoutRedirectSuccess = (payload: Array<any>) => ({
  type: GET_LOGOUT_REDIRECT_SUCCESS,
  payload,
});

export const getLogoutRedirectFailure = (payload: string) => ({
  type: GET_LOGOUT_REDIRECT_FAILURE,
  payload,
});

//REDUCER
const initialState: ILogoutRedirectDuck = {
  errorMessage: '',
  pending: false,
  success: false,
  logoutRedirect: '/',
};

const logoutRedirectReducer = (
  state = initialState,
  { type, payload }: IAction,
): ILogoutRedirectDuck => {

  switch (type) {
    case GET_LOGOUT_REDIRECT_PENDING:
      return {
        ...state,
        success: false,
        pending: true,
      };
    case GET_LOGOUT_REDIRECT_SUCCESS:
      return {
        ...state,
        logoutRedirect: payload,
        success: true,
        pending: false,
      };
    case GET_LOGOUT_REDIRECT_FAILURE:
      return {
        ...state,
        success: false,
        pending: false,
      };
    default:
      return state;
  }
}

export default logoutRedirectReducer;