import { IAction, IStateStatus } from '../../../interfaces/global';

export interface ILoginData {
  email: string;
  password: string;
}
export interface ILoginResponse {
  token: string;
  email: string;
  name: string;
}

export interface ILoginResponseBack {
  data:{
    email: string;
    name: string;
    id: string
  },
  token: string;
}

export interface ILoginState extends IStateStatus {
  user: ILoginResponse;
};

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_COMPLETED = 'LOGIN_COMPLETED';

export const loginStart = (payload: ILoginData) => ({
  type: LOGIN_START,
  payload
});

export const loginPending = () => ({
  type: LOGIN_PENDING,
});

export const loginSuccess = (payload: ILoginResponse) => ({
  type: LOGIN_SUCCESS,
  payload
});

export const loginFailure = (payload: { errorMessage: string, errorCode: string }) => ({
  type: LOGIN_FAILURE,
  payload
});

export const loginCompleted = () => ({
  type: LOGIN_COMPLETED,
});

const initialState: ILoginState = {
  errorMessage: '',
  errorCode: '',
  message: '',
  pending: false,
  success: false,
  user:{
    email:'',
    name: '',
    token: ''
  }
};

const loginReducer = (
  state = initialState,
  { type, payload }: IAction,
): ILoginState => {
  switch (type) {
    case LOGIN_PENDING:
      return {
        ...state,
        pending: true,
        success: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        pending: false,
        success: true,
        user: payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        pending: false,
        errorMessage: payload.errorMessage,
        errorCode: payload.errorCode,
      };
    case LOGIN_COMPLETED:
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

export default loginReducer;