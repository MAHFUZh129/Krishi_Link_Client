import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { FaUserEdit } from 'react-icons/fa';

const Profile = () => {
    const {user}=use(AuthContext)
    return (
         <div className="min-h-screen gap-5 py-5 bg-gradient-to-b from-blue-100 via-amber-300 to-green-300 flex justify-center items-center px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl p-6 rounded-md">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <div className="avatar py-8">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={
                  user?.photoURL
                    ? user.photoURL
                    : "https://cdn-icons-png.flaticon.com/512/847/847969.png"
                }
                alt="User Profile"
              />
            </div>
          </div>

          {/* User Info */}
          <h2 className="text-2xl font-bold mt-4 text-pink-700">
            {user?.displayName }
          </h2>
          <p className="text-gray-600">{user?.email }</p>

          {/*  update Button */}
          <div className="mt-6">
           <button
              className="btn btn-primary btn-wide flex items-center gap-2 font-semibold"
            >
              <FaUserEdit /> Update Profile
            </button>
          </div>
        </div> 

        {/*  Extra details  */}
        <div className="divider font-bold mt-8">Account Info</div>
        <div className="space-y-2 text-left">
          <p>
            <span className="font-semibold">User ID:</span>{" "}
            <span className='text-green-800 font-semibold'>{user?.uid } </span>
          </p>
          <p>
            <span className="font-semibold">Email Verified:</span>{" "}
            <span className='text-green-900 font-semibold'>{user?.emailVerified ? " Yes" : " No"}</span>
          </p>
          <p>
            <span className="font-semibold">Provider:</span>{" "}
           <span className='text-green-800 font-semibold'>  {user?.providerData?.[0]?.providerId || "Email/Password"}</span>
          </p>
        </div>
      </div>
    </div>
    );
};

export default Profile;