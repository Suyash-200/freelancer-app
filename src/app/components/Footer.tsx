  import {
    FiHeart,
    FiInstagram,
    FiTwitter,
    FiLinkedin,
    FiGithub,
  } from "react-icons/fi";

  export function Footer() {
    return (
          <footer className="flex flex-col md:flex-row flex-wrap justify-between items-center gap-4 md:gap-6 py-6 mt-10 px-6 md:px-14 text-sm font-medium text-orange-50 border-t border-orange-50 border-opacity-20">
        
        {/* Left: Name */}
        <div className="font-semibold text-orange-50 uppercase text-center md:text-left">
          Erica JONES
        </div>

        {/* Middle: Made with love */}
        <p className="tracking-wide flex items-center justify-center text-center">
        All rights reserved @ericajonestemplate
        </p>

        {/* Right: Links */}
        <nav className="flex flex-col sm:flex-row gap-3 sm:gap-8 tracking-wide underline items-center">
          <a
            href="#privacy"
            className="hover:text-orange-400 transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#cookies"
            className="hover:text-orange-400 transition-colors"
          >
            Cookie Policy
          </a>
        </nav>
      </footer>
    );
  }
