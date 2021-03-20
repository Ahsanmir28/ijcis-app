import axios from 'axios';
import { baseURL } from '../../constants';

export const Table_Data = async e => {
  const res = await axios.post(`${baseURL}/v1/tables`, e);
  return res.data;
};
