import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  const navStyle = {
    backgroundColor: '#f0f0f0',
    padding: '1rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  };

  const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'space-around'
  };

  const liStyle = {
    margin: 0,
    padding: '0.5rem 1rem',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold'
  };

  return (
    <div>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <Link to='/books' style={linkStyle}><li style={liStyle}>Home</li></Link>
          <Link to='/login' style={linkStyle}><li style={liStyle}>Login</li></Link>
          <Link to='/signin' style={linkStyle}><li style={liStyle}>Signin</li></Link>
        </ul>
      </nav>
      <Outlet />
      <ToastContainer />
    </div>
  );
}

export default Layout;