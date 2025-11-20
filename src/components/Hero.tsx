import React, { useState } from "react";
import { Menu, ChevronsDown, X } from "lucide-react";

const Hero: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <section
      className="relative flex min-h-screen w-full flex-col items-center justify-center text-center"
      style={{
        backgroundImage:
          "radial-gradient(circle at center, rgba(224,187,228,0.4) 0%, rgba(250,218,221,0) 70%)",
      }}
    >
      {/* Menu Button */}
      <header className="absolute top-6 right-6 z-20">
        <button
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 dark:bg-black/20 text-black dark:text-white backdrop-blur-sm transition-transform hover:scale-110"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={28} />
        </button>
      </header>

      {/* Sidebar Animado */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-30 p-6 flex flex-col transform transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Botão fechar */}
        <button
          className="self-end mb-4 transition-transform hover:scale-110"
          onClick={() => setSidebarOpen(false)}
        >
          <X size={28} className="text-black dark:text-white" />
        </button>

        {/* Links */}
        <nav className="flex flex-col gap-4 mt-4 text-black dark:text-white font-display">
          <a href="#hero" className="hover:text-pink-500 transition-colors">Home</a>
          <a href="#gallery" className="hover:text-pink-500 transition-colors">Gallery</a>
          <a href="#timeline" className="hover:text-pink-500 transition-colors">Timeline</a>
          <a href="#features" className="hover:text-pink-500 transition-colors">Things I Love</a>
          <a href="#letter" className="hover:text-pink-500 transition-colors">Letter</a>
        </nav>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center gap-6 px-4">
        {/* Nome em coreano */}
        <h1
          className="text-[10rem] font-black font-playfair text-black dark:text-white leading-none"
          style={{
            textShadow:
              "0 0 15px rgba(238,43,173,0.5), 0 0 25px rgba(224,187,228,0.4)",
          }}
        >
          웨자
        </h1>

        {/* Subtítulo e frase */}
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl sm:text-4xl font-black font-playfair text-black dark:text-grey-400">
            For Weza Tatiana (웨자)
          </h2>
          <p className="text-base sm:text-lg font-display text-black dark:text-grey-400">
            A memory time never erased.
          </p>
        </div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/30 dark:bg-black/30 text-black dark:text-white animate-bounce">
          <ChevronsDown size={28} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
