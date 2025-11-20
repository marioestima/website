import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-12 border-t border-gray-300 dark:border-gray-700 py-6 bg-gradient-to-t from-transparent via-transparent to-white/20 dark:to-gray-900/20 flex flex-col items-center">
      <p className="text-center text-sm text-gray-700 dark:text-gray-300">
        💌 Made with love for Weza Memories
      </p>
      <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-1">
        © {new Date().getFullYear()} All rights reserved
      </p>
      <div className="flex mt-3 gap-2">
        <span className="h-2 w-2 rounded-full bg-pink-400 animate-pulse"></span>
        <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse delay-200"></span>
        <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse delay-400"></span>
      </div>
    </footer>
  );
};

export default Footer;
