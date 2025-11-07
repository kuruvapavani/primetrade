import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-hero text-bg font-poppins py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left mb-4 md:mb-0">
          &copy; {year} NoteWise | Crafted with ❤️ by Kuruva Pavani
        </p>

        <div className="flex space-x-6">
          <a
            href="https://github.com/kuruvapavani"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-headingSub transition-colors duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/kuruva-pavani-2109k/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-headingSub transition-colors duration-300"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
