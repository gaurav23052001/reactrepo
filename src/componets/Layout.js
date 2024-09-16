// Layout.js
import React from 'react';
import Header from './Header';
import Sidenav from './SideNav';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="main-container">
        <Sidenav />
        <main className="content-area">
          <Outlet /> {/* This will render the content based on the route */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
