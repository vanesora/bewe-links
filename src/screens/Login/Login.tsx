import React, { FunctionComponent, useEffect, useState } from "react";

import { AppState } from "../../store/rootReducer";
import { connect } from "react-redux";
import { AtomLogo } from "../../components/atoms/Logo";
import { useForm } from "react-hook-form";
import { MoleculeInput } from "../../components/molecules/Input";
import { AtomButtonDefault } from "../../components/atoms/Buttons/Default";
import { ISetupState } from "../../store/setup/ducks";
import {
  ContainerBody,
  ContainerButton,
  ContainerLogin,
  ContainerLogo,
  FormLogin,
} from "./styles";
import { AtomHeadline } from "../../components/atoms/Typography/Headline";
import { AtomCardContainer } from "../../components/atoms/CardContainer";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { MoleculeHeader } from "../../components/molecules/Header";
import { ILoggedIn } from "../../navigation/ducks/ducks";
import { useNavigate } from "react-router-dom";
import { ILoginData, ILoginState, loginStart } from "./ducks/login";
import { AtomBody } from "../../components/atoms/Typography/Body";

export type LoginFormFields = {
  email: string;
  password: string;
  loginStart: (payload: ILoginData) => void;
};

interface IProps {
  setup: ISetupState;
  loginState: ILoginState;
  loginStart: (payload: ILoginData) => void;
}

const mapStateToProps = (state: AppState) => ({
  setup: state.setup,
  loginState: state.login,
});

const mapDispatchToProps = {
  loginStart
};

const Login: FunctionComponent<IProps> = ({ setup, loginState, loginStart }) => {
  const { screen } = setup;
  const { login } = screen;
  const sizeWindow = useWindowWidth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormFields>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    loginStart({email:data.email, password: data.password});
    setError('')
  });

  const handleButtonMenu = () => {
    navigate('/signup');
  };

  useEffect(() => {
    if (loginState.errorMessage?.length === 0) return;
    setError(loginState.errorMessage
      ? loginState.errorMessage
      : 'Error')
  }, [loginState.errorMessage, loginState.errorCode]);


  return (
    <ContainerLogin>
      <AtomCardContainer
        height={sizeWindow.width < 406 ? "80%" : "100%"}
        width={sizeWindow.width < 406 ? "calc(100% - 72px)" : "400px"}
        shadowSize={sizeWindow.width < 406 ? "noshadow" : "large"}
        padding="36px"
        margin="10px 0"
        justifyContent="space-around"
      >
        <MoleculeHeader
          text={screen.buttonsNav}
          path="login"
          isLogin={false}
          onClick={() => handleButtonMenu()}
        />
        <ContainerBody>
          <ContainerLogo>
            <AtomLogo size="large" text="centered" />
          </ContainerLogo>
          <AtomHeadline size="medium" text={login.pageTitle} align="left" />
          <FormLogin onSubmit={onSubmit}>
            <MoleculeInput<LoginFormFields>
              id="email"
              type="text"
              name="email"
              label={login.labelEmail}
              placeholder={login.placeholderEmail}
              className="mb-2"
              register={register}
              rules={{ required: login.errorInputEmail }}
              errors={errors}
            />

            <MoleculeInput<LoginFormFields>
              id="password"
              type="text"
              name="password"
              label={login.labelPassword}
              placeholder={login.placeholderPassword}
              className="mb-2"
              register={register}
              rules={{ required: login.errorInputPassword }}
              errors={errors}
            />
            {error && <AtomBody size="medium" text={error} color="secondary300" />}
            <ContainerButton>
              <AtomButtonDefault
                color="primary"
                type="submit"
                text={login.btnSignin}
                size="large"
                width="100%"
              />
            </ContainerButton>
          </FormLogin>
        </ContainerBody>
      </AtomCardContainer>
    </ContainerLogin>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
