import React, {
  Fragment,
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
  useMemo,
} from "react";
import Loading from "../components/atoms/Loading";
import { Routes, useLocation, Route } from "react-router-dom";
import { getItem, setItem } from "../helpers/storage";
import { connect } from "react-redux";
import { ContainerNav } from "./styles";
import { AppState } from "../store/rootReducer";
import { IPath } from "./ducks/ducks";
import Login from "../screens/Login/Login";
import User from "../screens/User/User";
import Signup from "../screens/Signup/Signup";
import { Navigate, useNavigate } from "react-router";

interface IProps {
  pathActualSate: IPath;
}

const mapDispatchToProps = {
};

const mapStateToProps = (state: AppState) => ({
  pathActualSate: state.pathActual,
});

const Online = ({ loggedIn }: { loggedIn: boolean }) => {
  return (
    <>
      <Fragment>
        <ContainerNav>
          {/* {<SideNavBar />} */}
          <div>
            <div className="scrollWidth">
              <Routes>
                <Route path="/" element=
                  {loggedIn ? <User /> : <Login />}>
                </Route>
                <Route path="/signup" element={!loggedIn ? <Signup /> :  <Navigate to="/user"/>}></Route>
                <Route path="/login" element={!loggedIn ? <Login /> : <Navigate to="/user"/>}></Route>
                <Route path="/user"element={loggedIn ? <User /> : <Navigate to="/login"/>}></Route>
                <Route path='*' element={<Navigate to='/' />} />
              </Routes>
            </div>
          </div>
        </ContainerNav>
      </Fragment>
    </>
  );
};


const NavigationRouter: FunctionComponent<IProps> = ({
  pathActualSate,
}: IProps) => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const history = useNavigate();
  const location = useLocation();
  const localPath = useMemo(() => location.pathname, [location]);


  useEffect(() => {
    const startAuth = async () => {
      const idToken = (await getItem("token")) || "";
      if (idToken) {
        setLoggedIn(true);
      } else{
        setLoggedIn(false);
      }
    };
    startAuth();
  }, [localPath]);
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
