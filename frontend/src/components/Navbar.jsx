// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ user ,setUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="bg-hero shadow-md font-poppins sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-bg font-bold text-2xl tracking-wide">
              NoteWise
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-bg hover:text-headingSub transition duration-300 ease-in-out"
            >
              Home
            </Link>
            {user && (
              <Link
                to="/dashboard"
                className="text-bg hover:text-headingSub transition duration-300 ease-in-out"
              >
                Dashboard
              </Link>
            )}
            {!user && (
              <>
                <Link
                  to="/login"
                  className="text-bg hover:text-headingSub transition duration-300 ease-in-out"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-bg hover:text-headingSub transition duration-300 ease-in-out"
                >
                  Register
                </Link>
              </>
            )}
            {user && (
              <button
                onClick={handleLogout}
                className="text-bg hover:text-headingSub transition duration-300 ease-in-out"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-bg focus:outline-none transition-transform duration-300"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-screen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-hero bg-opacity-95 flex flex-col items-center justify-center transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-bg p-2 focus:outline-none"
        >
          <X size={32} />
        </button>

        <Link
          to="/"
          className="text-bg text-3xl mb-6 hover:text-headingSub transition duration-300 transform scale-90 opacity-0 animate-fadeIn"
          style={{ animationDelay: "100ms" }}
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>

        {user && (
          <>
            <Link
              to="/dashboard"
              className="text-bg text-3xl mb-6 hover:text-headingSub transition duration-300 transform scale-90 opacity-0 animate-fadeIn"
              style={{ animationDelay: "200ms" }}
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="text-bg text-3xl mb-6 hover:text-headingSub transition duration-300 transform scale-90 opacity-0 animate-fadeIn"
              style={{ animationDelay: "300ms" }}
            >
              Logout
            </button>
          </>
        )}

        {!user && (
          <>
            <Link
              to="/login"
              className="text-bg text-3xl mb-6 hover:text-headingSub transition duration-300 transform scale-90 opacity-0 animate-fadeIn"
              style={{ animationDelay: "200ms" }}
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-bg text-3xl mb-6 hover:text-headingSub transition duration-300 transform scale-90 opacity-0 animate-fadeIn"
              style={{ animationDelay: "300ms" }}
              onClick={() => setIsOpen(false)}
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
