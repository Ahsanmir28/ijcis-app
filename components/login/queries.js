import axios from 'axios';
import { baseURL } from '../../constants';

export const LOGIN_USER = async e => {
  const res = await axios.post(`${baseURL}/v1/login`, e);
  return res.data;
};
