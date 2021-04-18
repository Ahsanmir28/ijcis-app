import React from 'react';
// import { Field } from 'formik';
// import { fieldValidate, fieldValidateBool } from '@/utils/form-utils';
import { Rating } from '@material-ui/lab';

type Props = {
  values: any,
  handleChange: Function,
  handleBlur: Function,
  errors: any,
  handleSubmit: any,
  dirty: boolean,
  isSubmitting: boolean,
};
const Reviews = (props: Props) => {
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
    <div>
      <div className="container">
        <h1>Customer Reviews</h1>
        <p>
          These require links to be setup, but are a great starting point for
          schema and appearance.
        </p>
        <div className="row-fluid">
          <div className="col-sm-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                <span itemScope itemType="http://schema.org/Review">
                  <table>
                    <tr>
                      <h3>Review Title</h3>
                    </tr>
                    <td>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      elit. Nihil quaerat aperiam unde nemo suscipit id
                      repellendus ad doloribus quae, fugiat quia rem molestias
                      sequi, amet nisi qui cumque iusto earum!
                    </td>
                  </table>
                  <span
                    itemProp="author"
                    itemScope
                    itemType="http://schema.org/Person"
                  ></span>
                </span>
                <Rating name="hover-feedback" value={0} precision={0.5} />
                <span
                  className="glyphicon glyphicon-calendar"
                  aria-hidden="true"
                />

                <small itemProp="datePublished" content="01-01-2016">
                  01-01-2016
                </small>

                <span className="pull-right">
                  <span
                    className="reviewRating"
                    itemScope
                    itemType="http://schema.org/Rating"
                  >
                    <small itemProp="worstRating" content="1">
                      <span itemProp="ratingValue">5</span> /
                      <span itemProp="bestRating"> stars </span>
                    </small>
                  </span>
                  <small>
                    <span
                      className="glyphicon glyphicon-star"
                      aria-hidden="true"
                    ></span>
                    <span
                      className="glyphicon glyphicon-star"
                      aria-hidden="true"
                    ></span>
                    <span
                      className="glyphicon glyphicon-star"
                      aria-hidden="true"
                    ></span>
                    <span
                      className="glyphicon glyphicon-star"
                      aria-hidden="true"
                    ></span>
                    <span
                      className="glyphicon glyphicon-star"
                      aria-hidden="true"
                    ></span>
                  </small>
                </span>
              </div>
              <div className="panel-footer clearfix">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Reviews };
