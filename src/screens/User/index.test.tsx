import React from "react";
import '@testing-library/jest-dom';
import 'helpers/storageTest';
import { act } from 'react-dom/test-utils';
import { enSetup } from "../../data/dataEn";
import { AnyAction, Store } from "redux";
import { Provider} from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import createSagaMiddleware from "redux-saga";
import { BrowserRouter } from 'react-router-dom';
import User from './User';
import { ILogoutRedirectDuck } from "./ducks/logoutRedirect";
import { Router } from 'react-router-dom';
import { setItemObject } from '../../helpers/storage';

const sagaMiddleware = createSagaMiddleware();
// const mockStore = configureStore([sagaMiddleware]);
// interface MockStore {
//   setup: any;
//   logoutRedirect: ILogoutRedirectDuck;
// }

// const mock : MockStore = {
//   setup: enSetup,
//   config: {
//     errorMessage: '',
//     errorCode: '',
//     message: '',
//     pending: false,
//     success: true,
//     feature_flags: []
//   },
//   sideNavbar: {
//     menu: [
//       { text: 'profile', parameters: { url: '/user' } },
//       { text: 'earn', parameters: { url: '/earn' } },
//       { text: 'rewards', parameters: { url: '/rewards' } },
//       { text: 'tiers', parameters: { url: '/tiers' } },
//       { text: 'points_history', parameters: { url: '/user/points_history' } },
//       { text: 'trivia', parameters: { url: '/user/trivia' } }
//     ],
//     icon: 'logo',
//     level: null,
//     user: {
//       name: 'User Test', points: 550
//     },
//     errorMessage: '',
//     errorCode: '',
//     message: '',
//     pending: false,
//     success: false,
//   },
//   logoutRedirect: {
//     errorMessage: '',
//     pending: false,
//     success: false,
//     logoutRedirect: ''
//   },
// }

// const history = createMemoryHistory();

describe('User',  () => {
  // let store: Store<any, AnyAction>;

  // beforeEach(() => {
  //   store = mockStore(mock);
  //   const menuUser = {
  //     'text': enSetup.screen.pointsHistory.title,
  //     'parameters': {
  //       'url': '/user/points-history'
  //     }
  //   }

  //   localStorage.setItem('menuUser', JSON.stringify(menuUser))
  // });

  it('Render User screen', async () => {
    // await act(async () => {
    //   const component = render(
    //     <Provider store={store}>
    //       <BrowserRouter>
    //         <User/>
    //       </BrowserRouter>
    //     </Provider>
    //   );
    //   // console.log(1);
    //   expect(component).toBeDefined();
    // });
  });

  it('Render User screen with myAccount link', async () => {
    // await act(async () => {
    //   const component = render(
    //     <Provider store={store}>
    //       <BrowserRouter>
    //         <User/>
    //       </BrowserRouter>
    //     </Provider>
    //   );
    //   // console.log(2);
    //   const myAccountLink = document.querySelector("My Account") as HTMLElement;
      
    //   expect(myAccountLink).toBeDefined();
    // });
  });

  it('Render User screen with recentActivity link', async () => {
    // await act(async () => {
    //   const component = render(
    //     <Provider store={store}>
    //       <BrowserRouter>
    //         <User/>
    //       </BrowserRouter>
    //     </Provider>
    //   );
    //   // console.log(3);
    //   const recentActivityLink = document.querySelector("Recent Activity") as HTMLElement;
      
    //   expect(recentActivityLink).toBeDefined();
    // });
  });

  it('Render User screen with redemptionHistory link', async () => {
    // await act(async () => {
    //   const component = render(
    //     <Provider store={store}>
    //       <BrowserRouter>
    //         <User/>
    //       </BrowserRouter>
    //     </Provider>
    //   );
    //   // console.log(4);
    //   const redemptionHistoryLink = document.querySelector("Redemption History") as HTMLElement;
      
    //   expect(redemptionHistoryLink).toBeDefined();
    // });
  });

  it('Render User screen with signOut link', async () => {
    // await act(async () => {
    //   const component = render(
    //     <Provider store={store}>
    //       <Router history={history}>
    //         <User/>
    //       </Router>
    //     </Provider>
    //   );
    //   // console.log(5);
    //   const signOutLink = document.querySelector("Sign Out") as HTMLElement;
      
    //   expect(signOutLink).toBeDefined();
    // });
  });

  it('Handle click for MenuListVertical', async () => {
    // const mockHandler = jest.fn();
    // await act(async () => {
    //   const component = render(
    //     <Provider store={store}>
    //       <Router history={history}>
    //         <User/>
    //       </Router>
    //     </Provider>
    //   );
    //   // console.log(6);
    //   // const menuListVerticalButton = component.getByText(enSetup.screen.userMenu.acountInfo) as HTMLElement;
    //   // menuListVerticalButton.onclick = mockHandler;

    //   // fireEvent.click(menuListVerticalButton);
      
    //   // expect(mockHandler.mock.calls).toHaveLength(1);
    // });
  });

  it('Handle click for signOut', async () => {
    // const mockHandler = jest.fn();
    // await act(async () => {
    //   const component = render(
    //     <Provider store={store}>
    //       <Router history={history}>
    //         <User/>
    //       </Router>
    //     </Provider>
    //   );
    //   // console.log(7);
    //   const menuListVerticalButton = component.getByText(enSetup.screen.userMenu.signOut) as HTMLElement;
    //   menuListVerticalButton.onclick = mockHandler;

    //   fireEvent.click(menuListVerticalButton);
      
    //   expect(mockHandler.mock.calls).toHaveLength(1);
    // });
  });

  it('Render User screen with no button menu from localStorage', async () => {
    // localStorage.removeItem('menuUser');
    
    // await act(async () => {
    //   const component = render(
    //     <Provider store={store}>
    //       <Router history={history}>
    //         <User/>
    //       </Router>
    //     </Provider>
    //   );
    //   // console.log(8);
    //   expect(component).toBeTruthy();
    // });
  });

  it('Render a loader pending state', async() => {
    // mock.config.pending = true;
    // store = mockStore(mock);

    // await act(async() => {      
    //   const component = render(
    //     <Provider store={store}>
    //       <Router history={history}>
    //         <User/>
    //       </Router>
    //     </Provider>
    //   );

    //   await act(async () => {
    //     await component.rerender(
    //       <Provider store={store}>
    //         <Router history={history}>
    //           <User/>
    //         </Router>
    //       </Provider>
    //     );
    //   });
    //   // console.log(9);
    //   const loaderComponent = document.getElementsByClassName('loader-wrapper');

    //   expect(loaderComponent).toBeTruthy();
    // });
  });

  it('Render user points', async() => {
    // mock.config.pending = false;
    // mock.sideNavbar.success = true;
    // store = mockStore(mock);

    // await act(async() => {      
    //   const component = render(
    //     <Provider store={store}>
    //       <Router history={history}>
    //         <User/>
    //       </Router>
    //     </Provider>
    //   );

    //   await act(async () => {
    //     await component.rerender(
    //       <Provider store={store}>
    //         <Router history={history}>
    //           <User/>
    //         </Router>
    //       </Provider>
    //     );
    //   });
    //   // console.log(10);
    //   expect(component).toBeTruthy();
    // });
  });

});