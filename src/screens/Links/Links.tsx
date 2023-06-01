import React, { FunctionComponent, useEffect, useState } from "react";
import { connect } from "react-redux";
import { AppState } from "../../store/rootReducer";
import {
  ContainerBody,
  ContainerButton,
  ContainerCards,
  ContainerLinks,
  FormLinks,
} from "./styles";
import { AtomCardContainer } from "../../components/atoms/CardContainer";
import { MoleculeHeader } from "../../components/molecules/Header";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { useNavigate } from "react-router";
import { ILogoutStateDuck, logoutStart } from "../Login/ducks/logout";
import { ISetupState } from "../../store/setup/ducks";
import { getItem } from "../../helpers/storage";
import { AtomButtonDefault } from "../../components/atoms/Buttons/Default";
import { MoleculeInput } from "../../components/molecules/Input";
import { useForm } from "react-hook-form";
import { MoleculeProfileEdition } from "../../components/molecules/ProfileEdition";
import ImageProfile from "../../assets/images/foto.jpg";
import { MoleculeDescription } from "../../components/molecules/Description";

export type LinksFormFields = {
  url: string;
  name: string;
};

interface IProps {
  setup: ISetupState;
  logout: ILogoutStateDuck;
  logoutStart: () => void;
}

const mapStateToProps = (state: AppState) => ({
  setup: state.setup,
  logout: state.logout,
});

const mapDispatchToProps = {
  logoutStart,
};

const Links: FunctionComponent<IProps> = ({
  setup,
  logout,
  logoutStart,
}: IProps) => {
  const { screen } = setup;
  const { links } = screen;
  const [user, setUser] = useState({ name: "", email: "" });
  const [listUrls, setListUrls] = useState([
    {
      url: "www.url.com",
      name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      id: "1",
    },
    {
      url: "www.url.com",
      name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      id: "2",
    },
    {
      url: "www.url.com",
      name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      id: "3",
    },
    {
      url: "www.url.com",
      name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      id: "4",
    },
    {
      url: "www.url.com",
      name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      id: "5",
    },
    {
      url: "www.url.com",
      name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      id: "6",
    },
    {
      url: "www.url.com",
      name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      id: "7",
    },
    {
      url: "www.url.com",
      name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      id: "8",
    },
    {
      url: "www.url.com",
      name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      id: "9",
    },
  ]);
  const sizeWindow = useWindowWidth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LinksFormFields>();

  const handleButtonMenu = () => {
    logoutStart();
    navigate("/");
  };

  const handleButtonDelete = (id: string) => {
    console.log('delete: ', id);
    
  };

  const onSubmit = handleSubmit((data) => {});

  useEffect(() => {
    const getUser = async () => {
      const name = (await getItem("name")) || "";
      const email = (await getItem("email")) || "";
      setUser({ name: name, email: email });
    };
    getUser();
  }, []);

  return (
    <ContainerLinks height={sizeWindow.height + "px"}>
      <AtomCardContainer
        height={"100%"}
        width={sizeWindow.width < 406 ? "calc(100% - 72px)" : "70%"}
        shadowSize={sizeWindow.width < 406 ? "noshadow" : "large"}
        padding="36px"
        justifyContent="space-around"
      >
        <MoleculeHeader
          text={screen.buttonsNav}
          path="links"
          isLogin={true}
          onClick={() => handleButtonMenu()}
        />
        <ContainerBody direction={sizeWindow.width < 1050 ? "column" : "row"}>
          <ContainerCards>
            <MoleculeProfileEdition
              email={user.email}
              name={user.name}
              imgSrc={ImageProfile}
            />
            <FormLinks onSubmit={onSubmit}>
              <MoleculeInput<LinksFormFields>
                id="email"
                type="text"
                name="url"
                label={links.labelUrl}
                placeholder={""}
                className="mb-2"
                register={register}
                rules={{ required: links.errorInputUrl }}
                errors={errors}
              />

              <MoleculeInput<LinksFormFields>
                id="name"
                type="text"
                name="name"
                label={links.labelName}
                placeholder={""}
                className="mb-2"
                register={register}
                rules={{ required: links.errorInputName }}
                errors={errors}
              />
              <ContainerButton>
                <AtomButtonDefault
                  color="primary"
                  type="submit"
                  text={links.btn}
                  size="large"
                  width="100%"
                />
              </ContainerButton>
            </FormLinks>
          </ContainerCards>
          <ContainerCards>
            {listUrls.map((urls) => {
              return <MoleculeDescription key={urls.id} url={urls.url} text={urls.name} id={urls.id} onClick={(id)=>handleButtonDelete(id)} />;
            })}
          </ContainerCards>
        </ContainerBody>
      </AtomCardContainer>
    </ContainerLinks>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Links);
