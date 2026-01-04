import { Link, NavLink, Outlet } from "react-router";
import {
  MdDashboard,
  MdLogout,
  MdMenuOpen,
  MdOutlineArticle,
} from "react-icons/md";
import { FaHome, FaUserCircle, FaHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GiPlantSeed } from "react-icons/gi";
import { AuthContext } from "../context/AuthContext";
import { useState, use } from "react";
import { toast } from "react-toastify";

const DashboardLayout = () => {
  const { user, logout } = use(AuthContext);
  const [open, setOpen] = useState(false);
// console.log(user)
  const handleLogout = () => {
    logout()
      .then(() => toast.success("Sign-out Successful"))
      .catch(console.log);
  };

  const isActive = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition
     ${isActive
        ? "bg-green-600 text-white"
        : "text-gray-700 hover:bg-green-100 hover:text-green-700"}`;

  return (
    <div className="min-h-screen bg-gray-100">

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40
        transform ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 transition-transform duration-300`}
      >
        <div className="p-5 border-b">
          <h2 className="text-2xl font-extrabold text-green-700">
            Krishi<span className="text-lime-500">Link</span>
          </h2>
          <p className="text-sm text-gray-500">Dashboard</p>

          <Link
            to="/"
            className="flex items-center gap-2 mt-4 px-3 py-2 rounded-md font-semibold text-green-700 hover:bg-green-100"
          >
            <FaHome /> Home
          </Link>
        </div>

        <nav className="p-3 space-y-1">
          <NavLink to=""  end className={isActive}>
            <MdDashboard /> Overview
          </NavLink>

          <NavLink to="add-corps" className={isActive}>
            <GiPlantSeed /> Add Crops
          </NavLink>

          <NavLink to="my-interests" className={isActive}>
            <FaHeart /> My Interests
          </NavLink>

          <NavLink to="my-posts" className={isActive}>
            <MdOutlineArticle /> My Posts
          </NavLink>

          <NavLink to="profile" className={isActive}>
            <CgProfile /> My Profile
          </NavLink>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-red-600 hover:bg-red-100 transition"
          >
            <MdLogout /> Logout
          </button>
        </nav>
      </aside>

      <div className="md:ml-64">

        <header className="fixed top-0 left-0 md:left-64 right-0 h-16 bg-white shadow-sm z-30 flex items-center justify-between px-4">
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
          >
            <MdMenuOpen />
          </button>

          <h1 className="text-lg font-bold text-green-700">
            Dashboard
          </h1>

          <div className="flex items-center gap-2">
            {user?.photoURL ? (
              <img
                src={user?.photoURL}
                alt="profile"
                className="w-9 h-9 rounded-full border"
              />
            ) : (
              <FaUserCircle className="text-2xl text-green-600" />
            )}
            <span className="hidden sm:block text-sm font-medium">
              {user?.displayName || "User"}
            </span>
          </div>
        </header>

        <main className="">
          <Outlet />
        </main>
      </div>

      {/* responsive for mobile*/}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}
    </div>
  );
};

export default DashboardLayout;
