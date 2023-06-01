import { IAction } from '../../../interfaces/global';

export interface ILogoutStateDuck {
  message: string;
  pending: boolean;
  success: boolean;
};

// ACTION TYPES
export const LOGOUT_START = 'LOGOUT_START';
export const LOGOUT_PENDING = 'LOGOUT_PENDING';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

// ACTIONS
export const logoutStart = () => ({
  type: LOGOUT_START,
});

export const logoutPending = () => ({
  type: LOGOUT_PENDING,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const logoutFailure = (payload: string) => ({
  type: LOGOUT_FAILURE,
  payload
});

//REDUCER
const initialState: ILogoutStateDuck = {
  message: '',
  pending: false,
  success: false,
};

const logoutReducer = (
  state = initialState,
  { type, payload }: IAction,
): ILogoutStateDuck => {

  switch (type) {
    case LOGOUT_PENDING:
      return {
        message: '',
        pending: true,
        success: false,
      };
    case LOGOUT_SUCCESS:
      return {
        message: '',
        pending: false,
        success: true,
      };
    case LOGOUT_FAILURE:
      return {
        message: 'logout failed',
        pending: false,
        success: false,
      };
    default:
      return state;
  }
}

export default logoutReducer;
