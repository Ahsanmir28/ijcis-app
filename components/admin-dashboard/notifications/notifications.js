import React from 'react';
import Head from 'next/head';
import SecureTemplate from '../../layouts/secure-template';

const Notifications = () => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
        ></link>
        <link
          href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap-css"
        ></link>
        <link
          href="../assets/css/material-dashboard.css?v=2.1.2"
          rel="stylesheet"
        />
      </Head>
      <div className="">
        <SecureTemplate title="Notifications">
          <div className="content">
            <div className="container-fluid">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h3 className="card-title">Notifications</h3>
                  <p className="card-category">
                    Handcrafted by our friend
                    <a target="_blank" href="https://github.com/mouse0270">
                      Robert McIntosh
                    </a>
                    . Please checkout the
                    <a
                      href="http://bootstrap-notify.remabledesigns.com/"
                      target="_blank"
                    >
                      full documentation.
                    </a>
                  </p>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <h4 className="card-title">Notifications Style</h4>
                      <div className="alert alert-info">
                        <span>This is a plain notification</span>
                      </div>
                      <div className="alert alert-info">
                        <button
                          type="button"
                          className="close"
                          data-dismiss="alert"
                          aria-label="Close"
                        >
                          <i className="material-icons">close</i>
                        </button>
                        <span>This is a notification with close button.</span>
                      </div>
                      <div
                        className="alert alert-info alert-with-icon"
                        data-notify="container"
                      >
                        <i className="material-icons" data-notify="icon">
                          add_alert
                        </i>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="alert"
                          aria-label="Close"
                        >
                          <i className="material-icons">close</i>
                        </button>
                        <span data-notify="message">
                          This is a notification with close button and icon.
                        </span>
                      </div>
                      <div
                        className="alert alert-info alert-with-icon"
                        data-notify="container"
                      >
                        <i className="material-icons" data-notify="icon">
                          add_alert
                        </i>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="alert"
                          aria-label="Close"
                        >
                          <i className="material-icons">close</i>
                        </button>
                        <span data-notify="message">
                          This is a notification with close button and icon and
                          have many lines. You can see that the icon and the
                          close button are always vertically aligned. This is a
                          beautiful notification. So you don't have to worry
                          about the style.
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h4 className="card-title">Notification states</h4>
                      <div className="alert alert-info">
                        <button
                          type="button"
                          className="close"
                          data-dismiss="alert"
                          aria-label="Close"
                        >
                          <i className="material-icons">close</i>
                        </button>
                        <span>
                          <b> Info - </b> This is a regular notification made
                          with ".alert-info"
                        </span>
                      </div>
                      <div className="alert alert-success">
                        <button
                          type="button"
                          className="close"
                          data-dismiss="alert"
                          aria-label="Close"
                        >
                          <i className="material-icons">close</i>
                        </button>
                        <span>
                          <b> Success - </b> This is a regular notification made
                          with ".alert-success"
                        </span>
                      </div>
                      <div className="alert alert-warning">
                        <button
                          type="button"
                          className="close"
                          data-dismiss="alert"
                          aria-label="Close"
                        >
                          <i className="material-icons">close</i>
                        </button>
                        <span>
                          <b> Warning - </b> This is a regular notification made
                          with ".alert-warning"
                        </span>
                      </div>
                      <div className="alert alert-danger">
                        <button
                          type="button"
                          className="close"
                          data-dismiss="alert"
                          aria-label="Close"
                        >
                          <i className="material-icons">close</i>
                        </button>
                        <span>
                          <b> Danger - </b> This is a regular notification made
                          with ".alert-danger"
                        </span>
                      </div>
                      <div className="alert alert-primary">
                        <button
                          type="button"
                          className="close"
                          data-dismiss="alert"
                          aria-label="Close"
                        >
                          <i className="material-icons">close</i>
                        </button>
                        <span>
                          <b> Primary - </b> This is a regular notification made
                          with ".alert-primary"
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="places-buttons">
                    <div className="row">
                      <div className="col-md-6 ml-auto mr-auto text-center">
                        <h4 className="card-title">
                          Notifications Places
                          <p className="category">
                            Click to view notifications
                          </p>
                        </h4>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-8 col-md-10 ml-auto mr-auto">
                        <div className="row">
                          <div className="col-md-4">
                            <button
                              className="btn btn-primary btn-block"
                              onClick="md.showNotification('top','left')"
                            >
                              Top Left
                            </button>
                          </div>
                          <div className="col-md-4">
                            <button
                              className="btn btn-primary btn-block"
                              onClick="md.showNotification('top','center')"
                            >
                              Top Center
                            </button>
                          </div>
                          <div className="col-md-4">
                            <button
                              className="btn btn-primary btn-block"
                              onClick="md.showNotification('top','right')"
                            >
                              Top Right
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-8 col-md-10 ml-auto mr-auto">
                        <div className="row">
                          <div className="col-md-4">
                            <button
                              className="btn btn-primary btn-block"
                              onClick="md.showNotification('bottom','left')"
                            >
                              Bottom Left
                            </button>
                          </div>
                          <div className="col-md-4">
                            <button
                              className="btn btn-primary btn-block"
                              onClick="md.showNotification('bottom','center')"
                            >
                              Bottom Center
                            </button>
                          </div>
                          <div className="col-md-4">
                            <button
                              className="btn btn-primary btn-block"
                              onClick="md.showNotification('bottom','right')"
                            >
                              Bottom Right
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SecureTemplate>
        <div className="fixed-plugin">
          <div className="dropdown show-dropdown">
            <a href="#" data-toggle="dropdown">
              <i className="fa fa-cog fa-2x"> </i>
            </a>
            <ul className="dropdown-menu">
              <li className="header-title"> Sidebar Filters</li>
              <li className="adjustments-line">
                <a
                  href="javascript:void(0)"
                  className="switch-trigger active-color"
                >
                  <div className="badge-colors ml-auto mr-auto">
                    <span
                      className="badge filter badge-purple"
                      data-color="purple"
                    ></span>
                    <span
                      className="badge filter badge-azure"
                      data-color="azure"
                    ></span>
                    <span
                      className="badge filter badge-green"
                      data-color="green"
                    ></span>
                    <span
                      className="badge filter badge-warning"
                      data-color="orange"
                    ></span>
                    <span
                      className="badge filter badge-danger"
                      data-color="danger"
                    ></span>
                    <span
                      className="badge filter badge-rose active"
                      data-color="rose"
                    ></span>
                  </div>
                  <div className="clearfix"></div>
                </a>
              </li>
              <li className="header-title">Images</li>
              <li className="active">
                <a
                  className="img-holder switch-trigger"
                  href="javascript:void(0)"
                >
                  <img src="../assets/img/sidebar-1.jpg" alt="" />
                </a>
              </li>
              <li>
                <a
                  className="img-holder switch-trigger"
                  href="javascript:void(0)"
                >
                  <img src="../assets/img/sidebar-2.jpg" alt="" />
                </a>
              </li>
              <li>
                <a
                  className="img-holder switch-trigger"
                  href="javascript:void(0)"
                >
                  <img src="../assets/img/sidebar-3.jpg" alt="" />
                </a>
              </li>
              <li>
                <a
                  className="img-holder switch-trigger"
                  href="javascript:void(0)"
                >
                  <img src="../assets/img/sidebar-4.jpg" alt="" />
                </a>
              </li>
              <li className="button-container">
                <a
                  href="https://www.creative-tim.com/product/material-dashboard"
                  target="_blank"
                  className="btn btn-primary btn-block"
                >
                  Free Download
                </a>
              </li>
              {/* <!-- <li class="header-title">Want more components?</li>
            <li class="button-container">
                <a href="https://www.creative-tim.com/product/material-dashboard-pro" target="_blank" class="btn btn-warning btn-block">
                  Get the pro version
                </a>
            </li> --> */}
              <li className="button-container">
                <a
                  href="https://demos.creative-tim.com/material-dashboard/docs/2.1/getting-started/introduction.html"
                  target="_blank"
                  className="btn btn-default btn-block"
                >
                  View Documentation
                </a>
              </li>
              <li className="button-container github-star">
                <a
                  className="github-button"
                  href="https://github.com/creativetimofficial/material-dashboard"
                  data-icon="octicon-star"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Star ntkme/github-buttons on GitHub"
                >
                  Star
                </a>
              </li>
              <li className="header-title">Thank you for 95 shares!</li>
              <li className="button-container text-center">
                <button id="twitter" className="btn btn-round btn-twitter">
                  <i className="fa fa-twitter"></i> &middot; 45
                </button>
                <button id="facebook" className="btn btn-round btn-facebook">
                  <i className="fa fa-facebook-f"></i> &middot; 50
                </button>
                <br />
                <br />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Notifications;
