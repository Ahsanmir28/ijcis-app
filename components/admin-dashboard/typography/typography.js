import React from 'react';
import Head from 'next/head';
import SecureTemplate from '../../layouts/secure-template';
const Typography = () =>{
    return(
        <div>
<Head>
<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"></link>
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
  <link href="../assets/css/material-dashboard.css?v=2.1.2" rel="stylesheet" />
</Head>
<div class="">
 
   
      {/* <!--
        Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"

        Tip 2: you can also add an image using data-image tag
    --> */}
     <SecureTemplate title="Typography">
     {/*  <!-- Navbar --> */}
     
     {/*  <!-- End Navbar --> */}
      <div class="content">
        <div class="container-fluid">
          <div class="card">
            <div class="card-header card-header-primary">
              <h4 class="card-title">Material Dashboard Heading</h4>
              <p class="card-category">Created using Roboto Font Family</p>
            </div>
            <div class="card-body">
              <div id="typography">
                <div class="card-title">
                  <h2>Typography</h2>
                </div>
                <div class="row">
                  <div class="tim-typo">
                    <h1>
                      <span class="tim-note">Header 1</span>The Life of Material Dashboard </h1>
                  </div>
                  <div class="tim-typo">
                    <h2>
                      <span class="tim-note">Header 2</span>The Life of Material Dashboard</h2>
                  </div>
                  <div class="tim-typo">
                    <h3>
                      <span class="tim-note">Header 3</span>The Life of Material Dashboard</h3>
                  </div>
                  <div class="tim-typo">
                    <h4>
                      <span class="tim-note">Header 4</span>The Life of Material Dashboard</h4>
                  </div>
                  <div class="tim-typo">
                    <h5>
                      <span class="tim-note">Header 5</span>The Life of Material Dashboard</h5>
                  </div>
                  <div class="tim-typo">
                    <h6>
                      <span class="tim-note">Header 6</span>The Life of Material Dashboard</h6>
                  </div>
                  <div class="tim-typo">
                    <p>
                      <span class="tim-note">Paragraph</span>
                      I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>
                  </div>
                  <div class="tim-typo">
                    <span class="tim-note">Quote</span>
                    <blockquote class="blockquote">
                      <p>
                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.
                      </p>
                      <small>
                        Kanye West, Musician
                      </small>
                    </blockquote>
                  </div>
                  <div class="tim-typo">
                    <span class="tim-note">Muted Text</span>
                    <p class="text-muted">
                      I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
                    </p>
                  </div>
                  <div class="tim-typo">
                    <span class="tim-note">Primary Text</span>
                    <p class="text-primary">
                      I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>
                  </div>
                  <div class="tim-typo">
                    <span class="tim-note">Info Text</span>
                    <p class="text-info">
                      I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>
                  </div>
                  <div class="tim-typo">
                    <span class="tim-note">Success Text</span>
                    <p class="text-success">
                      I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>
                  </div>
                  <div class="tim-typo">
                    <span class="tim-note">Warning Text</span>
                    <p class="text-warning">
                      I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
                    </p>
                  </div>
                  <div class="tim-typo">
                    <span class="tim-note">Danger Text</span>
                    <p class="text-danger">
                      I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>
                  </div>
                  <div class="tim-typo">
                    <h2>
                      <span class="tim-note">Small Tag</span>
                      Header with small subtitle
                      <br/>
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
  <div class="fixed-plugin">
    <div class="dropdown show-dropdown">
      <a href="#" data-toggle="dropdown">
        <i class="fa fa-cog fa-2x"> </i>
      </a>
      <ul class="dropdown-menu">
        <li class="header-title"> Sidebar Filters</li>
        <li class="adjustments-line">
          <a href="javascript:void(0)" class="switch-trigger active-color">
            <div class="badge-colors ml-auto mr-auto">
              <span class="badge filter badge-purple" data-color="purple"></span>
              <span class="badge filter badge-azure" data-color="azure"></span>
              <span class="badge filter badge-green" data-color="green"></span>
              <span class="badge filter badge-warning" data-color="orange"></span>
              <span class="badge filter badge-danger" data-color="danger"></span>
              <span class="badge filter badge-rose active" data-color="rose"></span>
            </div>
            <div class="clearfix"></div>
          </a>
        </li>
        <li class="header-title">Images</li>
        <li class="active">
          <a class="img-holder switch-trigger" href="javascript:void(0)">
            <img src="../assets/img/sidebar-1.jpg" alt=""/>
          </a>
        </li>
        <li>
          <a class="img-holder switch-trigger" href="javascript:void(0)">
            <img src="../assets/img/sidebar-2.jpg" alt=""/>
          </a>
        </li>
        <li>
          <a class="img-holder switch-trigger" href="javascript:void(0)">
            <img src="../assets/img/sidebar-3.jpg" alt=""/>
          </a>
        </li>
        <li>
          <a class="img-holder switch-trigger" href="javascript:void(0)">
            <img src="../assets/img/sidebar-4.jpg" alt=""/>
          </a>
        </li>
        <li class="button-container">
          <a href="https://www.creative-tim.com/product/material-dashboard" target="_blank" class="btn btn-primary btn-block">Free Download</a>
        </li>
        {/* <!-- <li class="header-title">Want more components?</li>
            <li class="button-container">
                <a href="https://www.creative-tim.com/product/material-dashboard-pro" target="_blank" class="btn btn-warning btn-block">
                  Get the pro version
                </a>
            </li> --> */}
        <li class="button-container">
          <a href="https://demos.creative-tim.com/material-dashboard/docs/2.1/getting-started/introduction.html" target="_blank" class="btn btn-default btn-block">
            View Documentation
          </a>
        </li>
        <li class="button-container github-star">
          <a class="github-button" href="https://github.com/creativetimofficial/material-dashboard" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
        </li>
        <li class="header-title">Thank you for 95 shares!</li>
        <li class="button-container text-center">
          <button id="twitter" class="btn btn-round btn-twitter"><i class="fa fa-twitter"></i> &middot; 45</button>
          <button id="facebook" class="btn btn-round btn-facebook"><i class="fa fa-facebook-f"></i> &middot; 50</button>
          <br/>
          <br/>
        </li>
      </ul>
    </div>
  </div>

</div>
        </div>
    )
}
export default Typography;