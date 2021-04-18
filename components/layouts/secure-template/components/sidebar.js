import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div>
      <div
        className="sidebar"
        data-color="purple"
        data-background-color="white"
        data-image="../assets/img/sidebar-1.jpg"
      >
        <Link href="/" as="/">
          <div className="logo">
            {' '}
            <a href="index.html" className="simple-text logo-normal">
              <img
                src="http://blogs.edf.org/energyexchange/files/2017/08/book-clipart.png"
                style={{ height: '50px' }}
              />
              IJCIS<span>.</span>
            </a>
          </div>
        </Link>
        <div className="sidebar-wrapper">
          <ul className="nav">
            {/*<Link href="/admin/journal-publishing/[journalId]" as={`/admin/journal-publishing/${jounral._id}`}>*/}
            <Link href="/admin" as="/admin">
              <li className={`nav-item ${pathname === '/admin' && 'active'}  `}>
                <a className="nav-link" href="./admin">
                  <i className="material-icons">dashboard</i>
                  <p>Dashboard</p>
                </a>
              </li>
            </Link>
            <Link href="/admin/user" as="/admin/user">
              <li className={`nav-item ${pathname === '/admin/user' && 'active'}  `}>
                <a className="nav-link" href="/admin/user">
                  <i className="material-icons">person</i>
                  <p>User Profile</p>
                </a>
              </li>
            </Link>
            <Link href="/admin/tables" as="/admin/tables">
              <li className={`nav-item ${pathname === '/admin/tables' && 'active'}  `}>
                <a className="nav-link" href="/admin/tables">
                  <i className="material-icons">content_paste</i>
                  <p>Users & Roles</p>
                </a>
              </li>
            </Link>
            <Link href="/admin/icons" as="/admin/icons">
              <li className={`nav-item ${pathname === '/admin/icons' && 'active'}  `}>
                <a className="nav-link" href="/admin/icons">
                  <i className="material-icons">bubble_chart</i>
                  <p>Statistics</p>
                </a>
              </li>
            </Link>
            <Link href="/admin/journal-publishing" as="/admin/journal-publishing">
              <li className={`nav-item ${pathname === '/admin/journal-publishing' && 'active'}  `}>
                <a className="nav-link" href="/admin/notifications">
                  <i className="material-icons">Publish</i>
                  <p>Journal Publishing</p>
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};
export { Sidebar };
