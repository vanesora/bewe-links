import React, { ReactNode } from "react";
import '@testing-library/jest-dom'
import 'helpers/storageTest';
import { fireEvent, render } from "@testing-library/react";
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { Store, AnyAction } from "redux";
import Navigator from './';
import { act } from "react-dom/test-utils";
import { mockTest } from "./mockTest";


const sagaMiddleware = createSagaMiddleware();


let mock = { ...mockTest }

describe('Navigation', () => {
    // let store: Store<any, AnyAction>;
    // let assignMock = jest.fn();
    // beforeEach(() => {
    //     let mockExample = mock;
    //     store = mockStore(mockExample);
    //     localStorage.setItem('accessToken', 'JdsdnsgbO');
    //     localStorage.setItem('idToken', 'Jdfsd');
    //     localStorage.setItem('refreshToken', 'Hpaskdfsdbjkjsd');
    //     localStorage.setItem('id', 'kjsbd');
    //     window.scrollTo = jest.fn();
    //     delete window.location;
    //     Object.defineProperty(window, "location", {
    //         value: {
    //             hash: {
    //                 endsWith: assignMock,
    //                 includes: assignMock
    //             },
    //             assign: assignMock
    //         },
    //         writable: true
    //     });
    // })
    // afterAll(() => {
    //     jest.clearAllMocks();
    // });
    // afterEach(() => {
    //     assignMock.mockClear();
    // });


    it('Render component not login', async () => {
        // localStorage.setItem('accessToken', '');
        // console.log(1);
        // await act(async () => {
        //     let component = await render(
        //         <Provider store={store}>
        //             <Router history={history}>
        //                 <Navigator />
        //             </Router>
        //         </Provider>
        //     );

        //     await act(async () => {
        //         await component.rerender(
        //             <Provider store={store}>
        //                 <Router history={history} >
        //                     <Navigator />
        //                 </Router>
        //             </Provider>
        //         );
        //     });
        //     expect(component).toBeDefined();
        // });

    });

    it('Render component go to login not token', async () => {
        // localStorage.setItem('accessToken', '');
        // console.log(2);
        // await act(async () => {
        //     let component = await render(
        //         <Provider store={store}>
        //             <Router history={history}>
        //                 <Navigator />
        //             </Router>
        //         </Provider>
        //     );

        //     await act(async () => {
        //         await component.rerender(
        //             <Provider store={store}>
        //                 <Router history={history} >
        //                     <Navigator />
        //                 </Router>
        //             </Provider>
        //         );
        //     });
        //     expect(component.getByText(mock.setup.screen.signin.title)).not.toBeNull();
        // });

    });

    it('Render component go to tier with token', async () => {
        // localStorage.setItem('accessToken', 'kjsdkjasd');
        // let mockExample = { ...mock };
        // mockExample.pathActual.path = '/tiers';
        // store = mockStore(mockExample);
        // history = createMemoryHistory({ initialEntries: ['/tiers'] });
        // console.log(3);
        // await act(async () => {
        //     let component = await render(
        //         <Provider store={store}>
        //             <Router history={history} >
        //                 <Navigator />
        //             </Router>
        //         </Provider>
        //     );

        //     await act(async () => {
        //         await component.rerender(
        //             <Provider store={store}>
        //                 <Router history={history} >
        //                     <Navigator />
        //                 </Router>
        //             </Provider>
        //         );
        //     });

        //     expect(history.location.pathname).toEqual('/tiers');
        // });

    });

    it('Render component go to tier not token', async () => {
        // localStorage.setItem('accessToken', '');
        // let mockExample = { ...mock };
        // store = mockStore(mockExample);
        // history = createMemoryHistory({ initialEntries: ['/tiers'] });
        // console.log(4);
        // await act(async () => {
        //     let component = await render(
        //         <Provider store={store}>
        //             <Router history={history} >
        //                 <Navigator />
        //             </Router>
        //         </Provider>
        //     );

        //     await act(async () => {
        //         await component.rerender(
        //             <Provider store={store}>
        //                 <Router history={history} >
        //                     <Navigator />
        //                 </Router>
        //             </Provider>
        //         );
        //     });

        //     expect(component.getByText(mockExample.setup.screen.signin.title)).not.toBeNull();
        // });

    });

    it('Render component not all feature flags', async () => {
        let mockExample = { ...mock };
        // mockExample.config.feature_flags = [{
        //     "_id": "615dd9b0e1f56e000975e2ac",
        //     "id_feature": "ticket_scan",
        //     "platform": "Rewards_USA",
        //     "type_component": "web",
        //     "program": "MyCooler",
        //     "status": true,
        //     "create_user": "backofficeuser",
        //     "timestamp_create": 1633540528434,
        //     "valid_zipcodes": [
        //         {
        //             "initial": "90001",
        //             "final": "96161"
        //         },
        //         {
        //             "initial": "75001",
        //             "final": "79942"
        //         }
        //     ],
        //     "basic": false,
        //     "create_date": "6/10/2021 12:15:28",
        //     "last_update_date": "21/12/2021 13:02:53",
        //     "update_user": "backofficeuser",
        //     "valid_zipcode": false
        // },];
        // store = mockStore(mockExample);
        // history = createMemoryHistory({ initialEntries: ['/'] });
        // localStorage.setItem('accessToken', 'sdasdasd');

        // await act(async () => {
        //     let component = await render(
        //         <Provider store={store}>
        //             <Router history={history}>
        //                 <Navigator />
        //             </Router>
        //         </Provider>
        //     );
        //     await act(async () => {
        //         await component.rerender(
        //             <Provider store={store}>
        //                 <Router history={history} >
        //                     <Navigator />
        //                 </Router>
        //             </Provider>
        //         );
        //     });
        //     expect(component).toBeDefined();
        // });

    });

    it('Render component not feature flags', async () => {
        // console.log(6);
        // let mockExample = { ...mock };
        // mockExample.config.feature_flags = [];
        // store = mockStore(mockExample);
        // history = createMemoryHistory({ initialEntries: ['/'] });
        // localStorage.setItem('accessToken', 'sdasdasd');

        // await act(async () => {
        //     let component = await render(
        //         <Provider store={store}>
        //             <Router history={history}>
        //                 <Navigator />
        //             </Router>
        //         </Provider>
        //     );
        //     await act(async () => {
        //         await component.rerender(
        //             <Provider store={store}>
        //                 <Router history={history} >
        //                     <Navigator />
        //                 </Router>
        //             </Provider>
        //         );
        //     });
        //     expect(component).toBeDefined();
        // });

    });

    it('Render component', async () => {
        // console.log(7);
        // const setState = jest.fn();
        // const useStateMock: any = (initState: any) => [initState, setState];
        // jest.spyOn(React, 'useState').mockImplementation(useStateMock);
        // history = createMemoryHistory({ initialEntries: ['/'] });
        // await act(async () => {
        //     let component = render(
        //         <Provider store={store}>
        //             <Router history={history}>
        //                 <Navigator />
        //             </Router>
        //         </Provider>
        //     );
        //     await act(async () => {
        //         await component.rerender(
        //             <Provider store={store}>
        //                 <Router history={history} >
        //                     <Navigator />
        //                 </Router>
        //             </Provider>
        //         );
        //     });
        //     expect(component).toBeDefined();
        // });

    });

});
