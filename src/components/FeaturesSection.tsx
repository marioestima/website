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
    title: "Your Eye",
    description: "How you capture every precious moment we share.",
    Icon: Camera,
    borderColor: "border-[#F5DAD1]/50",
    shadowColor: "shadow-[#F5DAD1]/40",
  },
  {
    title: "Your Music",
    description: "The way your songs become the soundtrack of my life.",
    Icon: Music,
    borderColor: "border-[#E3D7F0]/50",
    shadowColor: "shadow-[#E3D7F0]/40",
  },
  {
    title: "Your Gentleness",
    description: "Your gentle nature, just like a cuddly cat.",
    Icon: PawPrint,
    borderColor: "border-[#D1E8F5]/50",
    shadowColor: "shadow-[#D1E8F5]/40",
  },
  {
    title: "Your Beauty",
    description: "Like a cherry blossom, you bring beauty to every season.",
    Icon: Filter,
    borderColor: "border-[#D1F5E5]/50",
    shadowColor: "shadow-[#D1F5E5]/40",
  },
  {
    title: "Your Wit",
    description: "Your brilliant mind and the clever ways you make me laugh.",
    Icon: Smile,
    borderColor: "border-[#F5DAD1]/50",
    shadowColor: "shadow-[#F5DAD1]/40",
  },
  {
    title: "Your Heart",
    description: "The deep love and value you have for family.",
    Icon: Heart,
    borderColor: "border-[#E3D7F0]/50",
    shadowColor: "shadow-[#E3D7F0]/40",
  },
  {
    title: "Our Time Together",
    description: "All the cozy nights watching our favorite anime.",
    Icon: Tv,
    borderColor: "border-[#D1E8F5]/50",
    shadowColor: "shadow-[#D1E8F5]/40",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-12 px-4 md:py-16 md:px-0 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#181116] dark:text-white">
        Things I Love About You
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4 md:grid-cols-3">
        {features.map((f, idx) => (
          <div
            key={idx}
            className={`flex flex-col gap-3 p-4 rounded-xl ${f.borderColor} bg-white dark:bg-[#22101c] dark:${f.borderColor.replace('50', '20')} shadow-lg ${f.shadowColor} dark:shadow-pink-200/10`}
          >
            <f.Icon className="text-pink-500 w-8 h-8" />
            <h3 className="text-[#181116] dark:text-white font-bold text-base leading-tight">
              {f.title}
            </h3>
            <p className="text-[#89617c] dark:text-gray-400 text-sm leading-normal">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
