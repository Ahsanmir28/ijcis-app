import * as Yup from 'yup';

export const validateJournal = Yup.object().shape({
  journal_title: Yup.string(),
  journal_initials: Yup.string(),
  journal_abbreviation: Yup.string(),
  publisher: Yup.string(),
  journal_issn: Yup.string(),
  journal_editor: Yup.string(),
});
