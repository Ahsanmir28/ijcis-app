import axios from 'axios';
import { baseURL } from '@/constants/index';

export const Basic_Info = async e => {
  const res = await axios.post(`${baseURL}/v1/basic-info`, e);
  return res.data;
};
