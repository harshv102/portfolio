import React from "react";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="text-center">
        <p className="mb-2">
          © {new Date().getFullYear()} Harsh Vardhan. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 text-xl">
          <a
            href="https://github.com/harshv102"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 flex items-center space-x-1"
          >
            <FaGithub />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/harsh-vardhan-aba190208"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 flex items-center space-x-1"
          >
            <FaLinkedin />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          <a
            href="mailto:hv638737@gmail.com"
            className="hover:text-blue-400 flex items-center space-x-1"
          >
            <MdEmail />
            <span className="hidden sm:inline">Email</span>
          </a>

          <a
            href="tel:+91 6386936737, +91 7607343791"
            className="hover:text-blue-400 flex items-center space-x-1"
          >
            <FaPhoneAlt />
            <span className="hidden sm:inline">tel:+91 6386936737, +91 7607343791</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
