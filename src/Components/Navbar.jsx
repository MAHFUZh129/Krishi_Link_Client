import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.jpg'
import { IoHomeOutline, IoLogIn, IoLogOut } from 'react-icons/io5';
import { GiPlantSeed, GiWheat } from "react-icons/gi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegPlusSquare } from 'react-icons/fa';
import { MdOutlineSpaceDashboard } from 'react-icons/md';


const Navbar = () => {

  const { user, logout } = use(AuthContext)

  // console.log(user)
  const hanldeLogout = () => {
    logout()
      .then(() => {
        toast.success("Sign-out Successful")
      })
      .catch((error) => {
        console.log(error)
      });
  }
  const isActive = ({ isActive }) =>
    `flex items-center py-2 rounded-lg font-medium transition
     ${isActive
      ? "bg-green-600 text-white"
      : "text-gray-700 hover:bg-green-100 hover:text-green-700"}`;

  return (

    <div className='navbar py-2 min-h-0 
sticky top-0 z-70 bg-green-50 
shadow-md border-b border-green-200 ' >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm space-y-2 font-semibold dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >

            <li  ><NavLink className={isActive}
              to='/'> <IoHomeOutline />
              Home</NavLink></li>
            <li><NavLink className={isActive} to='/all-corps'> <GiPlantSeed />
              All Corps</NavLink></li>


            {user && (
              <li><NavLink className={isActive} to="/dashboard"><MdOutlineSpaceDashboard />
                Dashboard</NavLink></li>

            )}

            <li><NavLink className={isActive} to='/about'><AiOutlineInfoCircle />
              About Us</NavLink></li>
            <li><NavLink className={isActive} to='/contact'><FiPhoneCall />
              Contact</NavLink></li>
          </ul>
        </div>
        <Link to={"/"} className="flex items-center gap-1 text-xl font-bold">
          <div className='flex items-center gap-2'>
            <img className='h-10 w-13 rounded-full hidden md:block ' src={logo} alt="" />
            <h3 className="text-2xl italic md:text-2xl font-bold 
text-green-700 drop-shadow-md tracking-wide">
              Krishi<span className="text-lime-500 ">Link
              </span>
            </h3>


          </div>

        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal space-x-2  ">
          <li  ><NavLink className={isActive}
            to='/'>  <IoHomeOutline />
            Home</NavLink></li>
          <li><NavLink className={isActive} to='/all-corps'><GiPlantSeed />

            All Corps</NavLink></li>

          {user && (
            <li><NavLink className={isActive} to="/dashboard"><MdOutlineSpaceDashboard />
              Dashboard</NavLink></li>

          )}
          <li><NavLink className={isActive} to='/about'><AiOutlineInfoCircle />
            About Us</NavLink></li>
          <li><NavLink className={isActive} to='/contact'><FiPhoneCall />

            Contact</NavLink></li>

        </ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
          <Link onClick={hanldeLogout}
            to={"/login"}
            className="btn rounded-full border-gray-300 text-[15px] py-5  btn-sm bg-gradient-to-r from-green-600 via-lime-500 to-green-600  text-white"
          >
            {" "}
            <IoLogOut /> LogOut
          </Link>

        ) : (
          <Link
            to={"/login"}
            className="btn rounded-full border-gray-300 text-[15px] py-5  btn-sm bg-gradient-to-r from-green-600 via-lime-500 to-green-600 text-white"
          >
            {" "}
            <IoLogIn /> Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;