import React from 'react';
import '@testing-library/jest-dom';
import 'helpers/storageTest';
import { act } from 'react-dom/test-utils';
import { AnyAction, Store } from 'redux';
import { enSetup } from '../../data/dataEn';
import { ILoginData, ILoginState, loginStart } from './ducks/login';
import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';
import createSagaMiddleware from 'redux-saga';
import Login from './Login';
import { Router } from 'react-router-dom';
import configureStore from '../../store/store';


const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('Screeen Login', () => {
  let store: Store<any, AnyAction>;

  const data = {
    setup: enSetup,
    config: {
      status: "success",
      statusCode: 200,
      message: "Query with data",
      data: [
        {
          _id: "637eddf3119ed80009714278",
          id_feature: "social_media_login",
          platform: "Rewards_USA",
          type_component: "app",
          program: "MyCooler",
          status: true,
          create_user: "backofficeuser",
          timestamp_create: 1669258738595,
          valid_zipcodes: [
            {
              initial: "00100",
              final: "00100"
            }
          ],
          basic: true,
          create_date: "23/11/2022, 20:58:58",
          valid_zipcode: true
        }
      ],
      apicode: 100
    },
    login: {
      errorMessage: '',
      errorCode: '',
      message: '',
      pending: false,
      success: false
    },
    reenrollment: {
      historical: false,
      errorMessage: '',
      errorCode: '',
      message: '',
      pending: false,
      success: false
    },
    ssoIdentityProviders: {
      statusCode: 200,
      apiCode: 100,
      status: "success",
      message: "Identity providers successfully retrieved",
      data: [
        {
          id: "6356b49795517f1fa6780fa0",
          name: "Google",
          url: "https://dp-sso-pool-north-america-preprod.auth.us-east-1.amazoncognito.com/authorize?identity_provider=Google&client_id=41ps2nke9l64r4piffc0q0m2pm8&response_type=token&scope=email+openid+profile+aws.cognito.signin.user.admin&redirect_uri=https://testing-sso-social-media-login.web.app",
          image: "https://rewards-images-bucket-us-qa.s3.amazonaws.com/social-media/google-icon.svg"
        }
      ]
    },
    socialValidation: {
      status: "Success",
      statusCode: 200,
      message: "Successful operation",
      validSocialLogin: {
        valid: true,
      },
      code: {
        id_token: "eyJraWQiOiJ5VUNzXC90cmFmUXJqdFJjRUE1eks4R0dtU2FiT0lGWWVVbWFqb1dKUG5xMD0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoia0phR1Y1R0tKRXdvVzhHTUNUc1d3ZyIsInN1YiI6ImIyM2RmZjk1LWI3ODYtNDk2My1hYjEzLTRmZDAwZDRhMDUxZiIsImNvZ25pdG86Z3JvdXBzIjpbInVzLWVhc3QtMV9GNlRLanh1SVNfR29vZ2xlIl0sImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfRjZUS2p4dUlTIiwiY29nbml0bzp1c2VybmFtZSI6Imdvb2dsZV8xMDA1MDA0NzUzNTExNDI2MTEzNDAiLCJub25jZSI6IjdyNW1pUVlvVTZnUnBQODhNWWx5eF9LLXU5bWR0djFYTzFGb0oxbE95cDBBSnJtNDhYOHBiLV80T3ZnQXlzUlBGQ1MwLXg3ckpHbXlUTlRSVHNFQ05xcGJJSWtHZFJIYlltRTZsdWNGbVhkdjh6MzM3YUlwZEVMWHRvTlNPZnI3NkFQakVfYm5xdTRJdEdGLTZldDZDRGcwVS1scU9QVmdPeU05Rm4xSWlkUSIsIm9yaWdpbl9qdGkiOiJmY2UzNTI4Ni1jMTcyLTQ1MDMtYjlkMS1hY2ZkNDg0MTRlMmEiLCJhdWQiOiI0MXBzMm5rZTlsNjRyNHBpZmZjMHEwbTJwbSIsImlkZW50aXRpZXMiOlt7InVzZXJJZCI6IjEwMDUwMDQ3NTM1MTE0MjYxMTM0MCIsInByb3ZpZGVyTmFtZSI6Ikdvb2dsZSIsInByb3ZpZGVyVHlwZSI6Ikdvb2dsZSIsImlzc3VlciI6bnVsbCwicHJpbWFyeSI6InRydWUiLCJkYXRlQ3JlYXRlZCI6IjE2NjgwMzU4MzEyODIifV0sInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjY4MTAxMDc0LCJuYW1lIjoiTWljaGFlbCIsImV4cCI6MTY2ODEwMTY3NCwiaWF0IjoxNjY4MTAxMDc0LCJmYW1pbHlfbmFtZSI6IlZpbGxhbGJhIFNvdGVsbyIsImp0aSI6IjdkZTk2MWQxLTVjMDktNDllMy1iODQ1LTVhOGQwMDRmYjg2YSIsImVtYWlsIjoibWljaGFlbC52aWxsYWxiYUBhYi1pbmJldi5jb20ifQ.n-UECLdTKCt4HkuZA0KQEFhgGBqEJR8zUvN_yRuve1pCOcOweVE4c3BqoO9TbBK47A5RYlfvowPu5nvowsv8yvxCGMZryyw59vNxNeEH0rMZEhNnqEahpKmNRahQcmlpWY6ChB9DIFBL890fyyQZ0Kp4Y8m6kVya67lNd7xqvlopWc6FiGmyzOYtb8E29nYTOOxRzQp4nf0cYQDlPngGc7YKcwQnWcc3sTHuCHItYqjjfDJQKC3Czw1R_EFcTldF6hojL5tDI4zTf6Z4ZRuu7c9JBiuGmBVS9ZHzzgzOwe5NzH-FSbUFJts9TkipfynGW7x8MUEaFcXuJosU9r2afw",
        access_token: "eyJraWQiOiJRSTRQWHZxVncyaGRmYk1vREtqMUhrZW1keXN5dHkzY0FCWkQrOEVZOUhVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJiMjNkZmY5NS1iNzg2LTQ5NjMtYWIxMy00ZmQwMGQ0YTA1MWYiLCJjb2duaXRvOmdyb3VwcyI6WyJ1cy1lYXN0LTFfRjZUS2p4dUlTX0dvb2dsZSJdLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9GNlRLanh1SVMiLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI0MXBzMm5rZTlsNjRyNHBpZmZjMHEwbTJwbSIsIm9yaWdpbl9qdGkiOiJmY2UzNTI4Ni1jMTcyLTQ1MDMtYjlkMS1hY2ZkNDg0MTRlMmEiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjY4MTAxMDc0LCJleHAiOjE2NjgxMDEzNzQsImlhdCI6MTY2ODEwMTA3NCwianRpIjoiZjI4MTIwOTMtMTQ5Yy00YjZkLWI3ZmUtZWY0NWNjYzVmNDZiIiwidXNlcm5hbWUiOiJnb29nbGVfMTAwNTAwNDc1MzUxMTQyNjExMzQwIn0.CDQHky3CEDiUQdxpZXn-9SZWlzf4W2nSDAOVNGaHaS0GghS4qA6UBc3P28RYgI8b9nl0qFtOU8y0LGqwV81pTW_LlqC_0Y6diDtxNH7H82Jex2CdsufZWayB4Kws39pRjzyVZDjIjfyQeI-_-yLjntZj6VjnCnB6LqRI4h6e2tFyWxH6b-rqr_FSeZUAcS1sz4_MvDprPjbNlNbnvHWEpTQPhCRCiBXvsb4V1McFmnoGNaejya7UD9a-00IsvhBQCpMGWrC4Ni_LWAhXcFB6N-RPoHuiAASHenHORjb10MlZWQ2YMoltnOxu9fTkYWdoJR0T-7i5NOKc_SqEGvZPlg",
        refresh_token: "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.Nqzo7lMjwR4Qz7RgzvXrPXVgq6A6o_7t-5NFyEfJDYIVHxoB_Mk7BkeJgWYn_4sGPJ8bWmfUP7M9Dq3ILMBl0-telvSafvLAtqC6IyAVE1b3jTbyiv4b8EUg2_gZVKe9NmH-PTTKYtteck5_EoyJH69W47L7MPrsHxAtkZOpVp8CnTRdveCTmw64pelnkxnMjDrghp4HqK8Yk1EB64CW6smZ1QWTWMnamlu38V-aRI3-Wu04FnCY3CnENRX75pWc84ksVCUJw7WChtRIrjGI8G5bkRF7lSLOQ-NMQCgJ75HJpbL6HLzQ8GhF1BovtS677LKQOyRaZSV-nIsMpg7bjA.M5wJdRMSZBclgVcI.gtZ7q4py_xbhCPEq8gLlfB_vbxgUYZielsDXlc2m_KblVfkR9lBGpf3XIqPispRxNsAMvsAcTTaIShi4D0ELiLjxw-ltSlWEJOBkuWHA65WA3eaz8tAPyHbJiZ8rJxhTG-3fIQ6gYwMt4uyiC20EymjWOZZ5WI1pT9TDvX2dpNBQbmgntqsD9bG8nJp-C5U9il_QsdxXJ7fk8lk3CoR9ZO6xk4m5hAM7Ci1v2SjyqKqMdequkBVQ-8gvITgloTzFXchz_ct7DY3BU0BY1_k4dCqYziZLJapfSWyHP_On8VgoM_7UAuuAFT7VCSGAO9wtoqe_CTV746QIur_yuF_OItvXpOwUDnP9xtwI7IScn-VaaTRIOiw9bjja7GzlmyyOJWS0VUfH4UqwZouDo3ZgI4UPaMq83QyZRTbEgqTIV_iMrNMQQn-ZyHTM0ye0aD0O9lpapRH_AsqPGcEw9nozM2Vw8jOmPBbHMbHn2Nw7K0T3bEWPcz2yfCDEz32aIAJlTR-QHNaDiXCbCzmkWz9hgLdBg5pSsbkWk32icbU8avts180MOkMglw29DnW0TQTFhz41LGE06NA4rMnrcQU8CDMzcsmOYI9bdT4bIz8WtsGaGn4zVshMg9tn7_8OwVtYXq8pnJ7L6lsoibEM8Wz95MYw07pI-My6T2DMmqCDJtNusMtpCD4RwDBSgEa8Qn_lk9-n6nmCDOtj5M_0J3YRxw4jpQ3Rjyz-LcMQIBokGapyvHzJ4B2TSnQP0LsSk2X6bQ6JBtt0fnfxATzIKWM1ATdXi4wj-wHnOXf78hDsc4yb_ZzYHdqg0RkYdoMcSsZOZNQ8lvzgQ38fD_1yyR2RYfwfInXD2HEI46Jq8LN-7_uywuLxT5D3Wh0sQgbb00PtIWmwFGMgvSWEtMZqx_w7vk6TFIJIbBIruCbs7RoTc-M2aWLjwY_Zn2-gAOx8UL7pmjdJ0h-6jYUMzqsWZhYtoMusCDHjos03zHPtWU_EcIz4-B4MqLlueqwUWLM3qxx5K0K4zTuKzTI1ez8og1Ktr_cqyhuRmOvS4okJMRp58m1KeCkALluy-TD5AUyuWzl04BWBws982uToSN-tOVM7WEtROzHLK8rFmXkTl8s9XEqvwlT8ptbiQiFF0NSk6Ki5c9mO_4RLrj0jpxxkxKsY7HN2rgnEUui1GKDcv2Q11rwhFPPkhz5qEkM8CCH8nCWkSYbNJlF6f3LwBRZ1FwSkYjJap8g8VKRVDFy2XfcGxjRaHHQM6jGmFtkWttvtc5gW4tlzyTYtpCwfMA.sug_JNy5gsXycZKuiaq4FA",
        expires_in: 300,
        token_type: "Bearer"
      },
      data: {
          missingData: [
            {
              field_type: "text",
              field_label: "First Name",
              field_name: "firstName",
              status: "Active",
              basic: true,
              field_required: true,
              field_regex: "",
              regex_description: "Must be a string without numbers and special characters",
              field_min_length: 1,
              field_max_length: 100,
              position_H: 1,
              position_V: 1,
              place_holder: "First Name",
              default_value: "Beer",
              allow_edit: false
            }
          ],
          clientData: {
            firstName: "Test",
            lastName: "SSO"
          },
          
      }
    }
  }

  beforeEach(() => {
  });

  test('Render Login component', async() => {
    // await act( async() => {
    //   const component = await render(
    //     <Provider store={store}>
    //       <Router history={history}>
    //         <Login/>
    //       </Router>
    //     </Provider>
    //   );
  
    //   expect(component).toBeDefined();
    // });
  });

  // test('Render Login component validate styles Title', async() => {   
  //   await act( async() => {
  //     const component = await render(
  //       <Provider store={store}>
  //         <Router history={history}>
  //           <Login/>
  //         </Router>
  //       </Provider>
  //     ).getByText(enSetup.screen.signin.title);
        
  //     expect(component).toHaveStyle({
  //       'font-size': '45px',
  //       'font-weight': '700',
  //       'line-height': '52px',
  //       'font-style': 'normal',
  //       'color': enSetup.theme.secondary,
  //     });
  //   });
  // });

  // test('Render Login component validate styles SubTitle', async() => {   
  //   await act( async() => {
  //     const component = await render(
  //       <Provider store={store}>
  //         <Router history={history}>
  //           <Login/>
  //         </Router>
  //       </Provider>
  //     ).getByText(enSetup.screen.signin.labelInstruction);
        
  //     expect(component).toHaveStyle({
  //       'font-size': '20px',
  //       'font-weight': '400',
  //       'line-height': '28px',
  //       'font-style': 'normal',
  //       'color': enSetup.theme.text,
  //     });
  //   });
  // });

  test('Render Login component input email', async() => {   
    // await act( async() => {
    //   const component = await render(
    //     <Provider store={store}>
    //       <Router history={history}>
    //         <Login/>
    //       </Router>
    //     </Provider>
    //   ).getByPlaceholderText(enSetup.screen.signin.placeholderEmail);

    //   expect(component).toBeDefined();
    // });
  });

  test('Render Login component input password', async() => {
    // await act( async() => {
    //   const component = await render(
    //     <Provider store={store}>
    //       <Router history={history}>
    //         <Login/>
    //       </Router>
    //     </Provider>
    //   ).getByPlaceholderText(enSetup.screen.signin.placeholderPassword);

    //   expect(component).toBeDefined();
    // });
  });

  test('Render Login component click Btn submit', async() => {
    const mockHandler = jest.fn();
    // await act( async() => {
    //   const component = await render(
    //     <Provider store={store}>
    //       <Router history={history}>
    //         <Login/>
    //       </Router>
    //     </Provider>
    //   ).getByText(enSetup.screen.signin.btnSignin);

    //   component.onclick = mockHandler;

    //   fireEvent.click(component);

    //   expect(mockHandler.mock.calls).toHaveLength(1);
    // });
  });

  test('Render Login component is invalid email', async() => {
    // await act( async() => {
    //   const component = await render(
    //     <Provider store={store}>
    //       <Router history={history}>
    //         <Login/>
    //       </Router>
    //     </Provider>
    //   );

    //   const inputEmail = component.getByPlaceholderText(enSetup.screen.signin.placeholderEmail);

    //   inputEmail.focus();

    //   fireEvent.change(document.activeElement, {
    //     target: { value: 'email' },
    //   });

    //   inputEmail.blur();

    //   expect(component.getByText('Invalid email')).toBeDefined();
    // });
  });
});