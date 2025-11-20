// HeroCarousel.tsx
import React from "react";

interface Memory {
  year: string;
  description: string;
  imageUrl: string;
}

const memories: Memory[] = [
  {
    year: "2019",
    description: "Tudo começou aqui. As coisas estavam confusas, mas algo me dizia que era importante.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6DO3zDm-IQLutTesS6MjOYLVMrYcsClK28mmb3IPqlv5loLdThWSshxZyxFwC58u_wQfGQxk3G2WADfst78ghZOwYmjZ6vN58abBnoUqi7eDRLJEq3RnTafpLKI5ao6Xuvj7ukBCnR6Bj4aV8EJ8vIlyPrZKaV4sn0LjIbrg_u4NvxdYkGYwDZiDnWdB7AjOec4XEHgJEg-htlMMOoICVSTR4SKJ7z2tcPuiu6MbDdS1cCpVkKQgOANEGsLIhghkIUeQOcBH4CyU",
  },
  {
    year: "2020",
    description: "As coisas continuaram ambíguas. Crescemos, mas ainda havia incertezas.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6DO3zDm-IQLutTesS6MjOYLVMrYcsClK28mmb3IPqlv5loLdThWSshxZyxFwC58u_wQfGQxk3G2WADfst78ghZOwYmjZ6vN58abBnoUqi7eDRLJEq3RnTafpLKI5ao6Xuvj7ukBCnR6Bj4aV8EJ8vIlyPrZKaV4sn0LjIbrg_u4NvxdYkGYwDZiDnWdB7AjOec4XEHgJEg-htlMMOoICVSTR4SKJ7z2tcPuiu6MbDdS1cCpVkKQgOANEGsLIhghkIUeQOcBH4CyU",
  },
  {
    year: "2022",
    description: "Comecei a perceber que era ela com quem eu queria estar. Mas ainda faltava coragem e clareza.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6DO3zDm-IQLutTesS6MjOYLVMrYcsClK28mmb3IPqlv5loLdThWSshxZyxFwC58u_wQfGQxk3G2WADfst78ghZOwYmjZ6vN58abBnoUqi7eDRLJEq3RnTafpLKI5ao6Xuvj7ukBCnR6Bj4aV8EJ8vIlyPrZKaV4sn0LjIbrg_u4NvxdYkGYwDZiDnWdB7AjOec4XEHgJEg-htlMMOoICVSTR4SKJ7z2tcPuiu6MbDdS1cCpVkKQgOANEGsLIhghkIUeQOcBH4CyU",
  },
  {
    year: "2024",
    description: "Ainda não se resolveu tudo, mas quero que as coisas mudem e possamos construir nosso futuro juntos.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6DO3zDm-IQLutTesS6MjOYLVMrYcsClK28mmb3IPqlv5loLdThWSshxZyxFwC58u_wQfGQxk3G2WADfst78ghZOwYmjZ6vN58abBnoUqi7eDRLJEq3RnTafpLKI5ao6Xuvj7ukBCnR6Bj4aV8EJ8vIlyPrZKaV4sn0LjIbrg_u4NvxdYkGYwDZiDnWdB7AjOec4XEHgJEg-htlMMOoICVSTR4SKJ7z2tcPuiu6MbDdS1cCpVkKQgOANEGsLIhghkIUeQOcBH4CyU",
  },
];

const HeroCarousel: React.FC = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-linear-to-br from-[#f8c5d8] to-[#e0d0f0] dark:from-[#2c2a4a] dark:to-[#4a2a44] p-6">
      <header className="text-center mb-10">
        <h1 className="text-[#fdeef4] text-3xl font-bold">Our Story</h1>
        <p className="text-[#fdeef4]/70 mt-2">Swipe to travel through our memories</p>
      </header>

      <main className="flex justify-center">
        <div className="snap-container flex gap-6 overflow-x-auto py-4">
          {memories.map((memory) => (
            <div key={memory.year} className="snap-item flex flex-col gap-4 rounded-xl min-w-[90%] max-w-sm bg-black/40 backdrop-blur-md p-4">
              <div
                className="w-full aspect-video rounded-xl bg-cover bg-center"
                style={{ backgroundImage: `url(${memory.imageUrl})` }}
              />
              <div>
                <p className="text-[#fdeef4] text-2xl font-bold">{memory.year}</p>
                <p className="text-[#fdeef4]/80 text-base">{memory.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="w-full mt-10 flex flex-col items-center gap-4">
        <div className="flex justify-center gap-3">
          {memories.map((_, index) => (
            <div
              key={index}
              className="h-2 w-2 rounded-full bg-[#fdeef4]/30"
            />
          ))}
        </div>
        <p className="text-[#fdeef4]/70 text-sm text-center">Our journey continues...</p>
      </footer>
    </div>
  );
};

export default HeroCarousel;
