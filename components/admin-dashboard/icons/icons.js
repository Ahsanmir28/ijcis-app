import React from 'react';
import Head from 'next/head';
import SecureTemplate from '../../layouts/secure-template';

const Icons = () => {
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
        <SecureTemplate title="Icons">
          {/*  <!-- Navbar --></div> */}

          {/*  <!-- End Navbar --> */}
          <div className="content">
            <div className="container-fluid">
              <div className="container-fluid">
                <div className="card card-plain">
                  <div className="card-header card-header-primary">
                    <h4 className="card-title">Material Design Icons</h4>
                    <p className="card-category">
                      Handcrafted by our friends from
                      <a
                        target="_blank"
                        href="https://design.google.com/icons/"
                      >
                        Google
                      </a>
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="card-body">
                        <div className="iframe-container d-none d-lg-block">
                          <iframe src="https://design.google.com/icons/">
                            <p>Your browser does not support iframes.</p>
                          </iframe>
                        </div>
                        <div className="col-md-12 d-none d-sm-block d-md-block d-lg-none d-block d-sm-none text-center ml-auto mr-auto">
                          <h5>
                            The icons are visible on Desktop mode inside an
                            iframe. Since the iframe is not working on Mobile
                            and Tablets please visit the icons on their original
                            page on Google. Check the
                            <a
                              href="https://design.google.com/icons/"
                              target="_blank"
                            >
                              Material Icons
                            </a>
                          </h5>
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
              {/*  <!-- <li class="header-title">Want more components?</li> */}
              <li className="button-container">
                <a
                  href="https://www.creative-tim.com/product/material-dashboard-pro"
                  target="_blank"
                  className="btn btn-warning btn-block"
                >
                  Get the pro version
                </a>
              </li>
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
export default Icons;
