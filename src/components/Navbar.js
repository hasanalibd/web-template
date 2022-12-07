import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const {user, logOut, loading} = useContext

  const menuItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/add/user'>Add User</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        
        
        { user?.uid ?
          <>
          <li><button onClick={handleSignOut}>Sign Out</button></li>
          <li>
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={ user?.photoURL ? user?.photoURL : `https://placeimg.com/192/192/people`} alt="" />
              </div>
            </div>
            </li>
          </>
          :
          <li><Link to='/signup'>Sign Up</Link></li>
        }
    </>


  const handleSignOut= () =>{
    logOut()
    .then(() =>{})
    .catch(error => console.log(error))
  }

  return (
    <div className="navbar bg-[#149777] text-white shadow-lg flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#149777] rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-2xl">
          Simple Crud
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItem}</ul>
      </div>
      {/* <label
        htmlFor="dashboard-drawer"
        tabIndex={2}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label> */}
    </div>
  );
};

export default Navbar;
