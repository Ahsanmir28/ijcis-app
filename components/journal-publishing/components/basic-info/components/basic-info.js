import React from 'react';
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
const BasicInfo = (props: Props) => {
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
    <React.Fragment>
      <form>
        <div className="row">
          <div className="col-md-5">
            <div className="form-group">
              <label className="bmd-label-floating">Journal Type</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label className="bmd-label-floating">Username</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label className="bmd-label-floating">Email address</label>
              <input type="email" className="form-control" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label className="bmd-label-floating">Fist Name</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="bmd-label-floating">Last Name</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label className="bmd-label-floating">Adress</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label className="bmd-label-floating">City</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label className="bmd-label-floating">Country</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12"></div>
        </div>
        <button type="submit" className="btn btn-primary pull-right">
          Next
        </button>
        <div className="clearfix"></div>
      </form>
    </React.Fragment>
  );
};

export { BasicInfo };
