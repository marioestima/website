// FinalLetter.tsx
import React from "react";

const FinalLetter: React.FC = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-12 sm:py-16 md:py-20 font-serif text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-900">

      {/* Background atmosphere */}
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-pink-100/50 via-purple-100/50 to-blue-100/50 dark:from-pink-900/10 dark:via-purple-900/10 dark:to-blue-900/10 opacity-50 z-0"></div>
      <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-pink-200/20 dark:bg-pink-700/10 blur-3xl animate-spin-slow"></div>
      <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-blue-200/20 dark:bg-blue-700/10 blur-3xl animate-spin-slow-reverse"></div>

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center">
        <h1 className="italic text-3xl md:text-4xl font-normal leading-tight text-center pb-6">
          For You
        </h1>
        <p className="text-base md:text-lg font-normal leading-relaxed text-center space-y-4">
          <span className="block">
            The days have been long since we last spoke, and in the silence, I've had a lot of time to reflect. I see now where I went wrong, the moments I let slip by, and the words I should have said.
          </span>
          <span className="block">
            Every memory we shared is a treasure I hold close, a reminder of the beautiful connection we had. I understand if my words aren't enough, but I hope they can be a start.
          </span>
          <span className="block">
            I've been working on myself, on being the person you always deserved. All I'm asking for is a chance, a single opportunity to show you that things can be different, that we can find our way back to the warmth we once knew.
          </span>
        </p>

        <div className="flex px-4 py-8 justify-center w-full">
          <button className="flex min-w-[84px] max-w-[480px] w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-8 bg-pink-500 text-white text-base font-bold leading-normal tracking-tight hover:bg-pink-600 transition-colors duration-300 shadow-lg shadow-pink-300/50">
            <span className="truncate">Can I earn your trust again?</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalLetter;
