export interface IScreen {
  login: ILogIn;
  signup: ISignup;
  buttonsNav: IButtonsNav;
  links: ILinks;
  profile: IProfile;
}

export interface ILogIn {
  pageTitle: string;
  title: string;
  labelInstruction: string;
  labelEmail: string;
  labelPassword: string;
  placeholderEmail: string;
  placeholderPassword: string;
  btnSignin: string;
  btnSignup: string;
  modalAccept: string;
  errorMessageDefault: string;
  btnChangePassword: string;
  labelOr: string;
  continueWith: string;
  tagginMsgResSubmit: string;
  tagginMsgResSuccess: string;
}

export interface ISignup {
  pageTitle: string;
  title: string;
  btnCreateAccount: string;
  btnCancel: string;
  modalAccept: string;
  alreadyMember: string;
  labelThereAreNoField: string;
  country: string;
  locale: string;
  code: string;
  socialLoginText: string;
  tagginMsgResSubmit: string;
  tagginMsgResSuccess: string;
}

export interface IButtonsNav {
  pageTitle: string;
}
export interface ILinks {
  pageTitle: string;
}

export interface IProfile {
  title: string;
  labelFirstName: string;
  labelLastName: string;
  labelBirthdate: string;
  labelGender: string;
  labelEmail: string;
  labelPhone: string;
  labelPhoneCode: string;
  labelState: string;
  labelZipCode: string;
  placeholderFirstName: string;
  placeholderLastName: string;
  placeholderBirthdate: string;
  placeholderGender: string;
  placeholderEmail: string;
  placeholderPhone: string;
  placeholderState: string;
  placeholderZipCode: string;
  btnSave: string;
  referral: {
    title: string;
    description: string;
    customLink: string;
    copyLink: string;
  };
  update: {
    handleAction: string;
    modal: {
      button: string;
      errorMessage: string;
      successTitle: string;
      successMessage: string;
    };
  };
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
