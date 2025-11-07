// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between mb-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-hero mb-4">
            Welcome to NoteWise
          </h1>
          <p className="text-lg text-black mb-6">
            Your personal note-taking and productivity dashboard, fully synced with your account.
          </p>
          <Link
            to="/dashboard"
            className="bg-hero text-bg px-6 py-3 rounded hover:bg-headingSub transition-all duration-300 transform hover:scale-105"
          >
            Go to Dashboard
          </Link>
        </div>
        <div className="lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
          <img
            src="https://sharanyaari.wordpress.com/wp-content/uploads/2016/08/tumblr_m0gqmeah6u1r6svhdo1_1280.gif"
            alt="Hero"
            className="rounded-lg shadow-lg w-full max-w-md animate-scaleIn"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-bg p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-bold text-hero mb-2">Secure Notes</h2>
          <p className="text-black">
            All your notes are saved securely with encryption and JWT authentication.
          </p>
        </div>
        <div className="bg-bg p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-bold text-hero mb-2">Fast Access</h2>
          <p className="text-black">
            Quickly add, edit, and delete your notes with a clean and intuitive interface.
          </p>
        </div>
        <div className="bg-bg p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-bold text-hero mb-2">Responsive Design</h2>
          <p className="text-black">
            Works perfectly on desktop, tablet, and mobile devices with a consistent theme.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
