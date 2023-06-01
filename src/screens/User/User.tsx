import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { AppState } from "../../store/rootReducer";
import { MoleculeInput } from "../../components/molecules/Input";
import {
  ContainerBody,
  ContainerButton,
  ContainerLinks,
  ContainerSelect,
  ContainerSubHeader,
  FormLinks,
} from "./styles";
import { AtomCardContainer } from "../../components/atoms/CardContainer";
import { MoleculeHeader } from "../../components/molecules/Header";
import { AtomButtonDefault } from "../../components/atoms/Buttons/Default";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { getItem, getItemObject, setItemObject } from "../../helpers/storage";
import { ISetupState } from "../../store/setup/ducks";
import { logoutStart } from "../Login/ducks/logout";
import { MoleculeProfilePicture } from "../../components/molecules/ProfilePicture";
import ImageProfile from "../../assets/images/foto.jpg";
import { AtomButtonIcon } from "../../components/atoms/Buttons/Icon";
import { AtomHeadline } from "../../components/atoms/Typography/Headline";
import GooglePlacesAutocomplete, {geocodeByPlaceId} from "react-google-places-autocomplete";
import GoogleMap from "google-maps-react-markers";
import { AtomBody } from "../../components/atoms/Typography/Body";

export type UserFormFields = {
  email: string;
  name: string;
};

interface IProps {
  setup: ISetupState;
  logoutStart: () => void;
}

const mapStateToProps = (state: AppState) => ({
  setup: state.setup,
});

const mapDispatchToProps = {
  logoutStart,
};

const User: FunctionComponent<IProps> = ({ setup, logoutStart }: IProps) => {
  const { screen } = setup;
  const { profile } = screen;
  const [user, setUser] = useState({ name: "", email: "" });
  const [value, setValue] = useState(null);
  const sizeWindow = useWindowWidth();
  const navigate = useNavigate();
  const mapRef = useRef<any>(null);
  const [mapReady, setMapReady] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormFields>({
    defaultValues: async () => ({
      name: (await getItem("name")) ?? "",
      email: (await getItem("email")) ?? "",
    }),
  });

  const handleButtonMenu = () => {
    logoutStart();
    navigate("/");
  };

  const handleOnChange = (value: any, x: any) => {
    setValue(value);
    geocodeByPlaceId(value.value.place_id)
      .then((results) => {
        const lat = results[0].geometry.location.lat()
        const lng = results[0].geometry.location.lng()
        mapRef.current?.setCenter({ lat, lng });
      })
      .catch((error) => console.error(error));
  };

  const onSubmit = handleSubmit((data) => {
    setItemObject('location', value)
  });

  /**
   * @description This function is called when the map is ready
   * @param {Object} map - reference to the map instance
   * @param {Object} maps - reference to the maps library
   */
  const onGoogleApiLoaded = ({ map, maps }: any) => {
    mapRef.current = map;
    setMapReady(true);
  };


  useEffect(() => {
    const getUser = async () => {
      const name = (await getItem("name")) || "";
      const email = (await getItem("email")) || "";
      const location = (await getItemObject("location")) || "";
      setUser({ name: name, email: email });
      setValue(location)

      if(location){
        geocodeByPlaceId(location.value.place_id)
      .then((results) => {
        const lat = results[0].geometry.location.lat()
        const lng = results[0].geometry.location.lng()
        mapRef.current?.setCenter({ lat, lng });
      })
      .catch((error) => console.error(error));
      }
    };
    getUser();
  }, []);

  return (
    <ContainerLinks height={sizeWindow.height + "px"}>
      <AtomCardContainer
        height={"100%"}
        width={sizeWindow.width < 406 ? "calc(100% - 72px)" : "500px"}
        shadowSize={sizeWindow.width < 406 ? "noshadow" : "large"}
        padding="36px"
        justifyContent="space-around"
      >
        <MoleculeHeader
          text={screen.buttonsNav}
          path="users"
          isLogin={true}
          onClick={() => handleButtonMenu()}
        />
        <ContainerSubHeader>
          <AtomButtonIcon
            color="primary"
            icon="back"
            text=""
            type="button"
            onClick={() => navigate(-1)}
            size="medium"
          />
          <AtomHeadline
            size="medium"
            text={profile.title}
            styles={{ flex: 1, marginLeft: "-35px" }}
            align="center"
          />
        </ContainerSubHeader>
        <ContainerBody direction={"column"}>
          <MoleculeProfilePicture
            imgAlt="profile"
            text={user.name}
            imgSrc={ImageProfile}
            size="70px"
          />
          <FormLinks onSubmit={onSubmit}>
            <MoleculeInput<UserFormFields>
              id="name"
              type="text"
              name="name"
              label={profile.labelEmail}
              placeholder={""}
              className="mb-2"
              register={register}
              rules={{ required: profile.errorInputEmail }}
              errors={errors}
            />

            <MoleculeInput<UserFormFields>
              id="email"
              type="text"
              name="email"
              label={profile.labelName}
              placeholder={""}
              className="mb-2"
              register={register}
              rules={{ required: profile.errorInputName }}
              errors={errors}
            />
            <AtomBody
              size="medium"
              text={profile.labelLocation}
              weight="500"
              align="left"
              color="neutral700"
            />
            <ContainerSelect>
              <GooglePlacesAutocomplete
                apiKey="AIzaSyBqo9VDR_PjR-skuZzoGShni7syXwMtixs"
                selectProps={{
                  value,
                  onChange: handleOnChange as any,
                }}
              />
            </ContainerSelect>

            {value && (
              <GoogleMap
                apiKey="AIzaSyBqo9VDR_PjR-skuZzoGShni7syXwMtixs"
                defaultCenter={{ lat: 45.4046987, lng: 12.2472504 }}
                defaultZoom={12}
                mapMinHeight="30vh"
                onGoogleApiLoaded={onGoogleApiLoaded}
              >
              </GoogleMap>
            )}
            <ContainerButton>
              <AtomButtonDefault
                color="primary"
                type="submit"
                text={profile.btn}
                size="large"
                width="100%"
              />
            </ContainerButton>
          </FormLinks>
        </ContainerBody>
      </AtomCardContainer>
    </ContainerLinks>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
