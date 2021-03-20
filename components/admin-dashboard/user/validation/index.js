import * as Yup from 'yup';

export const validateUserForm = Yup.object().shape({
  joural_type: Yup.string(),
  email_address: Yup.string()
    .email()
    .required('Code is mandatory'),
  user_name: Yup.string(),
  first_name: Yup.string(),
  last_name: Yup.string(),
  address: Yup.string(),
  city: Yup.string(),
  country: Yup.string(),
  postal_code: Yup.number(),
  About_me: Yup.string(),
});
