import { ISetup } from "../interfaces/global";

export const esSetup: ISetup = {
  currentTheme: "Es",
  dateFormat: {
    day: "DD",
    month: "MM",
    year: "YYYY",
  },
  screen: {
    login: {
      pageTitle: "Login",
      labelEmail: "Your Email",
      labelPassword: "Password",
      placeholderEmail: "Enter a valid email",
      placeholderPassword: "Enter your password",
      btnSignin: "Login",
      errorMessageDefault:
        "There is an error trying to log in, please try again or contact technical support.",
      errorInputEmail: "You must enter your email.",
      errorInputPassword: "You must enter your password.",
    },
    signup: {
      pageTitle: "Signup",
      labelEmail: "Your Email",
      labelName: "Full Name",
      labelPassword: "Password",
      placeholderName: "Enter your full name",
      placeholderEmail: "Enter a valid email",
      placeholderPassword: "Enter your password",
      btnSignin: "Login",
      errorMessageDefault:
        "There is an error trying to log in, please try again or contact technical support.",
      errorInputEmail: "You must enter your email.",
      errorInputName: "You must enter your name.",
      errorInputPassword: "You must enter your password.",
      text1: "By Creating account You agree to the",
      terms: "Terms ud Use",
      text2: "and",
      privacy: "Privacy Policy.",
    },
    profile: {
      title: "Profile",
      labelEmail: "Email",
      labelName: "Name",
      labelLocation: "Location",
      errorInputEmail: "You must enter the url.",
      errorInputLocation: "You must enter the location.",
      errorInputName: "You must enter the name.",
      btn: "SAVE"
    },
    links: {
      labelUrl: "Url to save",
      labelName: "Url to save",
      errorInputUrl: "You must enter the url.",
      errorInputName: "You must enter the name.",
      btn: "ADD"
    },
    buttonsNav: {
      logout: "LOGOUT",
      login: "LOGIN",
      signup: "SIGNUP",
    },
  },
  theme: {
    primary: "#20BBEC",
    primary100: "#56CFF5",
    primary300: "#1499C4",
    primary400: "#046786",
    primary500: "#0C4B5F",
    secondary: "#FF4141",
    secondary100: "#FF9AA2",
    secondary300: "#E22525",
    secondary400: "#B90101",
    secondary500: "#A90202",
    neutral100: "#FFFFFF",
    neutral200: "#F3F8FA",
    neutral300: "#E7EFF2",
    neutral400: "#BDCCD1",
    neutral500: "#91A8B1",
    neutral600: "#607781",
    neutral700: "#132730",
    transparent: "transparent",
  },
};
