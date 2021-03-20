import React from 'react';
import Link from 'next/link';
const Sidebar = () =>{
    return(
        <div>
          <div class="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
          <Link href='/' as='/'>
          <div class="logo"> <a href="index.html" class="simple-text logo-normal"><img src="http://blogs.edf.org/energyexchange/files/2017/08/book-clipart.png" 
              style={{"height":"50px"}}/>IJCIS<span>.</span></a></div>
               
        </Link>
           <div class="sidebar-wrapper">
        <ul class="nav">
        <Link  href='/admin' as='/admin'><li class="nav-item active  ">
            <a class="nav-link" href="./admin">
              <i class="material-icons">dashboard</i>
              <p>Dashboard</p>
            </a>
          </li>
          </Link>
          <Link  href='/admin/user' as='/admin/user'>
          <li class="nav-item ">
            <a class="nav-link" href="/admin/user">
              <i class="material-icons">person</i>
              <p>User Profile</p>
            </a>
          </li></Link>
          <Link  href='/admin/tables' as='/admin/tables'>
          <li class="nav-item ">
            <a class="nav-link" href="/admin/tables">
              <i class="material-icons">content_paste</i>
              <p>Table List</p>
            </a>
          </li></Link>
          <Link  href='/admin/typography' as='/admin/typography'>
          <li class="nav-item ">
            <a class="nav-link" href="/admin/typography">
              <i class="material-icons">library_books</i>
              <p>Typography</p>
            </a>
          </li></Link>
          <Link  href='/admin/icons' as='/admin/icons'>
          <li class="nav-item ">
            <a class="nav-link" href="/admin/icons">
              <i class="material-icons">bubble_chart</i>
              <p>Icons</p>
            </a>
          </li></Link>
          <Link  href='/admin/notifications' as='/admin/notifications'>
          <li class="nav-item ">
            <a class="nav-link" href="/admin/notifications">
              <i class="material-icons">notifications</i>
              <p>Notifications</p>
            </a>
          </li></Link>
        </ul>
      </div>
      </div>
        </div>
    )
}
export  {Sidebar};