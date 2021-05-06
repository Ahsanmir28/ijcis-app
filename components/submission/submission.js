// @flow
import React from 'react';
import SecureTemplate from '@/layout/secure-template';
import Router from 'next/router';

const Submission = () => {
  return (
    <SecureTemplate title="JournalPublishing">
      <div className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header card-header-primary">
              <h3 className="card-title">Journal Publishing</h3>
              <button
                className="btn btn-primary float-right"
                onClick={() =>
                  Router.push('/admin/submit', '/admin/submit', {
                    shallow: true,
                  })
                }
              >
                Submit Journal
              </button>
              <p className="card-category">
                Here you can upload your journal with proper information
              </p>
            </div>
            <div className="card-body"></div>
          </div>
        </div>
      </div>
    </SecureTemplate>
  );
};
export default Submission;
