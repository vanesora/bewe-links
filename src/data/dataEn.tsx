import { ISetup } from "../interfaces/global";

export const enSetup: ISetup = {
  currentTheme: "EN",
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
      placeholderName : "Enter your full name",
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
      labelFirstName: "First name",
      labelLastName: "Last name",
      labelBirthdate: "Date of birth",
      labelGender: "Gender",
      labelEmail: "Email",
      labelPhone: "Phone",
      labelPhoneCode: "Country code",
      labelState: "State",
      labelZipCode: "Zip code",
      placeholderFirstName: "Beer",
      placeholderLastName: "Lover",
      placeholderBirthdate: "",
      placeholderGender: "",
      placeholderEmail: "",
      placeholderPhone: "",
      placeholderState: "",
      placeholderZipCode: "",
      btnSave: "Save",
      referral: {
        title: "Invite friends",
        description:
          "Refer friends and earn 250 points when they sign up with your code!",
        customLink: "Custom referral link",
        copyLink: "Copy Link",
      },
      update: {
        handleAction: "Update",
        modal: {
          button: "Ok",
          errorMessage: "Unable to update your profile, please try again!",
          successTitle: "Your profile is now updated!",
          successMessage:
            "Your profile information has been updated successfully.",
        },
      },
    },
    links: {
      pageTitle: "string",
    },
    buttonsNav: {
      logout: "LOGOUT",
      login: "LOGIN",
      signup: "SIGNUP",
    },
  },
  theme: {
    primary: "#007AFF",
    primary100: "#3690F3",
    primary300: "#026EE4",
    primary400: "#0463CB",
    primary500: "#05458C",
    secondary: "#FF4141",
    secondary100: "#FF9AA2",
    secondary300: "#E22525",
    secondary400: "#B90101",
    secondary500: "#A90202",
    neutral100: "#FFFFFF",
    neutral200: "#F3F8FA",
    neutral300: "#B7C0C9",
    neutral400: "#BDCCD1",
    neutral500: "#91A8B1",
    neutral600: "#607781",
    neutral700: "#132730",
    transparent: "transparent",
  },
};

export type keysTheme = keyof typeof enSetup.theme;
