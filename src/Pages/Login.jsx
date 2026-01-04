import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';
import { IoEyeOff } from 'react-icons/io5';
import { FaEye } from 'react-icons/fa';

const Login = () => {

     const [show,setShow]= useState(false);
    const emailRef=useRef(null)
    const {login,signInWithGoogle,}=use(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();
   

const from = location.state?.from || "/";

    // console.log(location)
    const [err,setErr]=useState("")


    const handlelogin=(e)=>{
         e.preventDefault();
        const form=e.target
        const email =form.email.value
        const password =form.password.value
        // console.log({password,email})

        login(email,password)
        .then((result)=>{
           const user =result.user
           toast.success("Logged In Successfully");
          navigate(from, { replace: true });
        })
        .catch((error) => {
    
    setErr('Password is Incorrect')
  });

    }


    const handleGoogleSignin=()=>{
      signInWithGoogle()
      .then((result)=>{
           const user =result.user
           toast.success("Logged In With Google Successfully");
          navigate(from, { replace: true });
           
        })
         .catch((error) => {
    
    setErr('Happened something wrong')
  });
        
    }
    return (
        <div className="relative min-h-screen flex items-center justify-center p-5 overflow-hidden">
  
  <div 
    className="absolute inset-0 -z-10"
    style={{
      backgroundImage: `url('https://i.ibb.co.com/60CR6RLG/pngtree-wind-blowing-rice-field-rice-ears-swaying-agricultural-crops-close-up-image-786656.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  />

  <div className="absolute inset-0 bg- bg-opacity-60 -z-10"></div>

  <div className="w-full max-w-md">
    <div className="backdrop-blur-md bg-blue bg-opacity-10 rounded-2xl shadow-2xl border border-white border-opacity-30 p-8">
      
      <h2 className="text-3xl font-bold text-center text-white mb-6">
        Login Your Account
      </h2>

      <form onSubmit={handlelogin} className="space-y-5">

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">Email</label>
          <input
            type="email"
            name="email"
            ref={emailRef}
            required
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-gray-300 border-opacity-40 
                       text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 
                       focus:border-transparent transition-all duration-300"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-200 mb-2">Password</label>
          <input
            type={show ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-gray-300 border-opacity-40 
                       text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 
                       focus:border-transparent transition-all duration-300 pr-12"
          />
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-3 top-10 text-gray-300 hover:text-white"
          >
            {show ? <IoEyeOff size={22} /> : <FaEye size={22} />}
          </button>
        </div>

        {err && <p className="text-red-400 text-center font-medium">{err}</p>}

        <button type="button" className="text-sm text-green-400 hover:text-green-300 link">
          Forget Password?
        </button>

        {/* Log In Button */}
        <button
          type="submit"
          className="w-full py-4 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold 
                     hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 
                     shadow-lg"
        >
          Log In
        </button>

        {/* Google Sign In */}
        <button
          onClick={handleGoogleSignin}
          type="button"
          className="w-full py-4 rounded-lg bg-blue bg-opacity-20 backdrop-blur-md border border-gray-300 border-opacity-40 
                     text-white font-semibold flex items-center justify-center gap-3 
                     hover:bg-opacity-30 transform hover:scale-105 transition-all duration-300"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-6 h-6"
          />
          Continue with Google
        </button>

        {/* Sign Up Link */}
        <p className="text-center text-gray-300 mt-6">
          Don’t Have An Account?{' '}
          <Link to="/register" className="text-green-400 font-bold hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;