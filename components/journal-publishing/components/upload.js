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
const DataUpload = (props: Props) => {
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
    <div className="container">
      <div className="panel panel-default">
        <div className="panel-heading">
          <strong>Upload Files</strong> <small>Bootstrap files upload</small>
        </div>
        <div className="panel-body">
          <h4>Select files from your computer</h4>
          <form
            action=""
            method="post"
            encType="multipart/form-data"
            id="js-upload-form"
          >
            <div className="form-inline">
              <div className="form-group">
                <input
                  type="file"
                  name="files[]"
                  id="js-upload-files"
                  multiple
                />
              </div>
              <button
                type="submit"
                className="btn btn-sm btn-primary"
                id="js-upload-submit"
              >
                Upload files
              </button>
            </div>
          </form>
          <h4>Or drag and drop files below</h4>
          <div className="upload-drop-zone" id="drop-zone">
            Just drag and drop files here
          </div>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span className="sr-only">60% Complete</span>
            </div>
          </div>
          <div className="js-upload-finished">
            <h3>Processed files</h3>
            <div className="list-group">
              <a href="#" className="list-group-item list-group-item-success">
                <span className="badge alert-success pull-right">Success</span>
                image-01.jpg
              </a>
              <a href="#" className="list-group-item list-group-item-success">
                <span className="badge alert-success pull-right">Success</span>
                image-02.jpg
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DataUpload };
