import React, { FunctionComponent, useState, useEffect } from "react";
import { connect } from "react-redux";
import { AppState } from "../../store/rootReducer";
import { AtomButtonDefault } from "../../components/atoms/Buttons/Default";
import { MoleculeInput } from "../../components/molecules/Input";
import { AtomCardContainer } from "../../components/atoms/CardContainer";
import { MoleculeHeader } from "../../components/molecules/Header";
import { ISetupState } from "../../store/setup/ducks";
import {
  ContainerBody,
  ContainerButton,
  ContainerSignUp,
  ContainerLogo,
  FormSignUp,
  ContainerTerms,
} from "./styles";
import { AtomLogo } from "../../components/atoms/Logo";
import { AtomHeadline } from "../../components/atoms/Typography/Headline";
import { AtomBody } from "../../components/atoms/Typography/Body";
import { useForm } from "react-hook-form";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { useNavigate } from "react-router";
import { ISignupData, ISignupStateDuck, signupStart } from "./ducks/signup";

export type SignupFormFields = {
  email: string;
  password: string;
  name: string;
};

export const emailPattern = {
  value: new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$", "ig"),
  message: "Enter a valid email address.",
};

interface IProps {
  setup: ISetupState;
  signupState: ISignupStateDuck;
  signupStart: (payload: ISignupData) => void;
}

const mapStateToProps = (state: AppState) => ({
  setup: state.setup,
  signupState: state.signup,
});

const mapDispatchToProps = {
  signupStart,
};

const Signup: FunctionComponent<IProps> = ({
  setup,
  signupState,
  signupStart,
}) => {
  const { screen } = setup;
  const { signup } = screen;
  const sizeWindow = useWindowWidth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormFields>();

  const onSubmit = handleSubmit((data) => {
    signupStart({
      email: data.email,
      password: data.password,
      name: data.name,
    });
    setError("");
  });

  const handleButtonMenu = () => {
    navigate("/login");
  };

  useEffect(() => {
    if (signupState.errorMessage?.length === 0) return;
    setError(signupState.errorMessage ? signupState.errorMessage : "Error");
  }, [signupState.errorMessage, signupState.errorCode]);

  return (
    <ContainerSignUp height={sizeWindow.height+'px'}>
      <AtomCardContainer
        height={"100%"}
        width={sizeWindow.width < 406 ? "calc(100% - 72px)" : "400px"}
        shadowSize={sizeWindow.width < 406 ? "noshadow" : "large"}
        padding="36px"        
        justifyContent="space-around"
      >
        <MoleculeHeader
          text={screen.buttonsNav}
          path="signup"
          isLogin={false}
          onClick={() => handleButtonMenu()}
        />
        <ContainerBody>
          <ContainerLogo>
            <AtomLogo size="large" text="centered" />
          </ContainerLogo>
          <AtomHeadline size="medium" text={signup.pageTitle} align="left" />
          <FormSignUp onSubmit={onSubmit}>
            <MoleculeInput<SignupFormFields>
              id="name"
              type="text"
              name="name"
              label={signup.labelName}
              placeholder={signup.placeholderName}
              className="mb-2"
              register={register}
              rules={{ required: signup.errorInputName }}
              errors={errors}
            />

            <MoleculeInput<SignupFormFields>
              id="email"
              type="text"
              name="email"
              label={signup.labelEmail}
              placeholder={signup.placeholderEmail}
              className="mb-2"
              register={register}
              rules={{
                required: signup.errorInputEmail,
                pattern: emailPattern,
              }}
              errors={errors}
            />

            <MoleculeInput<SignupFormFields>
              id="password"
              type="password"
              name="password"
              label={signup.labelPassword}
              placeholder={signup.placeholderPassword}
              className="mb-2"
              register={register}
              rules={{ required: signup.errorInputPassword }}
              errors={errors}
            />
            {error && (
              <AtomBody size="medium" text={error} color="secondary300" />
            )}
            <ContainerButton>
              <AtomButtonDefault
                color="primary"
                type="submit"
                text={signup.btnSignin}
                size="large"
                width="100%"
              />
            </ContainerButton>
          </FormSignUp>
          <ContainerTerms>
            <AtomBody size="medium" text={signup.text1} color="neutral700" weight="600" />
            <AtomBody size="medium" text={signup.terms} color="primary" weight="600"/>
            <AtomBody size="medium" text={signup.text2} color="neutral700" weight="600"/>
            <AtomBody size="medium" text={signup.privacy} color="primary" weight="600"/>
          </ContainerTerms>
        </ContainerBody>
      </AtomCardContainer>
    </ContainerSignUp>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
