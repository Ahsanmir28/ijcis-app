import React from 'react';
import { Formik } from 'formik';
import { Message } from '@/components/alert/message';
import { useMutation, useQuery } from 'react-query';
import {
  GET_CONTACT_BY_JOURNAL_ID,
  SAVE_CONTACT,
} from '@/components/journal/create/queries';
import { getLocalStorageValues } from '@/constants/local-storage';
import { ContactForm } from './index';
import { validateContact } from '../validation';

const Contact = () => {
  const { journal_id } = getLocalStorageValues();
  const { data, isloading, refetch } = useQuery(
    ['GET_CONTACT_BY_JOURNAL_ID', { journal_id }],
    GET_CONTACT_BY_JOURNAL_ID,
  );
  console.log('data', data);
  const saveContact = useMutation(SAVE_CONTACT);
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        name: '',
        email: '',
        phone: '',
        affiliation: '',
        address: '',
        journal_id,
      }}
      validationSchema={validateContact}
      onSubmit={async (values, actions) => {
        await saveContact.mutate(values, {
          onSuccess: async res => {
            await refetch();
            Message.success();
            actions.resetForm();
            // setValue(value + 1);
          },
          onError: e => {
            actions.setSubmitting(false);
            Message.error(e);
          },
        });
      }}
    >
      {formikProps => <ContactForm {...formikProps} />}
    </Formik>
  );
};
export { Contact };
