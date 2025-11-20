// FinalLetter.tsx
import React from "react";

const FinalLetter: React.FC = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-12 sm:py-16 md:py-20 font-serif text-[#4a3a45] bg-[#fdf7fb]">

      {/* Fundo suave — sem gradiente intrusivo */}
      <div className="absolute top-0 left-0 w-full h-full bg-pink-50/40 pointer-events-none"></div>

      {/* Conteúdo */}
      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center">
        <h1 className="italic text-3xl md:text-4xl font-normal leading-tight text-center pb-6 text-[#3b2833]">
          For You
        </h1>

        <p className="text-base md:text-lg font-normal leading-relaxed text-center text-[#5b4553] space-y-4">
          <span className="block">
            The days have been long since we last spoke, and in the silence, I’ve had time to reflect. I see where I went wrong, the moments I let slip, and the words I should have said.
          </span>
          <span className="block">
            Every memory we shared is still here. I’m not saying this expecting anything — just hoping it opens a door.
          </span>
          <span className="block">
            I’ve been growing, learning, and becoming someone better. All I’m asking for is a chance to show you that things really can be different.
          </span>
        </p>

        <div className="flex px-4 py-8 justify-center w-full">
          <a
            href="https://wa.me/244974863664?text=Sim%2C%20quero%20voltar%20a%20falar%20contigo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-w-[84px] max-w-[480px] w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-8 bg-pink-500 text-white text-base font-bold leading-normal tracking-tight hover:bg-pink-600 transition-colors duration-300 shadow-lg shadow-pink-300/50"
          >
            <span className="truncate">Can I earn your trust again?</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FinalLetter;
