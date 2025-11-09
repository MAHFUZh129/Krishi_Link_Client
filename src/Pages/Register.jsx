import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { IoEyeOff } from 'react-icons/io5';
import { FaEye } from 'react-icons/fa';

const Register = () => {
    const { setUser, createUser, signInWithGoogle } = use(AuthContext);


    const [err, setErr] = useState('');
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const handleReg = (e) => {
        e.preventDefault();
        const form = e.target

        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        // console.log(password,name,email,photo)


        // Password validation logic
        if (password.length < 6) {
            setErr('Password must be at least 6 characters long.');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setErr('Password must contain at least one uppercase letter.');
            return;
        }
        if (!/[a-z]/.test(password)) {
            setErr('Password must contain at least one lowercase letter.');
            return;
        }


        createUser(email, password)
            .then((result) => {
                const user = result.user
                setUser({ ...user, displayName: name, photoURL: photo })
                toast.success("Signed In Successfully");
                navigate('/')


            })
            .catch((error) => {
                toast.error("Something went wrong");
            });
    }

    const handleGoogleSignin = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user
                console.log(user)
                toast.success("Sign Up With Google Successfully");
                navigate('/')

            })
            .catch((error) => {

                setErr('Happened something wrong')
            });

    }

    return (
        <div>
        <div className="relative min-h-screen flex items-center justify-center p-5 overflow-hidden">
  
  <div 
    className="absolute inset-0 -z-10"
    style={{
      backgroundImage: `url('https://i.ibb.co.com/60CR6RLG/pngtree-wind-blowing-rice-field-rice-ears-swaying-agricultural-crops-close-up-image-786656.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  />

  <div className="absolute inset-0  bg-opacity-70 -z-10"></div>

  <div className="w-full max-w-md">
    <div className="backdrop-blur-md bg-blue bg-opacity-10 rounded-2xl shadow-2xl border border-white border-opacity-30 p-8">
      
      <h2 className="text-3xl font-bold text-center text-white mb-6">
        SignUp Your Account
      </h2>

      <form onSubmit={handleReg} className="space-y-5">

        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-gray-300 border-opacity-40 
                       text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 
                       focus:border-transparent transition-all duration-300"
          />
        </div>

        {/* Photo URL */}
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">Photo URL</label>
          <input
            type="text"
            name="photo"
            placeholder="Enter your photo url"
            className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-gray-300 border-opacity-40 
                       text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 
                       focus:border-transparent transition-all duration-300"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-80 border border-gray-300 border-opacity-40 
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
            required
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

        {/* Sign Up Button */}
        <button
          type="submit"
          className="w-full py-4 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold 
                     hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 
                     shadow-lg"
        >
          Sign Up
        </button>

        {/* Google Sign In */}
        <button
          onClick={handleGoogleSignin}
          type="button"
          className="w-full py-4 rounded-lg bg--600 bg-opacity-20 backdrop-blur-md border border-gray-300 border-opacity-40 
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

        {/* Login Link */}
        <p className="text-center text-gray-300 mt-6">
          Already Have An Account?{' '}
          <Link to="/login" className="text-green-400 font-bold hover:underline">
            Log In
          </Link>
        </p>
      </form>
    </div>
  </div>
</div>
        </div>

    );
};

export default Register;