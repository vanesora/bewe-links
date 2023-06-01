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
import { ILinks, ILinksDuck, getLinksStart, createLinksStart, deleteLinksStart } from "./ducks/links";

export type LinksFormFields = {
  url: string;
  name: string;
};

interface IProps {
  setup: ISetupState;
  logout: ILogoutStateDuck;
  linksState: ILinksDuck;
  logoutStart: () => void;
  getLinksStart: () => void;
  createLinksStart: (payload: {name: string, url: string, actualList: ILinks[]}) => void;
  deleteLinksStart: (payload: {id: string, actualList: ILinks[]}) => void
}

const mapStateToProps = (state: AppState) => ({
  setup: state.setup,
  logout: state.logout,
  linksState: state.links
});

const mapDispatchToProps = {
  logoutStart,
  getLinksStart,
  createLinksStart,
  deleteLinksStart
};

const Links: FunctionComponent<IProps> = ({
  setup,
  logoutStart,
  linksState,
  getLinksStart,
  createLinksStart,
  deleteLinksStart
}: IProps) => {
  const { screen } = setup;
  const { links } = screen;
  const [user, setUser] = useState({ name: "", email: "" });
  const [listUrls, setListUrls] = useState<ILinks[]>([]);
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
    const payload ={
      id,
      actualList: [...linksState.links]
    }
    deleteLinksStart(payload)
  };

  const onSubmit = handleSubmit((data) => {
    const payload ={
      name: data.name,
      url: data.url,
      actualList: [...linksState.links]
    }
    createLinksStart(payload)    
  });

  useEffect(() => {
    const getUser = async () => {
      const name = (await getItem("name")) || "";
      const email = (await getItem("email")) || "";
      setUser({ name: name, email: email });
    };
    getUser();
  }, []);

  useEffect(() => {
    getLinksStart();
  }, []);

  useEffect(() => {
    if(linksState.success){
      console.log(linksState);
      
      setListUrls(linksState.links)      
    }
  }, [linksState]);

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
            {listUrls.length>0 && listUrls.map((urls: ILinks) => {
              return <MoleculeDescription url={urls.url} text={urls.name} id={urls.id?? '1'} onClick={(id)=>handleButtonDelete(id)} />;
            })}
          </ContainerCards>
        </ContainerBody>
      </AtomCardContainer>
    </ContainerLinks>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Links);
