import { IAction, IGenericErrorResponse, IStateStatus } from '../../interfaces/global';

export interface ILoggedIn extends IStateStatus {
  loggedIn: boolean;
}

// ACTION TYPES
export const GET_LOGGED_IN_REQUEST = 'GET_LOGGED_IN_REQUEST';
export const GET_LOGGED_IN_PENDING = 'GET_LOGGED_IN_PENDING';
export const GET_LOGGED_IN_SUCCESS = 'GET_LOGGED_IN_SUCCESS';
export const GET_LOGGED_IN_FAILURE = 'GET_LOGGED_IN_FAILURE';

// ACTIONS
export const getLoggedInStart = () => ({
  type: GET_LOGGED_IN_REQUEST
});

export const getLoggedInPending = () => ({
  type: GET_LOGGED_IN_PENDING,
});

export const getLoggedInSuccess = (payload: boolean) => ({
  type: GET_LOGGED_IN_SUCCESS,
  payload
});

export const getLoggedInFailure = (payload: IGenericErrorResponse) => ({
  type: GET_LOGGED_IN_FAILURE,
  payload
});

//REDUCER
const initialState: ILoggedIn = { 
  loggedIn: false, 
  errorMessage: '',
  errorCode: '',
  message: '',
  pending: false,
  success: false,
};

const loggedInReducer = (
  state = initialState,
  { type, payload }: IAction,
): ILoggedIn => {
  switch (type) {
    case GET_LOGGED_IN_PENDING:
      return {
        ...state,
        pending: true,
        success: false,
      };
    case GET_LOGGED_IN_SUCCESS:
      return {
        ...state,
        loggedIn: payload,
        pending: false,
        success: true,
      };
    case GET_LOGGED_IN_FAILURE:
      return {
        ...state,
        pending: false,
        success: false,
        errorMessage: payload
      };
    default:
      return state;
  }
}

export default loggedInReducer;
