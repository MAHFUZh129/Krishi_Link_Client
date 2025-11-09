import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { Link, NavLink } from 'react-router';
import { RxAvatar } from 'react-icons/rx';
import logo from '../assets/logo.jpg'
import { IoLogoModelS } from 'react-icons/io';
import { ImBoxAdd } from 'react-icons/im';
import { GoHomeFill } from 'react-icons/go';
import { LuRotate3D } from 'react-icons/lu';
import { FaUser } from 'react-icons/fa';
import { IoLogIn, IoLogOut } from 'react-icons/io5';
import { FaGear } from 'react-icons/fa6';

const Navbar = () => {
    
     const{user,logout} = use(AuthContext)
      const [theme,setTheme]=useState(localStorage.getItem('theme') ||'light')

  useEffect(()=>{
      const html =document.querySelector('html')
      html.setAttribute('data-theme',theme)
      localStorage.setItem('theme',theme)
  },[theme])

  const handleTheme=(checked)=>{
    // console.log(checked)
    setTheme(checked?'dark':'light')
   
  }
        // console.log(user)
        const hanldeLogout=()=>{
              logout()
              .then(() => {
             toast.success("Sign-out Successful")
              })
              .catch((error) => {
                 console.log(error)
              });
        }
    console.log(user)
    return (

         <div className="navbar py-0 min-h-0 z-1 shadow-sm  glass-card max-w-7xl">
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
            className="menu menu-sm  font-semibold dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
              
              <li  ><Link className='text-[16px] hover:text-amber-600' to='/'>Home</Link></li>
                  <li><Link className='text-[16px] hover:text-amber-600' to='/all-corps'>All Corps</Link></li>
    
    {user && (
    <>
      <li><Link className='text-[16px] hover:text-amber-600' to="/add-corps">Add Corps</Link></li>
      <li><Link className='text-[16px] hover:text-amber-600' to="/my-interests">My Interests</Link></li>
      <li><Link className='text-[16px] hover:text-amber-600' to="/my-posts">My Posts</Link></li>
      <li><Link className='text-[16px] hover:text-amber-600' to="/profile">My Profile</Link></li>
    </>
  )}
            
          </ul>
        </div>
        <Link to={"/"} className="flex items-center gap-1 text-xl font-bold">
        <div className='flex items-center gap-2'>
    <img className='h-12 w-15 rounded-full' src={logo} alt="" />
    <h3 className='text-2xl text-green-600 font-bold hidden md:block'>Krishi<span className='text-green-400'>Link</span></h3>
    </div>
        
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal  px-1 gap-5">
            <Link className='text-gray-600 hover:text-amber-600 font-bold ' to='/'>Home</Link>
                  
    <Link className='text-gray-600 font-bold hover:text-amber-600' to='/all-corps'>All Corps</Link>
    
    {
        user &&(<div className='flex  text-gray-600 font-bold gap-5'>
    <Link className='hover:text-amber-600' to='/add-corps'>Add Corps</Link>
    <Link className='hover:text-amber-600' to='/my-interests'>My Interests</Link>
    <Link className='hover:text-amber-600' to='/my-posts'>My Posts</Link>
    <Link className='hover:text-amber-600' to='/profile'>My Profile</Link>
    </div>)}
           
        </ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-9 border-2 border-gray-300 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  referrerPolicy="no-referrer"
                  src={user.photoURL || "https://i.ibb.co.com/CKgngnzm/download-1.png"}
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <div className=" pb-3 border-b border-b-gray-200">
                <li className="text-sm font-bold">{user.displayName}</li>
                <li className="text-xs">{user.email}</li>
              </div>
              
              
              <li className="mt-3">
                <Link className='text-lg font-semibold' to={"/profile"}>
                  <FaUser /> Profile
                </Link>
              </li>
              <li >
                <a className='text-lg font-semibold'>
                  
                  <FaGear /> Settings
                </a>
              </li>
               <input
           onChange={(e) => handleTheme(e.target.checked)}
           type="checkbox"
           defaultChecked={localStorage.getItem('theme') === "dark"}
           className="toggle"/>
              <li>
                <button
                  onClick={hanldeLogout}
                  className="btn btn-xs text-left mt-3 bg-linear-to-r py-4 from-pink-500 to-red-500 text-lg font-semibold text-white"
                >
                  <IoLogOut /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to={"/login"}
            className="btn rounded-full border-gray-300 text-lg py-5  btn-sm bg-linear-to-r from-pink-500 to-red-500 text-white"
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