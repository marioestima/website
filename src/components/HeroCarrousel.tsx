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
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    year: "2020",
    description: "As coisas continuaram ambíguas. Crescemos, mas ainda havia incertezas.",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    year: "2022",
    description: "Comecei a perceber que era ela com quem eu queria estar. Mas ainda faltava coragem e clareza.",
    imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
  },
  {
    year: "2024",
    description: "Ainda não se resolveu tudo, mas quero que as coisas mudem e possamos construir nosso futuro juntos.",
    imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  },
  {
    year: "2025",
    description: "Estamos aqui, prontos para o próximo capítulo, cheios de sonhos e memórias.",
    imageUrl: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=800&q=80",
  },
];

const HeroCarousel: React.FC = () => {
  return (
    <div className="relative flex flex-col min-h-screen p-6"
         style={{ backgroundColor: "#fef6f7" }} // cor clara fixa
    >
      <header className="text-center mb-10">
        <h1 className="text-[#181116] text-3xl font-bold">Nossa História</h1>
        <p className="text-[#181116]/70 mt-2">Deslize para rever nossas memórias</p>
      </header>

      <main className="flex justify-center">
        <div className="snap-x snap-mandatory flex gap-6 overflow-x-auto py-4">
          {memories.map((memory) => (
            <div
              key={memory.year}
              className="snap-start flex flex-col gap-3 rounded-xl min-w-[90%] max-w-sm border border-[#E3D7F0] shadow-[#E3D7F0]/20 p-4 transition-transform duration-300 hover:scale-105 bg-transparent"
            >
              <div
                className="w-full aspect-video rounded-xl bg-cover bg-center"
                style={{ backgroundImage: `url(${memory.imageUrl})` }}
              />
              <div>
                <p className="text-[#181116] text-2xl font-bold">{memory.year}</p>
                <p className="text-[#89617c] text-sm">{memory.description}</p>
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
              className="h-2 w-2 rounded-full bg-[#E3D7F0]/30"
            />
          ))}
        </div>
        <p className="text-[#89617c] text-sm text-center">Nossa jornada continua...</p>
      </footer>
    </div>
  );
};

export default HeroCarousel;
