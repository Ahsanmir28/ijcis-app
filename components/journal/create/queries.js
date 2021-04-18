// @flow
import axios from 'axios';
import { baseURL } from '@/constants/index';

export const JOURNAL_MAST = async e => {
  const res = await axios.post(`${baseURL}/v1/journal`, e);
  return res.data;
};

export const GET_JOURNAL_BY_ID = async key => {
  const { queryKey } = key;
  const res = await axios.get(
    `${baseURL}/v1/journal/${queryKey[1].journal_id}`,
  );
  return res.data;
};
