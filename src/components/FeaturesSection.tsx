 // FeaturesSection.tsx
import React from "react";
import { Camera, Music, PawPrint, Filter, Smile, Heart, Tv } from "lucide-react";

type Feature = {
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
  borderColor: string;
  shadowColor: string;
};

const features: Feature[] = [ 
  {
    title: "Seu Sorriso",
    description: "Aquele sorriso espontâneo que sempre ilumina o dia.",
    Icon: Smile,
    borderColor: "border-[#F5DAD1]",
    shadowColor: "shadow-[#F5DAD1]/40",
  },
  {
    title: "Seus Olhos",
    description: "Como você observa tudo com atenção, cada detalhe importa.",
    Icon: Camera,
    borderColor: "border-[#E3D7F0]",
    shadowColor: "shadow-[#E3D7F0]/40",
  },
  {
    title: "Sua Música",
    description: "A forma como suas músicas me acompanham sem esforço.",
    Icon: Music,
    borderColor: "border-[#D1E8F5]",
    shadowColor: "shadow-[#D1E8F5]/40",
  },
  {
    title: "Sua Gentileza",
    description: "Aquela maneira tranquila de cuidar das pessoas ao redor.",
    Icon: PawPrint,
    borderColor: "border-[#D1F5E5]",
    shadowColor: "shadow-[#D1F5E5]/40",
  },
  {
    title: "Sua Beleza",
    description: "Não só por fora, mas na simplicidade de cada gesto.",
    Icon: Filter,
    borderColor: "border-[#F5DAD1]",
    shadowColor: "shadow-[#F5DAD1]/40",
  },
  {
    title: "Seu Coração",
    description: "O cuidado com quem você ama, sempre presente.",
    Icon: Heart,
    borderColor: "border-[#E3D7F0]",
    shadowColor: "shadow-[#E3D7F0]/40",
  },
  {
    title: "Nossos Momentos",
    description: "Os encontros simples que sempre se tornam especiais.",
    Icon: Tv,
    borderColor: "border-[#D1E8F5]",
    shadowColor: "shadow-[#D1E8F5]/40",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-12 px-4 md:py-16 md:px-0 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#181116]">
        Coisas Que Gosto em ti
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4 md:grid-cols-3">
        {features.map((f, idx) => (
          <div
            key={idx}
            className={`flex flex-col gap-3 p-4 rounded-xl ${f.borderColor} bg-white shadow-lg ${f.shadowColor}`}
          >
            <f.Icon className="text-pink-500 w-8 h-8" />
            <h3 className="text-[#181116] font-bold text-base leading-tight">
              {f.title}
            </h3>
            <p className="text-[#89617c] text-sm leading-normal">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
