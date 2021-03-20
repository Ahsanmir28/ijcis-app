import React from 'react';
import { Banner } from '../common';
import MarketingTemplate from '../layouts/marketing-template';
import { Slider } from '../common/slider';

const Journals = () => {
  return (
    <div>
      <link href="styles.css?version=1" rel="stylesheet"></link>
      {/* <div class="fh5co-loader"></div> */}

      <div id="page">
        <MarketingTemplate>
          <Slider />
          <div id="fh5co-course">
            <div className="container">
              <div className="row animate-box">
                {/* eslint-disable-next-line max-len */}
                <div className="col-md-6 col-md-offset-3 text-center fh5co-heading">
                  <h2>Our Course</h2>
                  <p>
                    Dignissimos asperiores vitae velit veniam totam fuga
                    molestias accusamus alias autem provident. Odit ab aliquam
                    dolor eius.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 animate-box">
                  <div className="course">
                    <a
                      href="#"
                      className="course-img"
                      style={{ backgroundImage: 'url(images/project-1.jpg);' }}
                    >
                      >
                    </a>
                    <div className="desc">
                      <h3>
                        <a href="#">Web Master</a>
                      </h3>
                      <p>
                        Dignissimos asperiores vitae velit veniam totam fuga
                        molestias accusamus alias autem provident. Odit ab
                        aliquam dolor eius molestias accusamus alias autem
                        provident. Odit ab aliquam dolor eius.
                      </p>
                      <span>
                        <a
                          href="#"
                          className="btn btn-primary btn-sm btn-course"
                        >
                          Take A Course
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="course">
                    <a
                      href="#"
                      className="course-img"
                      style={{
                        'backgroundImage ': 'url(images/project-2.jpg);',
                      }}
                    >
                      >
                    </a>
                    <div className="desc">
                      <h3>
                        <a href="#">Business &amp; Accounting</a>
                      </h3>
                      <p>
                        Dignissimos asperiores vitae velit veniam totam fuga
                        molestias accusamus alias autem provident. Odit ab
                        aliquam dolor eius molestias accusamus alias autem
                        provident. Odit ab aliquam dolor eius.
                      </p>
                      <span>
                        <a
                          href="#"
                          className="btn btn-primary btn-sm btn-course"
                        >
                          Take A Course
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="course">
                    <a
                      href="#"
                      className="course-img"
                      style={{ backgroundImage: 'url(images/project-3.jpg);' }}
                    >
                      >
                    </a>
                    <div className="desc">
                      <h3>
                        <a href="#">Science &amp; Technology</a>
                      </h3>
                      <p>
                        Dignissimos asperiores vitae velit veniam totam fuga
                        molestias accusamus alias autem provident. Odit ab
                        aliquam dolor eius molestias accusamus alias autem
                        provident. Odit ab aliquam dolor eius.
                      </p>
                      <span>
                        <a
                          href="#"
                          className="btn btn-primary btn-sm btn-course"
                        >
                          Take A Course
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="course">
                    <a
                      href="#"
                      className="course-img"
                      style={{ backgroundImage: 'url(images/project-4.jpg);' }}
                    >
                      >
                    </a>
                    <div className="desc">
                      <h3>
                        <a href="#">Health &amp; Psychology</a>
                      </h3>
                      <p>
                        Dignissimos asperiores vitae velit veniam totam fuga
                        molestias accusamus alias autem provident. Odit ab
                        aliquam dolor eius molestias accusamus alias autem
                        provident. Odit ab aliquam dolor eius.
                      </p>
                      <span>
                        <a
                          href="#"
                          className="btn btn-primary btn-sm btn-course"
                        >
                          Take A Course
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="course">
                    <a
                      href="#"
                      className="course-img"
                      style={{ backgroundImage: 'url(images/project-5.jpg);' }}
                    >
                      >
                    </a>
                    <div className="desc">
                      <h3>
                        <a href="#">Science &amp; Technology</a>
                      </h3>
                      <p>
                        Dignissimos asperiores vitae velit veniam totam fuga
                        molestias accusamus alias autem provident. Odit ab
                        aliquam dolor eius molestias accusamus alias autem
                        provident. Odit ab aliquam dolor eius.
                      </p>
                      <span>
                        <a
                          href="#"
                          className="btn btn-primary btn-sm btn-course"
                        >
                          Take A Course
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="course">
                    <a
                      href="#"
                      className="course-img"
                      style={{ backgroundImage: 'url(images/project-6.jpg);' }}
                    >
                      >
                    </a>
                    <div className="desc">
                      <h3>
                        <a href="#">Health &amp; Psychology</a>
                      </h3>
                      <p>
                        Dignissimos asperiores vitae velit veniam totam fuga
                        molestias accusamus alias autem provident. Odit ab
                        aliquam dolor eius molestias accusamus alias autem
                        provident. Odit ab aliquam dolor eius.
                      </p>
                      <span>
                        <a
                          href="#"
                          className="btn btn-primary btn-sm btn-course"
                        >
                          Take A Course
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Banner />
        </MarketingTemplate>
      </div>

      <div className="gototop js-top">
        <a href="#" className="js-gotop">
          <i className="icon-arrow-up"></i>
        </a>
      </div>
    </div>
  );
};
export default Journals;
