// AnniversaryCountdown.tsx
import React, { useEffect, useState } from "react";

const messages = [
  "Happy Anniversary! 🎉",
  "Cheers to another year of memories! 🥂",
  "May our love continue to grow! 💖",
  "Another year stronger together! 💪",
  "Celebrating our journey of love! 🌹",
  "To endless laughter and happiness! 😄",
  "A new year of adventures awaits! ✨",
  "Remembering our special moments! 💌",
  "Forever and always, my love! ❤️"
];

const AnniversaryCountdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isBirthday, setIsBirthday] = useState(false);
  const [yearIndex, setYearIndex] = useState(0);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const birthdayThisYear = new Date(currentYear, 7, 13, 0, 0, 0); // August 13
      let nextBirthday = birthdayThisYear;

      if (now >= birthdayThisYear) {
        // if passed, next birthday is next year
        nextBirthday = new Date(currentYear + 1, 7, 13, 0, 0, 0);
      }

      const diff = nextBirthday.getTime() - now.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
      setIsBirthday(diff <= 0);

      // Determine which message to show based on years passed
      const passedYears = currentYear - 2015; // ou outro ano inicial
      setYearIndex(passedYears % messages.length);
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      {!isBirthday ? (
        <div className="w-full max-w-4xl mx-auto rounded-xl p-6 sm:p-8 lg:p-12 bg-linear-to-br from-pink-200 via-purple-200 to-blue-200 dark:from-pink-900 dark:via-purple-900 dark:to-blue-900">
          <h1 className="text-3xl sm:text-4xl font-bold text-center pb-6 text-gray-900 dark:text-gray-100">
            Until Our Next Memory
          </h1>
          <div className="flex w-full max-w-lg gap-2 sm:gap-4 py-6">
            {["days", "hours", "minutes", "seconds"].map((unit) => (
              <div key={unit} className="flex grow flex-col items-stretch gap-2">
                <div className="flex h-20 sm:h-24 items-center justify-center rounded-xl bg-white/40 backdrop-blur-sm">
                  <p className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
                    {timeLeft[unit as keyof typeof timeLeft]}
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-center text-gray-700 dark:text-gray-300 capitalize">
                  {unit}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-700 dark:text-gray-300 max-w-md mx-auto">
            A celebration that echoes through time, until the end of the world.
          </p>
        </div>
      ) : (
        <div className="w-full max-w-4xl mx-auto rounded-xl p-6 sm:p-8 lg:p-12 mt-8 bg-linear-to-br from-purple-200 via-pink-200 to-pink-100 dark:from-purple-900 dark:via-pink-900 dark:to-pink-800">
          <div className="flex flex-col items-center justify-center text-center min-h-[300px]">
            <span className="material-symbols-outlined text-4xl sm:text-5xl text-pink-500">
              celebration
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 pt-4">
              {messages[yearIndex]}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 pt-2">
              And so, a new year of memories begins...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnniversaryCountdown;
