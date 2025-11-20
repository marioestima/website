// import React from "react";
import { Camera, PenLine, AtSign } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white shadow-md border-t border-gray-200 py-6 flex flex-col items-center gap-4 rounded-xl">
      {/* Links */}
      <div className="flex flex-col items-center text-sm text-gray-600 gap-1">
        <a href="#" className="hover:text-gray-800 transition">Home</a>
        <a href="#" className="hover:text-gray-800 transition">About</a>
        <a href="#" className="hover:text-gray-800 transition">Contact</a>
      </div>

      {/* Ícones */}
      <div className="flex items-center gap-6 text-gray-500 text-lg\">
        <Camera className="w-5 h-5 hover:text-gray-700 transition\" />
        <PenLine className="w-5 h-5 hover:text-gray-700 transition\" />
        <AtSign className="w-5 h-5 hover:text-gray-700 transition\" />
      </div>

      {/* Texto final */}
      <p className="text-xs text-gray-500">© 2024 Weza Memories. All rights reserved.</p>
    </footer>
  );
}
