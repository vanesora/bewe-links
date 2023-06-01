import axios, { AxiosResponse, AxiosError, AxiosInstance } from 'axios';
import { baseURL } from './config';
import { env } from './config';
import { cleanStorage } from '../helpers/storage';

//Success connection interceptor
const success: (response: AxiosResponse) => any = (response: AxiosResponse) =>
  response.data;
//Failed connection interceptor
const error: (error: AxiosError) => Promise<never> = async (
  error: AxiosError
) => {
  try {
    console.error(error);
    console.log('===== INTERCEPTOR ERROR ==========> ', error);
    const { message }: any = error.response?.data;
    const errorObject: any = error.response?.data;
    const code: number = error.response?.status?? 0;
    const status: string = error.response?.statusText?? '';
    return Promise.reject({
      status,
      message,
      code,
      errorObject,
    });
  } catch (err) {
    const errorDefault = {
      status: 'error',
      message:
        'There is an error while trying to make the request, please try again later.',
      code: 500,
      errorObject: {},
    };
    return Promise.reject(errorDefault);
  }
};

const client: AxiosInstance = axios.create({ baseURL });
client.interceptors.response.use(success, error);
export { client };
