import React, {
  Fragment,
  FunctionComponent,
  useEffect,
  useState,
  useMemo,
} from "react";
import Loading from "../components/atoms/Loading";
import { Routes, useLocation, Route } from "react-router-dom";
import { connect } from "react-redux";
import { ContainerNav } from "./styles";
import { AppState } from "../store/rootReducer";
import { ILoggedIn, getLoggedInStart } from "./ducks/ducks";
import Login from "../screens/Login/Login";
import User from "../screens/User/User";
import Signup from "../screens/Signup/Signup";
import { Navigate, Outlet } from "react-router";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { ISetupState } from "../store/setup/ducks";
import { IAction } from "../interfaces/global";
import Links from "../screens/Links/Links";
import { getItem } from "../helpers/storage";

interface IProps {
  loggedInSate: ILoggedIn;
  setup: ISetupState;
  getLoggedInStart: () => IAction;
}

const mapDispatchToProps = {
  getLoggedInStart,
};

const mapStateToProps = (state: AppState) => ({
  loggedInSate: state.loggedIn,
  setup: state.setup,
});

const Online = ({ loggedIn }: { loggedIn: boolean }) => {
  const sizeWindow = useWindowWidth();

  return (
    <>
      <Fragment>
        <ContainerNav height={sizeWindow.height + "px"}>
          <Routes>
            <Route element={<GuardAuth/>}>
              <Route path="/links" element={<Links />}></Route>
              <Route path="/user" element={<User />}></Route>
            </Route>

            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route
              path="/"
              element={
                loggedIn ? <Navigate to="/links" /> : <Navigate to="/login" />
              }
            ></Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </ContainerNav>
      </Fragment>
    </>
  );
};


const mapStateToPropsGuard = (state: AppState) => ({
  isLoginIn: !!state.loggedIn.loggedIn || !!state.login.user.token ,
  loggedIn: state.loggedIn.loggedIn,
  token: state.login.user.token
});

const GuardAuth = connect(mapStateToPropsGuard)((props: any) => {
  return props.isLoginIn ? <Outlet /> : <Navigate to="/login" />;
});

const NavigationRouter: FunctionComponent<IProps> = ({
  loggedInSate,
  setup,
  getLoggedInStart,
}: IProps) => {
  useEffect(() => {
    getLoggedInStart();
  }, []);

  return (
    <>
      {! loggedInSate.finished  ? (
        <Loading />
      ) : (
        <Online loggedIn={loggedInSate.loggedIn} />
      )}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationRouter);
