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
const Userform = (props: Props) => {
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
              <label className="bmd-label-floating">Journal (disabled)</label>
              <input type="text" className="form-control" disabled />
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
          <div className="col-md-4">
            <div className="form-group">
              <label className="bmd-label-floating">Postal Code</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label>About Me</label>
              <div className="form-group">
                <label className="bmd-label-floating">
                  {' '}
                  Lamborghini Mercy, Your chick she so thirsty, I'm in that two
                  seat Lambo.
                </label>
                <textarea className="form-control" rows="5"></textarea>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary pull-right">
          Update Profile
        </button>
        <div className="clearfix"></div>
      </form>
    </React.Fragment>
  );
};

export { Userform };
