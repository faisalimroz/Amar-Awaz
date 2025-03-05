import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../Components/Navbar';


const Layout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
    return (
        <div>
          <NavBar></NavBar>
            <div className='min-h-screen'>
            <Outlet/>
            </div>
        
        </div>
    );
};

export default Layout;