import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bg px-4">
      <h1 className="text-6xl font-bold text-hero mb-4">404</h1>
      <h2 className="text-2xl sm:text-3xl font-semibold text-hero mb-6">
        Page Not Found
      </h2>
      <p className="mb-6 text-center max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-hero text-bg px-6 py-3 rounded hover:bg-headingSub transition-all duration-300 transform hover:scale-105"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
