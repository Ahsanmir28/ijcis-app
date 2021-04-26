import * as Yup from 'yup';

export const validateJournal = Yup.object().shape({
  journal_title: Yup.string(),
  journal_initials: Yup.string(),
  journal_abbreviation: Yup.string(),
  publisher: Yup.string(),
  journal_issn: Yup.string(),
  journal_editor: Yup.string(),
});
export const validateContact = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string(),
  phone: Yup.string(),
  affiliation: Yup.string(),
  address: Yup.string(),
});
