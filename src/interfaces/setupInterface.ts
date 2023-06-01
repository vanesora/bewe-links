export interface IScreen {
  login: ILogIn;
  signup: ISignup;
  buttonsNav: IButtonsNav;
  links: ILinks;
  profile: IProfile;
}

export interface ILogIn {
  pageTitle: string;
  labelEmail: string;
  labelPassword: string;
  placeholderEmail: string;
  placeholderPassword: string;
  btnSignin: string;
  errorMessageDefault: string;
  errorInputEmail: string;
  errorInputPassword: string;
}

export interface ISignup {
  pageTitle: string;
  labelEmail: string;
  labelName: string;
  labelPassword: string;
  placeholderEmail: string;
  placeholderName: string;
  placeholderPassword: string;
  btnSignin: string;
  errorMessageDefault: string;
  errorInputEmail: string;
  errorInputName: string;
  errorInputPassword: string;
  text1: string;
  terms: string;
  text2: string;
  privacy: string;
}

export interface IButtonsNav {
  logout: string;
  login: string;
  signup: string;
}
export interface ILinks {
  labelUrl: string;
  labelName: string;
  errorInputUrl: string;
  errorInputName: string;
  btn: string;
}

export interface IProfile {
  title: string;
  labelEmail: string;
  labelName: string;
  labelLocation: string;
  errorInputEmail: string;
  errorInputLocation: string;
  errorInputName: string;
  btn: string;
}

export interface ITheme {
  primary: string;
  primary100: string;
  primary300: string;
  primary400: string;
  primary500: string;
  secondary: string;
  secondary100: string;
  secondary300: string;
  secondary400: string;
  secondary500: string;
  neutral100: string;
  neutral200: string;
  neutral300: string;
  neutral400: string;
  neutral500: string;
  neutral600: string;
  neutral700: string;
  transparent: string;
}

export interface IDateFormat {
  day: string;
  month: string;
  year: string;
}

export interface IScreenContent {
  [key: string]: string;
}

export interface IPublic {
  pageTitle: string;
}
