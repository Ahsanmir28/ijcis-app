import React from 'react';
import Head from 'next/head';
import SecureTemplate from '../../layouts/secure-template';

const Typography = () => {
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
        {/* <!--
        Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"

        Tip 2: you can also add an image using data-image tag
    --> */}
        <SecureTemplate title="Typography">
          {/*  <!-- Navbar --> */}

          {/*  <!-- End Navbar --> */}
          <div className="content">
            <div className="container-fluid">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title">Material Dashboard Heading</h4>
                  <p className="card-category">
                    Created using Roboto Font Family
                  </p>
                </div>
                <div className="card-body">
                  <div id="typography">
                    <div className="card-title">
                      <h2>Typography</h2>
                    </div>
                    <div className="row">
                      <div className="tim-typo">
                        <h1>
                          <span className="tim-note">Header 1</span>The Life of
                          Material Dashboard{' '}
                        </h1>
                      </div>
                      <div className="tim-typo">
                        <h2>
                          <span className="tim-note">Header 2</span>The Life of
                          Material Dashboard
                        </h2>
                      </div>
                      <div className="tim-typo">
                        <h3>
                          <span className="tim-note">Header 3</span>The Life of
                          Material Dashboard
                        </h3>
                      </div>
                      <div className="tim-typo">
                        <h4>
                          <span className="tim-note">Header 4</span>The Life of
                          Material Dashboard
                        </h4>
                      </div>
                      <div className="tim-typo">
                        <h5>
                          <span className="tim-note">Header 5</span>The Life of
                          Material Dashboard
                        </h5>
                      </div>
                      <div className="tim-typo">
                        <h6>
                          <span className="tim-note">Header 6</span>The Life of
                          Material Dashboard
                        </h6>
                      </div>
                      <div className="tim-typo">
                        <p>
                          <span className="tim-note">Paragraph</span>
                          leader of a company that ends up being worth billions
                          of dollars, because I got the answers. I understand
                          culture. I am the nucleus. I think that’s a
                          responsibility that I have, to push possibilities, to
                          show people, this is the level that things could be
                          at.
                        </p>
                      </div>
                      <div className="tim-typo">
                        <span className="tim-note">Quote</span>
                        <blockquote className="blockquote">
                          <p>
                            I will be the leader of a company that ends up being
                            worth billions of dollars, because I got the
                            answers. I understand culture. I am the nucleus. I
                            think that’s a responsibility that I have, to push
                            possibilities, to show people, this is the level
                            that things could be at.
                          </p>
                          <small>Kanye West, Musician</small>
                        </blockquote>
                      </div>
                      <div className="tim-typo">
                        <span className="tim-note">Muted Text</span>
                        <p className="text-muted">
                          I will be the leader of a company that ends up being
                          worth billions of dollars, because I got the
                          answers...
                        </p>
                      </div>
                      <div className="tim-typo">
                        <span className="tim-note">Primary Text</span>
                        <p className="text-primary">
                          I will be the leader of a company that ends up being
                          worth billions of dollars, because I got the
                          answers...{' '}
                        </p>
                      </div>
                      <div className="tim-typo">
                        <span className="tim-note">Info Text</span>
                        <p className="text-info">
                          I will be the leader of a company that ends up being
                          worth billions of dollars, because I got the
                          answers...{' '}
                        </p>
                      </div>
                      <div className="tim-typo">
                        <span className="tim-note">Success Text</span>
                        <p className="text-success">
                          I will be the leader of a company that ends up being
                          worth billions of dollars, because I got the
                          answers...{' '}
                        </p>
                      </div>
                      <div className="tim-typo">
                        <span className="tim-note">Warning Text</span>
                        <p className="text-warning">
                          I will be the leader of a company that ends up being
                          worth billions of dollars, because I got the
                          answers...
                        </p>
                      </div>
                      <div className="tim-typo">
                        <span className="tim-note">Danger Text</span>
                        <p className="text-danger">
                          I will be the leader of a company that ends up being
                          worth billions of dollars, because I got the
                          answers...{' '}
                        </p>
                      </div>
                      <div className="tim-typo">
                        <h2>
                          <span className="tim-note">Small Tag</span>
                          Header with small subtitle
                          <br />
                          <small>Use "small" tag for the headers</small>
                        </h2>
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
export default Typography;
