// GallerySection.tsx
import React from "react";

type GalleryItem = {
  titlePt: string;
  titleEn: string;
  titleKr: string;
  titleJp: string;
  imageUrl: string;
  altText: string;
};

const galleryItems: GalleryItem[] = [
  {
    titlePt: "Saudade do Pôr do Sol",
    titleEn: "Sunset Longing",
    titleKr: "일몰에 대한 그리움",
    titleJp: "夕日の思い",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFP8LDNunc2jiLc0phlJGe-82zhOfSxhoOBqDmwBy_5ri9tME4sklg6JiHghR4IZg2VUrqmhn7lfBBGiUuF3xovuSLz0t_wFifYJ02z9WSsQE3bmYQVpoB8qlk1FN-LcgXJ4pRq-FxZ83FpYZ4bEgXQhpttotFXa67J5S76Xf9iUapezcymVCiVAJtmESFlMKL2fSC-WZ9MiH4RsGtQzKP88cR68ZTyO0T7bMD2Nlx21nTw03rZpPf2CnhRIs-wRX2fe_8MkdBYgE",
    altText: "A vibrant sunset with hues of orange and pink over a calm sea."
  },
  {
    titlePt: "Céu de Algodão Doce",
    titleEn: "Cotton Candy Sky",
    titleKr: "솜사탕 하늘",
    titleJp: "綿菓子の空",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGL4XgSACV52cZIHVa0shOYQR_DIZM1rvPZDjIcJUIytOqAvyNSgSLk_NN_RbES140OJLoGE6sgd4_G35VjdUKECx33XLegHAoN3ejo5o-qhdgDrDG0ddkzS1c6qhOLWjKGI_Vz51Gw-hepOpvxfuYp5F7-JD0sXH2OzwHhGRF3raJV_uyK5EsM-XCQyOVynsoQ_KcDG4B6KvsdaG1kGASVyP_h-0QkeMjDcvELZyGk4fD2OVgLAMA62xvj-XF9xzg7uASD7iKktQ",
    altText: "Soft, fluffy clouds resembling cotton candy in a pastel blue and pink sky."
  },
  {
    titlePt: "Amigo Peludo",
    titleEn: "Furry Friend",
    titleKr: "털복숭이 친구",
    titleJp: "毛むくじゃらの友達",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD90KJBogiyfBhfHnt7KmUhh5tONqdweHbhH8OPCHT9vOQN49QoVMnSFLUuoyHst_arsCwIGxQPAWolCTdj9Aq_kZfHh7l4tljAH2m_WbPLnKOBleBtDy6PrYxSvU6sfYB3YDEb9A3TAYPNOAbISvIOdON4UBW3rYdsZXqlBPYZARLaqMZq28zPz5T67QqCaEYR2xTWx50-Uic_cicwJkoj2_t8vT1LxvpPRNI-9l40M0Lb1d-e7EywXJOd7Rc9UUh1HJJxdxLTVNU",
    altText: "A cute, fluffy puppy with expressive eyes sitting in a green field."
  },
  {
    titlePt: "Sussurros da Manhã",
    titleEn: "Morning Whispers",
    titleKr: "아침의 속삭임",
    titleJp: "朝のささやき",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBI2y2w7tRJPXs-AJuxZjy6_r1UljcmKeD3rTT1vITqIRE9O52FK7VOCk1O39sl6erzqv29jhMZSEDEqR9sIyTiEdVz54yBdEPODzKCb3d2Z8bbETpRsHAWTw7YYZo_WFEbS_2rzIop6xVgRohdtrAiXg9vdyf7NX3-Jy4pe_yrTPVhk1rtq3quafSOlcyZb767IN65s1NHiEwFgd8M6joAFS0CcDgCIywEjz7PP0Lox3JntA-oaBDHacP_SrdEm702VoqlLba5Mq8",
    altText: "Sunlight filtering through tree leaves early in the morning, creating a tranquil scene."
  },
  {
    titlePt: "Flores de Sakura",
    titleEn: "Sakura Blooms",
    titleKr: "벚꽃",
    titleJp: "桜の花",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDclQEsh9JuOT4tNBbHmkAOiHaWlt2H7Lv03op1xFlya-AtRJeeIpM9ALyDu7MH3Ca7X4it7aHqrtuHwHvB8JQuNmncj7r4Qvtbm0dNdDMcGXrfRoZc2Qugxery6ydv51RtZgzrS6r0I5tohNdYuPbv8CzQWiCpQtzlO0gPnLxTTElR5_cuGfxlFI4IbCkpr9m9KX66-LiLTnZfDaKE5LqodUyr7_BvXsyyTlisY6VRQ-Z4WBuXDXQ2ugVRxp6jATupDiAza6hwseU",
    altText: "Close-up of pink Sakura cherry blossoms in full bloom against a soft-focus background."
  },
  
 
  {
    titlePt: "Nuvens Sonhadoras",
    titleEn: "Dreamy Clouds",
    titleKr: "꿈꾸는 구름",
    titleJp: "夢見る雲",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9TkP6zlGAvkOk4iOYFYVG07P7fcxmOza5WKe80cv_yhHTJ6cx8Gyzcr4LtImUxMyFIilNn78waLXJq3LK-k8mC4-mN1mRH-rQBEUScv7jjHK4qONuXGN2SOw8C-3N_4ist0bqCZicSanRg1cpqhNj-HtM8WUj1VReZYIbf3_IQ7pcFklBTGgVOMl4GTHgA_99snzMBcR4uaX3190i_ky7fsvgHPsDSyVLI7GcoRsMXvfbVxuWRDN11SF7DAsFGa4miuvR-5GGQ5M",
    altText: "Dreamy, ethereal clouds scattered across a twilight sky."
  },
  {
    titlePt: "Noite Estrelada",
    titleEn: "Starry Night",
    titleKr: "별이 빛나는 밤",
    titleJp: "星空の夜",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDr3Eo81YEYwgxkTbWFOtEJKV8Bd8L1wgCJC1Hss_nx7C12Xaym2Y5tObPKdrbmhIwRUDPCVk7T5AHqP4GoVkXysQzm2srkideIvDMu1sz5TwJqhTHcMb4DC3YHvdNU8mKO_Sfc4K8404gMEnEAn0mSo_EnpQTGI43FaTw2WHy0R6uK__B5-ThGymkqGxkhtk-jgRhMy7Vh1tSV3Ca2SJSPzY06fPJgWxa_ZfycNJbXJkw8i18qPWfHSRVoIcZuMkGtJEUDWTyefPQ",
    altText: "A clear night sky full of bright stars and the milky way galaxy."
  }
];

const GallerySection: React.FC = () => {
  return (
    <section className="py-6 px-4 md:px-0">
      <h2 className="text-[#181116] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
        Gallery
      </h2>
      <div className="grid grid-cols-1 @[480px]:grid-cols-2 @[768px]:grid-cols-3 gap-3">
        {galleryItems.map((item, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-xl">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:blur-sm"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
              aria-label={item.altText}
            ></div>

            <div className="relative flex flex-col justify-end gap-2 p-4 aspect-square rounded-xl transition-shadow duration-300 ease-in-out group-hover:shadow-primary shadow-primary/20"
              style={{ backgroundImage: "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)" }}
            >
              <div className="opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-base font-bold leading-tight w-full line-clamp-2">{item.titlePt}</p>
                <p className="text-white/90 text-sm font-normal leading-tight w-full line-clamp-2">{item.titleEn}</p>
                <p className="text-white/80 text-sm font-normal leading-tight w-full line-clamp-2">{item.titleKr}</p>
                <p className="text-white/70 text-sm font-normal leading-tight w-full line-clamp-2">{item.titleJp}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
