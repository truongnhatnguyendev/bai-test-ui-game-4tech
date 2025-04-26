import { PartnerCard } from "components/PartnerCard";
import { Swiper, SwiperSlide } from "swiper/react";

import { LOGOS } from "assets";
import { Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";

export function Partners() {
  const { t } = useTranslation();
  const partners = [
    {
      id: 1,
      logo: LOGOS.partner,
    },
    {
      id: 2,
      logo: LOGOS.partner,
    },
    {
      id: 3,
      logo: LOGOS.partner,
    },
    {
      id: 4,
      logo: LOGOS.partner,
    },
    {
      id: 5,
      logo: LOGOS.partner,
    },
    {
      id: 6,
      logo: LOGOS.partner,
    },
    {
      id: 7,
      logo: LOGOS.partner,
    },
    {
      id: 8,
      logo: LOGOS.partner,
    },
    {
      id: 9,
      logo: LOGOS.partner,
    },
    {
      id: 10,
      logo: LOGOS.partner,
    },
  ];
  return (
    <div className=" sm:h-[478px] h-[242px] flex flex-col justify-center items-center bg-[#F6F6F6] w-full">
      <div className="sm:text-6xl text-4xl font-black text-black sm:mb-16 mb-4 font-playfair">
        {t("partner")}
      </div>
      <div className="sm:mx-10 sm:h-24 h-[72px] container mx-auto flex justify-center relative">
        <button className="custom-prev absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 z-10 bg-white rounded-xl p-2 shadow-md">
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button className="custom-next absolute right-4  sm:right-10 top-1/2 -translate-y-1/2 z-10 bg-white rounded-xl p-2 shadow-md">
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <Swiper
          breakpoints={{
            0: {
              spaceBetween: 10,
            },
            1240: {
              spaceBetween: 20,
            },
          }}
          slidesPerView={"auto"}
          className="sm:h-[100px] h-[72px] sm:w-[1360px] w-full"
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          modules={[Navigation]}
        >
          {partners.map((game) => (
            <SwiperSlide key={game.id} style={{ width: "auto" }}>
              <PartnerCard logo={game.logo} id={game.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
