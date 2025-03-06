import React from 'react';
import { HiLogout } from "react-icons/hi";
const NavBar = () => {
    return (
        <div className="navbar bg-gray-300">
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-5 w-5 stroke-current">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <div className="flex-1">
                <p className='font-bold'>Amar Awaz Admin Panel</p>
            </div>
            <div className="flex-none">
               
                  
                  <p className='font-bold  m-2 flex'> <HiLogout className='mt-[5px]'/>Logout</p>
              
            </div>
        </div>
    );
};

export default NavBar;
