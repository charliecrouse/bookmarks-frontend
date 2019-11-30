import * as _ from 'lodash';
import axios from 'axios';

export interface SigninRequest {
  email: string;
  password: string;
}

export interface SigninResponse {
  jwt: string;
}

export interface SignupRequest {
  email: string;
  password: string;
}

export interface SignupResponse {
  jwt: string;
}

export const signup = async (props: SignupRequest): Promise<SignupResponse> => {
  try {
    const res = await axios.post('/signup', props);

    const jwt: string | undefined = _.get(res, 'data.token.jwt');

    if (!jwt) {
      throw new Error(`Failed to signin -- response is missing JWT!`);
    }

    window.localStorage.setItem('jwt', jwt);
    return { jwt };
  } catch (err) {
    return Promise.reject(err.response.data.error || err.message || err);
  }
};

export const signin = async (props: SigninRequest): Promise<SigninResponse> => {
  try {
    const res = await axios.post('/signin', props);

    if (res.status !== 200) {
      throw new Error(`Failed to signin -- got status ${res.status}!`);
    }

    const jwt: string | undefined = _.get(res, 'data.token.jwt');

    if (!jwt) {
      throw new Error(`Failed to signin -- response is missing JWT!`);
    }

    window.localStorage.setItem('jwt', jwt);
    return { jwt };
  } catch (err) {
    return Promise.reject(err.response.data.error || err.message || err);
  }
};
