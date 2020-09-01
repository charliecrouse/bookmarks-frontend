import * as _ from 'lodash';
import axios from 'axios';

const http = axios.create({
  baseURL: process.env.REACT_APP_BOOKMARKS_API || 'http://localhost:8000',
});

export interface SignupRequest {
  email: string;
  password: string;
}

export interface SignupResponse {
  jwt: string;
}

export const signup = async (props: SignupRequest): Promise<SignupResponse> => {
  try {
    const res = await http.post('/signup', props);
    const jwt: string = _.get(res, 'data.jwt');

    if (!jwt) {
      const message = `Failed to signin. The response is missing a valid JWT!`;
      return Promise.reject(message);
    }

    window.localStorage.setItem('jwt', jwt);
    return { jwt };
  } catch (err) {
    const message = _.get(err, 'response.data.error') || _.get(err, 'message') || err;
    return Promise.reject(message);
  }
};

export interface SigninRequest {
  email: string;
  password: string;
}

export interface SigninResponse {
  jwt: string;
}

export const signin = async (props: SigninRequest): Promise<SigninResponse> => {
  try {
    const res = await http.post('/signin', props);
    const jwt: string | undefined = _.get(res, 'data.jwt');

    if (!jwt) {
      const message = `Failed to signin. The response is missing a valid JWT!`;
      return Promise.reject(message);
    }

    window.localStorage.setItem('jwt', jwt);
    return { jwt };
  } catch (err) {
    const message = _.get(err, 'response.data.error') || _.get(err, 'message') || err;
    return Promise.reject(message);
  }
};
