import { IAction } from '../../../interfaces/global';

export interface ISignupStateDuck {
  errorMessage: string;
  errorCode: string;
  message: string | undefined;
  pending: boolean;
  success: boolean;
};

export interface ISignupData {
  email: string;
  password: string;
  name: string
}

export interface ISignupResponse {
  email: string;
  name: string;
}

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_PENDING = 'SIGNUP_PENDING';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const SIGNUP_COMPLETED = 'SIGNUP_COMPLETED';

export const signupStart = (payload: ISignupData) => ({
  type: SIGNUP_REQUEST,
  payload
});

export const signupPending = () => ({
  type: SIGNUP_PENDING,
});

export const signupSuccess = (payload: ISignupResponse) => ({
  type: SIGNUP_SUCCESS,
  payload
});

export const signupFailure = (payload: { errorMessage: string, errorCode: string }) => ({
  type: SIGNUP_FAILURE,
  payload
});

export const signupCompleted = () => ({
  type: SIGNUP_COMPLETED,
});

const initialState: ISignupStateDuck = {
  errorMessage: '',
  errorCode: '',
  message: '',
  pending: false,
  success: false,
};

const signupReducer = (
  state = initialState,
  { type, payload }: IAction,
): ISignupStateDuck => {
  switch (type) {
    case SIGNUP_PENDING:
      return {
        ...state,
        errorMessage: '',
        pending: true,
        success: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        pending: false,
        success: true,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        pending: false,
        errorMessage: payload.errorMessage,
        errorCode: payload.errorCode,
      };
    case SIGNUP_COMPLETED:
      return {
        ...state,
        errorMessage: '',
        errorCode: '',
        message: '',
        pending: false,
        success: false,
      };
    default:
      return state;
  }
}

export default signupReducer;
