import React from 'react';
import { fieldValidate } from '@/utils/form-utils';
// import { Field } from 'formik';
// import { fieldValidate, fieldValidateBool } from '@/utils/form-utils';

type Props = {
  values: any,
  handleChange: Function,
  handleBlur: Function,
  errors: any,
  handleSubmit: any,
  dirty: boolean,
  isSubmitting: boolean,
};
const Contact = (props: Props) => {
  const {
    values,
    isSubmitting,
    dirty,
    handleChange,
    handleBlur,
    errors,
    handleSubmit,
  } = props;
  console.log('errors', errors);
  console.log('values', values);
  return (
    <form>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label className="bmd-label-floating">Name</label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="bmd-label-floating">Email</label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="bmd-label-floating">Phone</label>
            <input type="email" className="form-control" />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label className="bmd-label-floating">Affiliation</label>
            <input type="text" className="form-control" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <label className="bmd-label-floating">Mailing Address</label>
            <textarea
              rows={5}
              className="form-control"
              placeholder="
             8888 University Dr, Burnaby, BC V5A 1S6
             "
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12"></div>
      </div>
      <button type="submit" className="btn btn-primary pull-right">
        Save
      </button>
      <div className="clearfix"></div>
    </form>
  );
};

export { Contact };
