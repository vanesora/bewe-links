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
import { Navigate } from "react-router";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { ISetupState } from "../store/setup/ducks";
import { IAction } from "../interfaces/global";

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

const Online = ({ loggedIn }: { loggedIn: boolean}) => {
  const sizeWindow = useWindowWidth();

  return (
    <>
      <Fragment>
        <ContainerNav height={sizeWindow.height+'px'}>
              <Routes>
                <Route path="/" element=
                  {loggedIn ? <User /> : <Login />}>
                </Route>
                <Route path="/signup" element={!loggedIn ? <Signup /> :  <Navigate to="/user"/>}></Route>
                <Route path="/login" element={!loggedIn ? <Login /> : <Navigate to="/user"/>}></Route>
                <Route path="/user"element={loggedIn ? <User /> : <Navigate to="/login"/>}></Route>
                <Route path='*' element={<Navigate to='/' />} />
              </Routes>
        </ContainerNav>
      </Fragment>
    </>
  );
};


const NavigationRouter: FunctionComponent<IProps> = ({
  loggedInSate,
  setup,
  getLoggedInStart
}: IProps) => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const location = useLocation();
  const localPath = useMemo(() => location.pathname, [location]);


  useEffect(() => {
    getLoggedInStart();
  }, [localPath]);

  useEffect(() => {
    setIsLoading(loggedInSate.pending);
  }, [loggedInSate.pending]);

  useEffect(() => {
    if (loggedInSate.success) {
      setLoggedIn(loggedInSate.loggedIn);
    }
  }, [loggedInSate.success]);

  return (
    <>
      {isLoading? (
        <Loading />
      ) : (
        <Online
          loggedIn={loggedIn}
        />
      )}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationRouter);
