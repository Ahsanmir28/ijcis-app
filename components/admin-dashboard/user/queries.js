import axios from 'axios';
import { baseURL } from '../../constants';

export const USER_Form = async e => {
  const res = await axios.post(`${baseURL}/v1/user`, e);
  return res.data;
};
