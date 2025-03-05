import React, { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import NavBar from '../Components/Navbar';
const Layout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
    return (
        <div>
          <NavBar></NavBar>
          <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                  <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li><a>Feed</a></li>
                        <li><Link to='/productrequest'>Product Request</Link></li>
                        <li><a>Remove Products</a></li>
                        <li><a>Promotional Banner</a></li>
                        <li><a>Additional Link</a></li>
                        <li><a>New Notification</a></li>
                        <li><a>Bulk Notification</a></li>
                    </ul>
                </div>
            </div>
        
        </div>
    );
};

export default Layout;