import { IAction } from "../../../interfaces/global";

export interface ILinksDuck {
  errorMessage: string;
  pending: boolean;
  success: boolean;
  links: ILinks[];
}

export interface ILinks {
  name: string;
  url: string;
  id?: string;
}

export const GET_LINKS_REQUEST = "GET_LINKS_REQUEST";
export const CREATE_LINKS_REQUEST = "CREATE_LINKS_REQUEST";
export const DELETE_LINKS_REQUEST = "DELETE_LINKS_REQUEST";
export const GET_LINKS_PENDING = "GET_LINKS_PENDING";
export const GET_LINKS_SUCCESS = "GET_LINKS_SUCCESS";
export const CREATE_LINKS_SUCCESS = "CREATE_LINKS_SUCCESS";
export const DELETE_LINKS_SUCCESS = "DELETE_LINKS_SUCCESS";
export const GET_LINKS_FAILURE = "GET_LINKS_FAILURE";

export const getLinksStart = () => ({
  type: GET_LINKS_REQUEST,
});

export const createLinksStart = (payload: {name: string, url: string, actualList: ILinks[]}) => ({
  type: CREATE_LINKS_REQUEST,
  payload
});

export const deleteLinksStart = (payload: {id: string, actualList: ILinks[]}) => ({
  type: DELETE_LINKS_REQUEST,
  payload
});

export const getLinksPending = () => ({
  type: GET_LINKS_PENDING,
});

export const getLinksSuccess = (payload: ILinks[]) => ({
  type: GET_LINKS_SUCCESS,
  payload,
});

export const createLinksSuccess = (payload: ILinks[]) => ({
  type: CREATE_LINKS_SUCCESS,
  payload,
});

export const deleteLinksSuccess = (payload: ILinks[]) => ({
  type: DELETE_LINKS_SUCCESS,
  payload,
});

export const getLinksFailure = (payload: string) => ({
  type: GET_LINKS_FAILURE,
  payload,
});

const initialState: ILinksDuck = {
  errorMessage: "",
  pending: false,
  success: false,
  links: [],
};

const linksReducer = (
  state = initialState,
  { type, payload }: IAction
): ILinksDuck => {
  switch (type) {
    case GET_LINKS_PENDING:
      return {
        ...state,
        success: false,
        pending: true,
      };
    case GET_LINKS_SUCCESS:
      return {
        ...state,
        links: payload,
        success: true,
        pending: false,
      };
    case GET_LINKS_FAILURE:
      return {
        ...state,
        success: false,
        pending: false,
      };
    case CREATE_LINKS_SUCCESS:
      return {
        ...state,
        links: payload,
        success: true,
        pending: false,
      };
    case DELETE_LINKS_SUCCESS:
      return {
        ...state,
        links: payload,
        success: true,
        pending: false,
      };
    default:
      return state;
  }
};

export default linksReducer;
