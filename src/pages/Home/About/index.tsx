import { FaUsers } from "react-icons/fa";
import { LuCalendarClock, LuGamepad2 } from "react-icons/lu";

import { ICONS, IMAGES } from "assets";
import { useTranslation } from "react-i18next";

export const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-6xl mx-auto flex flex-col sm:gap-10 gap-5">
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
      <div className="sm:mt-55 mt-44">
        <div className="relative">
          <img
            src={IMAGES.map}
            alt="map"
            className="w-full h-auto object-cover"
          />
          <div className="sm:w-[533px] sm:h-[437px] w-[300px] h-[243px] flex absolute sm:translate-x-1/2 sm:-top-50 sm:left-0 top-[-130px] translate-x-1/4 left-0">
            <img src={IMAGES.lllustrator} alt="lllustrator" />
          </div>
          <div className="absolute top-0 left-0 w-[18px] translate-x-[100%] translate-y-[100%]">
            <img
              src={ICONS.location}
              alt="iconmap1"
              className="w-full h-full rotate-12"
            />
          </div>

          <div className="absolute top-0 left-0 w-[33px] sm:translate-x-[300px] sm:translate-y-[345px]">
            <img
              src={ICONS.location}
              alt="iconmap2"
              className="w-full h-full"
            />
          </div>

          <div className="absolute top-0 left-0 w-[43px] sm:translate-x-[730px] sm:translate-y-[200px]">
            <img
              src={ICONS.location}
              alt="iconmap3"
              className="w-full h-full"
            />
          </div>

          <div className="absolute top-0 left-0 w-[52px] sm:translate-x-[250px] sm:translate-y-[200px]">
            <img
              src={ICONS.location}
              alt="iconmap4"
              className="w-full h-full"
            />
          </div>
          <div
            className="flex absolute bottom-50 h-[100px] w-full"
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
