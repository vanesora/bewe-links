import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import 'helpers/storageTest';
import { Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { enSetup } from '../../data/dataEn';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import { Store, AnyAction } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Signup from '../Signup/Signup';
import configureStore from '../../store/store';

// const history = createMemoryHistory();
const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);
let store: Store<any, AnyAction>;

const mockResponse = jest.fn();

Object.defineProperty(window, 'location', {
  value: {
    hash: {
      endsWith: mockResponse,
      includes: mockResponse
    },
    assign: mockResponse
  },
  writable: true,
});

const legalLinksData = {
  legal: {
    terms: 'https://www.mycooler.com/en/terms-conditions.html',
    policy: 'https://www.mycooler.com/en/privacy-policy.html'
  },
};

const ageGateData = {
  "errorMessage": "",
  "errorCode": "",
  "message": "",
  "pending": false,
  "success": true,
  "ageValues": {
    "ageGateMin": 25,
    "ageGateMax": 125
  },
  "termsAndConditions": "https://www.mycooler.com/en/terms-conditions.html",
  "privacyPolicy": "https://www.mycooler.com/en/privacy-policy.html",
  "redirectAgeValidation": "https://www.familytalkaboutdrinking.com/"
};

const useSchemaData = [
  {
    "field_type": "text",
    "field_label": "First Name",
    "field_name": "firstName",
    "status": "Active",
    "basic": true,
    "field_required": true,
    "field_regex": "",
    "regex_description": "Must be a string without numbers and special characters",
    "field_min_length": 1,
    "field_max_length": 100,
    "position_H": 1,
    "position_V": 1,
    "place_holder": "First Name"
  },
  {
    "field_type": "text",
    "field_label": "Last Name",
    "field_name": "lastName",
    "status": "Active",
    "basic": true,
    "field_required": true,
    "field_regex": "",
    "regex_description": "Must be a string without numbers and special characters",
    "field_min_length": 1,
    "field_max_length": 100,
    "position_H": 1,
    "position_V": 2,
    "place_holder": "Last Name"
  },
  {
    "field_type": "select",
    "field_label": "Gender",
    "field_name": "gender",
    "status": "Active",
    "basic": true,
    "field_required": true,
    "regex_description": "",
    "field_items": [
      {
        "value": "Male",
        "order": 1
      },
      {
        "value": "Female",
        "order": 2
      },
      {
        "value": "Non-Binary",
        "order": 3
      }
    ],
    "position_H": 1,
    "position_V": 4
  },
  {
    "field_type": "text",
    "field_label": "Email",
    "field_name": "email",
    "status": "Active",
    "basic": true,
    "field_required": true,
    "field_regex": "",
    "regex_description": "",
    "position_H": 1,
    "position_V": 5,
    "place_holder": "user1@domain.com"
  },
  {
    "field_type": "password",
    "field_label": "Password",
    "field_name": "password",
    "status": "Active",
    "basic": true,
    "field_required": true,
    "field_regex": "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9d]{8,}$",
    "regex_description": "Must contain at least eight characters, at least one number and both lower and uppercase letters",
    "field_min_length": 1,
    "field_max_length": 100,
    "position_H": 1,
    "position_V": 6
  },
  {
    "field_type": "password",
    "field_label": "Confirm Password",
    "field_name": "confirmPassword",
    "status": "Active",
    "basic": true,
    "field_required": true,
    "field_regex": "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9d]{7,}$",
    "regex_description": "",
    "field_min_length": 1,
    "field_max_length": 100,
    "position_H": 1,
    "position_V": 7
  },
  {
    "field_type": "phone",
    "field_label": "Phone",
    "field_name": "phoneNumber",
    "status": "Active",
    "basic": true,
    "field_required": true,
    "field_regex": "",
    "regex_description": "",
    "field_min_length": 11,
    "field_max_length": 100,
    "position_H": 1,
    "position_V": 8
  },
  {
    "field_type": "text",
    "field_label": "Zip Code",
    "field_name": "zipcode",
    "status": "Active",
    "basic": true,
    "field_required": true,
    "field_regex": "^\\d{5}$|(^\\d{5}-\\d{4}$)",
    "regex_description": "\"Please enter a valid zip code\".",
    "field_min_length": 1,
    "field_max_length": 100,
    "position_H": 1,
    "position_V": 9,
    "place_holder": "33011"
  },
  {
    "field_type": "checkbox",
    "field_label": "By submitting this form, you agree to receive recurring automated promotional and personalized marketing text and email messages from MyCooler and its affiliates at the cell number and email used when signing up. Consent is not a condition of any purchase. Reply HELP for help and STOP to cancel. Msg frequency varies. Msg and data rates may apply.",
    "field_name": "advertisement",
    "status": "Active",
    "basic": true,
    "field_required": false,
    "regex_description": "",
    "position_H": 1,
    "position_V": 10,
    "field_type_name": "",
    "subplatform": "",
    "url": ""
  },
  {
    "field_type": "checkbox",
    "field_label": " I have read and I agree to the MyCooler  <u>Terms of Use</u>  and  <u>Privacy Policy</u> , which describe how the information I provide may be used. ",
    "field_name": "termsAndConditionsRewardsUSA",
    "status": "Active",
    "basic": true,
    "field_required": true,
    "regex_description": "",
    "position_H": 1,
    "position_V": 11,
    "field_type_name": "termsAndConditions",
    "subplatform": "MyCooler",
    "platform": "Rewards_USA",
    "url": "https://www.mycooler.com/en/terms-conditions.html"
  },]

const ssoIdentityPorvidersData = {
	"statusCode": 200,
	"apiCode": 100,
	"status": "success",
	"message": "Identity providers successfully retrieved",
	"data": [
		{
			"id": "6356b49795517f1fa6780fa0",
			"name": "Google",
			"url": "https://dp-sso-pool-north-america-preprod.auth.us-east-1.amazoncognito.com/authorize?identity_provider=Google&client_id=41ps2nke9l64r4piffc0q0m2pm8&response_type=token&scope=email+openid+profile+aws.cognito.signin.user.admin&redirect_uri=https://testing-sso-social-media-login.web.app",
			"image": "https://rewards-images-bucket-us-qa.s3.amazonaws.com/social-media/google-icon.svg"
		}
	]
}

const featureFlagData = {
	"status": "success",
	"statusCode": 200,
	"message": "Query with data",
	"data": [
    {
      "_id": "637eddf3119ed80009714278",
      "id_feature": "social_media_login",
      "platform": "Rewards_USA",
      "type_component": "app",
      "program": "MyCooler",
      "status": true,
      "create_user": "backofficeuser",
      "timestamp_create": 1669258738595,
      "valid_zipcodes": [
        {
          "initial": "00100",
          "final": "00100"
        }
      ],
      "basic": true,
      "create_date": "23/11/2022, 20:58:58",
      "valid_zipcode": true
    }
  ],
  "apicode": 100
}

const schemaValidationData = {
  userSchema: useSchemaData,
  errorMessage: '',
  errorCode: '',
  message: '',
  pending: false,
  success: true,
};

const emptySchemaValidationData = {
  userSchema: [] as any[],
  errorMessage: '',
  errorCode: '',
  message: '',
  pending: false,
  success: false,
}

const reenrollmentData = {
  historical: false,
  errorMessage: '',
  errorCode: '',
  message: '',
  pending: false,
  success: false,
};

const campaignData = {
  errorMessage: '',
  pending: false,
  success: false,
  campaign: [] as any[]
};

const signupData = {
  errorMessage: '',
  errorCode: '',
  message: '',
  pending: false,
  success: false,
}

const storeMocked = {
  setup: enSetup,
  config: featureFlagData,
  legalLinks: legalLinksData,
  ageGate: ageGateData,
  schemaValidation: schemaValidationData,
  signup: signupData,
  reenrollment: reenrollmentData,
  campaign: campaignData,
  ssoIdentityProviders: ssoIdentityPorvidersData,
}

const mockSelectField = {
  "field_type": "select",
  "field_label": "Gender",
  "field_name": "gender",
  "status": "Active",
  "basic": true,
  "field_required": true,
  "regex_description": "",
  "field_items":
  {
    "value": "Male",
    "order": 1
  },
  "position_H": 1,
  "position_V": 4
}

// const createComponent = (_store: any = store, _history: any = history) => {
//   return (
//     <Provider store={_store}>
//       <Router history={_history}>
//         <Signup />
//       </Router>
//     </Provider>
//   )
// }

describe('Signup Screen', () => {

  beforeEach(() => {
    // store = mockStore(storeMocked);
  })

  test('verify if render signup is not null', async () => {
    // await act(async () => {

    //   const signup = render(createComponent());

    //   expect(signup).not.toBeNull();
    // });
  });


  test('verify submit function', async () => {

    // await act(async () => {
    //   const signup = render(createComponent());

    //   await act(async () => {
    //     signup.rerender(createComponent());
    //   });

    //   const button = signup.container.querySelector('button') as HTMLButtonElement;
    //   fireEvent.click(button);
    //   expect(signup).not.toBeNull();
    // });
  });

  test('verify submit function, birthdate empty, phoneNumber empty', async () => {

    // store = mockStore({
    //   ...storeMocked,
    //   schemaValidation: {
    //     userSchema: [
    //       {
    //         "field_type": "phone",
    //         "field_label": "Phone",
    //         "field_name": "phoneNumber",
    //         "status": "Active",
    //         "basic": true,
    //         "field_required": true,
    //         "field_regex": "",
    //         "regex_description": "",
    //         "field_min_length": 11,
    //         "field_max_length": 100,
    //         "position_H": 1,
    //         "position_V": 8
    //       },],
    //     errorMessage: '',
    //     errorCode: '',
    //     message: '',
    //     pending: false,
    //     success: true,
    //   },
    // });

    // await act(async () => {
    //   const signup = render(createComponent(store));

    //   await act(async () => {
    //     signup.rerender(createComponent(store));
    //   });

    //   const button = signup.getByText(enSetup.screen.signup.btnCreateAccount);
    //   fireEvent.click(button);

    //   expect(signup).not.toBeNull();
    // });
  });

  test('verify submit function, Zipcode', async () => {

    // store = mockStore({
    //   ...storeMocked,
    //   schemaValidation: {
    //     ...schemaValidationData,
    //     userSchema: [
    //       {
    //         "field_type": "text",
    //         "field_label": "Zip Code",
    //         "field_name": "zipcode",
    //         "status": "Active",
    //         "basic": true,
    //         "field_required": true,
    //         "field_regex": "^\\d{5}$|(^\\d{5}-\\d{4}$)",
    //         "regex_description": "\"Please enter a valid zip code\".",
    //         "field_min_length": 1,
    //         "field_max_length": 100,
    //         "position_H": 1,
    //         "position_V": 9,
    //         "place_holder": "33011"
    //       },],
    //   },
    // });

    // await act(async () => {
    //   const signup = render(createComponent(store));

    //   await act(async () => {
    //     signup.rerender(createComponent(store));
    //   });

    //   const inputZipcode = signup.container.querySelector('[placeholder="33011"]');
    //   fireEvent.change(inputZipcode, { target: { value: '13360' } });

    //   const button = signup.getByText(enSetup.screen.signup.btnCreateAccount);
    //   fireEvent.click(button);

    //   expect(signup).not.toBeNull();
    // });
  });

  test('verify redirect to reenrollment-client', async () => {
    // await act(async () => {

    //   store = mockStore({
    //     ...storeMocked,
    //     schemaValidation: {
    //       ...schemaValidationData,
    //       userSchema: [
    //         {
    //           "field_type": "text",
    //           "field_label": "Zip Code",
    //           "field_name": "zipcode",
    //           "status": "Active",
    //           "basic": true,
    //           "field_required": true,
    //           "field_regex": "^\\d{5}$|(^\\d{5}-\\d{4}$)",
    //           "regex_description": "\"Please enter a valid zip code\".",
    //           "field_min_length": 1,
    //           "field_max_length": 100,
    //           "position_H": 1,
    //           "position_V": 9,
    //           "place_holder": "33011"
    //         },],
    //     },
    //     reenrollment: {
    //       ...reenrollmentData,
    //       success: true,
    //     },
    //   });

    //   const signup = render(createComponent(store));

    //   expect(signup).not.toBeNull();
    // });
  });

  test('verify signup error', async () => {

    // store = mockStore({
    //   ...storeMocked,
    //   schemaValidation: {
    //     ...schemaValidationData,
    //     userSchema: [
    //       {
    //         "field_type": "text",
    //         "field_label": "Email",
    //         "field_name": "email",
    //         "status": "Active",
    //         "basic": true,
    //         "field_required": true,
    //         "field_regex": "",
    //         "regex_description": "",
    //         "position_H": 1,
    //         "position_V": 5,
    //         "place_holder": "user1@domain.com"
    //       },],
    //   },
    //   signup: {
    //     ...signupData,
    //     errorMessage: 'Error',
    //   },
    // });

    // await act(async () => {
    //   const signup = render(createComponent(store));

    //   await act(async () => {
    //     signup.rerender(createComponent(store));
    //   });

    //   expect(signup).not.toBeNull();
    // });
  });

  test('verify signup pending true', async () => {

    // store = mockStore({
    //   ...storeMocked,
    //   schemaValidation: emptySchemaValidationData,
    //   signup: {
    //     ...signupData,
    //     pending: true,
    //   },
    // });

    // await act(async () => {
    //   const signup = render(createComponent(store));

    //   await act(async () => {
    //     signup.rerender(createComponent(store));
    //   });

    //   expect(signup).not.toBeNull();
    // });
  });

  test('verify signup true', async () => {

    // store = mockStore({
    //   ...storeMocked,
    //   schemaValidation: emptySchemaValidationData,
    //   signup: {
    //     ...signupData,
    //     success: true,
    //   },
    // });

    // await act(async () => {
    //   const signup = render(createComponent(store));

    //   await act(async () => {
    //     signup.rerender(createComponent(store));
    //   });

    //   expect(signup).not.toBeNull();
    // });
  });

  test('verify select with multiple options', async () => {

    // store = mockStore({
    //   ...storeMocked,
    //   schemaValidation: {
    //     ...schemaValidationData,
    //     userSchema: [{
    //       ...mockSelectField,
    //       "field_items": [
    //         {
    //           "value": "Male",
    //           "order": 1
    //         },
    //         {
    //           "value": "Female",
    //           "order": 2
    //         },
    //         {
    //           "value": "Non-Binary",
    //           "order": 3
    //         }
    //       ],
    //     },],
    //   },
    // });

    // await act(async () => {
    //   const signup = render(createComponent(store));

    //   await act(async () => {
    //     signup.rerender(createComponent(store));
    //   });

    //   expect(signup).not.toBeNull();
    // });
  });

  test('verify select with one option', async () => {

    // store = mockStore({
    //   ...storeMocked,
    //   schemaValidation: {
    //     ...schemaValidationData,
    //     userSchema: [mockSelectField],
    //   },
    // });

    // await act(async () => {
    //   const signup = render(createComponent(store));

    //   await act(async () => {
    //     signup.rerender(createComponent(store));
    //   });

    //   expect(signup).not.toBeNull();
    // });
  });

});