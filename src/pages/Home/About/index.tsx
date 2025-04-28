import { FaUsers } from "react-icons/fa";
import { LuCalendarClock, LuGamepad2 } from "react-icons/lu";

import { ICONS, IMAGES } from "assets";
import { useTranslation } from "react-i18next";
import "./about.css";
import { useEffect, useRef, useState } from "react";

export const AboutUs = () => {
  const { t } = useTranslation();
  const illustratorRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // chỉ observe 1 lần
        }
      },
      { threshold: 0.1 } // thấy 10% là chạy
    );

    if (illustratorRef.current) {
      observer.observe(illustratorRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section className="max-w-6xl mx-auto flex flex-col sm:gap-20 gap-5 sm:overflow-visible overflow-hidden">
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
        {/* Left Content */}
        <div className="p-5 sm:p-0">
          <h2 className="text-6xl font-black mb-4 font-playfair">
            {t("about.title")}
          </h2>
          <p className="text-gray-500 mb-8 text-sm font-montserrat">
            {t("about.description")}
          </p>
          <div className="flex sm:flex-col gap-10 font-montserrat">
            <div>
              <h3 className="sm:text-[80px] text-[44px] font-bold text-sky-500">
                600<span className="sm:text-4xl text-2xl">M</span>+
              </h3>
              <p className="text-2xl font-bold text-black">{t("about.user")}</p>
            </div>
            <div>
              <h3 className="sm:text-[80px] text-[44px] font-bold text-sky-500">
                135+
              </h3>
              <p className="text-2xl font-bold text-black">{t("about.game")}</p>
            </div>
          </div>
        </div>
        {/* Right Content */}
        <div className="bg-gray-100 p-6 rounded-xs font-montserrat sm:w-[560px] sm:h-[620px] w-full h-[544px] flex justify-center items-center">
          <div className="flex flex-col gap-10 top-[113px] w-[410px]">
            <div className="flex items-start gap-4">
              <div className="bg-teal-50 p-3 rounded-full">
                <LuCalendarClock size={24} className="" />
              </div>
              <div>
                <h4 className="font-bold">{t("about.hours.title")}</h4>
                <p className="text-sm font-normal text-gray-500">
                  {t("about.hours.description")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-teal-50 p-3 rounded-full">
                <LuGamepad2 size={24} className="" />
              </div>
              <div>
                <h4 className="font-bold">{t("about.design.title")}</h4>
                <p className="text-sm font-normal text-gray-500">
                  {t("about.design.description")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-teal-50 p-3 rounded-full">
                <FaUsers size={24} className="" />
              </div>
              <div>
                <h4 className="font-bold">{t("about.team.title")}</h4>
                <p className="text-sm font-normal text-gray-500">
                  {t("about.team.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:mt-96 mt-44">
        <div className="relative sm:h-[428px]">
          <img
            src={IMAGES.map}
            alt="map"
            className="w-full h-full sm:object-cover object-contain"
          />
          <div
            ref={illustratorRef}
            className={`sm:w-[533px] sm:h-[437px] w-[300px] h-[243px] flex absolute sm:translate-x-2/3 sm:-top-92 sm:-left-10 top-[-160px] translate-x-1/4 left-0 ${
              inView ? "animate-slide-in-floating" : "opacity-0"
            }`}
          >
            <img src={IMAGES.lllustrator} alt="lllustrator" />
          </div>

          <div className="absolute sm:top-[6%] top-[20%] left-[21%] sm:w-[52px] w-7">
            <img
              src={ICONS.location}
              alt="iconmap4"
              className="w-full h-full -rotate-20"
            />
          </div>
          <div className="absolute sm:top-[10%] top-[25%] left-[60%] sm:w-[43px] w-5">
            <img
              src={ICONS.location}
              alt="iconmap3"
              className="w-full h-full"
            />
          </div>
          <div className="absolute top-[50%] left-[30%] sm:w-[33px] w-4 ">
            <img
              src={ICONS.location}
              alt="iconmap2"
              className="w-full h-full"
            />
          </div>
          <div className="absolute sm:top-[20%] top-[35%] left-[70%] sm:w-[18px] w-2">
            <img
              src={ICONS.location}
              alt="iconmap1"
              className="w-full h-full rotate-12"
            />
          </div>
          <div className="absolute sm:top-[40%] top-[45%] left-[75%] sm:w-[18px] w-2">
            <img
              src={ICONS.location}
              alt="iconmap5"
              className="w-full h-full rotate-12"
            />
          </div>
          <div className="absolute sm:top-[30%] top-[35%] left-[65%] sm:w-[18px] w-2">
            <img
              src={ICONS.location}
              alt="iconmap6"
              className="w-full h-full rotate-12"
            />
          </div>
          <div
            className="flex absolute bottom-10 h-[100px] w-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0) -26.4%, #FFFFFF 82.58%)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};
