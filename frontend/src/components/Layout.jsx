import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user")) || null;

  return (
    <div className="min-h-screen flex flex-col bg-bg font-poppins">
      <Navbar user={user} />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
