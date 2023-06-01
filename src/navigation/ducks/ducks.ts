import { IAction, IGenericErrorResponse, IStateStatus } from '../../interfaces/global';

export interface IPath extends IStateStatus {
  path: string;
}

// ACTION TYPES
export const GET_SCHEMA_PATH_REQUEST = 'GET_SCHEMA_PATH_REQUEST';
export const GET_SCHEMA_PATH_PENDING = 'GET_SCHEMA_PATH_PENDING';
export const GET_SCHEMA_PATH_SUCCESS = 'GET_SCHEMA_PATH_SUCCESS';
export const GET_SCHEMA_PATH_FAILURE = 'GET_SCHEMA_PATH_FAILURE';

// ACTIONS
export const getPathStart = () => ({
  type: GET_SCHEMA_PATH_REQUEST
});

export const getPathPending = () => ({
  type: GET_SCHEMA_PATH_PENDING,
});

export const getPathSuccess = (payload: string) => ({
  type: GET_SCHEMA_PATH_SUCCESS,
  payload
});

export const getPathFailure = (payload: IGenericErrorResponse) => ({
  type: GET_SCHEMA_PATH_FAILURE,
  payload
});

//REDUCER
const initialState: IPath = { 
  path: '/', 
  errorMessage: '',
  errorCode: '',
  message: '',
  pending: false,
  success: false,
};

const pathReducer = (
  state = initialState,
  { type, payload }: IAction,
): IPath => {
  switch (type) {
    case GET_SCHEMA_PATH_PENDING:
      return {
        ...state,
        pending: true,
        success: false,
      };
    case GET_SCHEMA_PATH_SUCCESS:
      return {
        ...state,
        path: payload,
        pending: false,
        success: true,
      };
    case GET_SCHEMA_PATH_FAILURE:
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

export default pathReducer;
