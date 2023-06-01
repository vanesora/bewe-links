import { IAction } from '../../../interfaces/global';

export interface ISignupStateDuck {
  errorMessage: string;
  errorCode: string;
  message: string | undefined;
  pending: boolean;
  success: boolean;
};

// ACTION TYPES
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_PENDING = 'SIGNUP_PENDING';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const SIGNUP_COMPLETED = 'SIGNUP_COMPLETED';

// ACTIONS
export const signupStart = (payload: any) => ({
  type: SIGNUP_REQUEST,
  payload
});

export const signupPending = () => ({
  type: SIGNUP_PENDING,
});

export const signupSuccess = (payload: { status: string }) => ({
  type: SIGNUP_SUCCESS,
  payload
});

export const signupFailure = (payload: string) => ({
  type: SIGNUP_FAILURE,
  payload
});

export const signupCompleted = () => ({
  type: SIGNUP_COMPLETED,
});

//REDUCER
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
        message: payload.message,
        pending: false,
        success: true,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        errorMessage: payload,
        pending: false,
        success: false,
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
