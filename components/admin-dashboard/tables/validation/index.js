import * as Yup from 'yup';

export const validateTabledata = Yup.object().shape({
  table_data: Yup.string(),
});
