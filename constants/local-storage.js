export const getLocalStorageValues = () => {
  const isWindow = typeof window !== 'undefined';
  const ijcis_phone_number = isWindow
    ? localStorage.getItem('phone_number')
    : '';
  const user_email = isWindow ? localStorage.getItem('user_email') : '';
  const user_id = isWindow ? localStorage.getItem('user_id') : '';
  return {
    ijcis_phone_number,
    user_email,
    user_id,
  };
};
