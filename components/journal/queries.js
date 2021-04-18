// @flow
import axios from 'axios';
import { baseURL } from '@/constants/index';

export const GET_JOURNAL_BY_USER_ID = async key => {
  const { queryKey } = key;
  const res = await axios.get(
    `${baseURL}/v1/journal/user_id/${queryKey[1].user_id}`,
  );
  return res.data;
};
export const DEL_JOURNAL_BY_ID = async key => {
  const { queryKey } = key;
  const res = await axios.delete(
    `${baseURL}/v1/journal/${queryKey[1].journal_id}`,
  );
  return res.data;
};
