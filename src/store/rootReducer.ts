import { combineReducers } from "redux";
import loggedInReducer from "../navigation/ducks/ducks";
import setUpReducer from "./setup/ducks";
import loginReducer from "../screens/Login/ducks/login";
import signupReducer from "../screens/Signup/ducks/signup";
import logoutReducer, { LOGOUT_SUCCESS } from "../screens/Login/ducks/logout";
import linksReducer from "../screens/Links/ducks/links";

const rootReducer = combineReducers({
  loggedIn: loggedInReducer,
  setup: setUpReducer,
  login: loginReducer,
  signup: signupReducer,
  logout: logoutReducer,
  links: linksReducer,
});

const rootReducerEnhancer: typeof rootReducer = (state: any, action: any) => {
  // Clear all data in redux store to initial.
  if (action.type === LOGOUT_SUCCESS) {
    state = undefined;
  }
  // eslint-disable-next-line no-console
  // console.log({ state, action });

  return rootReducer(state, action);
};

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducerEnhancer;
