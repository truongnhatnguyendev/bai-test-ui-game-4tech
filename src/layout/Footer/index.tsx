import { IMAGES } from "assets";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { LazyImage } from "components/Image";

const Icons = [
  { label: "Twitter", to: "/", icon: FaTwitter },
  { label: "Facebook", to: "/", icon: FaFacebookSquare },
  { label: "Linkedin", to: "/", icon: FaLinkedin },
];

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer
      className="relative text-white pt-12 font-montserrat"
      style={{
        backgroundImage: `
          linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 31%) 80%),
          linear-gradient(180deg, rgba(0, 10, 255, 1) -40%, rgba(0, 0, 0, 0) 136.61%),
        url('${IMAGES.footer}')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 pb-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Social */}
        <div className="flex flex-col gap-6 w-[163px] justify-center items-center mx-auto md:items-start md:mx-0">
          <div className="w-[163px] h-[96px] items-center">
            <LazyImage src={IMAGES.logo} alt="logo" className="w-full h-full" />
          </div>
          <div className="flex justify-between gap-4">
            {Icons.map((item, index) => (
              <Link key={index} to={item.to} aria-label={item.label}>
                <item.icon className="w-8 h-8" />
              </Link>
            ))}
          </div>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            {t("footer.address.title")}
          </h3>
          <div className="mb-2 flex items-start gap-2">
            <FaLocationDot className="w-12 h-12" />
            <p className="font-normal text-sm">
              {t("footer.address.location")}
            </p>
          </div>
          <div className="flex items-start gap-2">
            <HiMiniDevicePhoneMobile className="w-6 h-6" />
            <p className="font-normal text-sm">
              (+1) 555-0108-000 &nbsp; or &nbsp; (+236) 555-0108
            </p>
          </div>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            {t("footer.subscribe.title")}
          </h3>
          <p className="mb-4 text-sm font-normal">
            {t("footer.subscribe.subTitle")}
          </p>
          <form className="w-full max-w-xl">
            <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-md">
              <input
                type="email"
                placeholder={t("footer.subscribe.inputText")}
                className="flex-1 px-5 py-3 text-black outline-none"
              />
              <button className="px-4 py-3  text-gray-700 hover:opacity-90">
                <BsArrowRight size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-black bg-opacity-80 text-center py-4">
        <p className="text-sm">2017 Copyright. Policy.</p>
      </div>
    </footer>
  );
};
