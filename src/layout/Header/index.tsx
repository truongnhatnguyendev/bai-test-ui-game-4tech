import { IMAGES } from "assets";
import { CountdownTimer } from "components/CountdownTimer";
import { BsArrowRight } from "react-icons/bs";
import { LanguageSelector } from "components/Select/Language/LanguageSelector";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useScrollTo } from "hooks/useScrollTo";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();
  const menus = [
    { label: t("menu.about"), to: "about" },
    { label: t("menu.games"), to: "games" },
    { label: t("menu.partners"), to: "partners" },
    { label: t("menu.contact"), to: "/" },
  ];

  const scrollTo = useScrollTo();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        backgroundImage: `url(${IMAGES.banner}) `,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative",
      }}
      className="sm:h-[1018px] h-[608px]"
    >
      <header
        className=" text-white sm:h-[162px] h-[112px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.5) -25%, rgba(0, 0, 0, 0) 100%)",
          // backdropFilter: "blur(10px)",
        }}
      >
        <div className="flex items-center justify-between sm:mx-12 mx-6  pt-5">
          <div className="font-bold sm:w-[108px] sm:h-[64px] w-16 h-10">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 53 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.0144 30.777L21.0464 22.5728H17.7979L18.2305 20.7152H26.969L26.5433 22.5728H23.7059L21.674 30.777H19.0144Z"
                fill="white"
              />
              <path
                d="M25.1242 30.777L27.5819 20.7152H34.6374L34.1106 22.5596H29.9029L29.3736 24.7544H33.4933L33.0744 26.5129H28.9617L28.3978 28.9325H32.8076L32.1798 30.777H25.1242Z"
                fill="white"
              />
              <path
                d="M40.8194 30.6287C40.6859 30.6596 40.4994 30.6904 40.2599 30.7213C40.025 30.7521 39.7694 30.7808 39.4931 30.8072C39.2214 30.8336 38.9451 30.8557 38.6641 30.8733C38.3878 30.8909 38.1391 30.8998 37.9181 30.8998C37.2872 30.8998 36.7253 30.8403 36.2326 30.7213C35.7398 30.6023 35.323 30.4105 34.9822 30.1461C34.6414 29.8817 34.3812 29.5379 34.2016 29.1148C34.022 28.6873 33.9322 28.1672 33.9322 27.5546C33.9322 27.3166 33.9437 27.0676 33.9668 26.8076C33.9898 26.5476 34.0289 26.2721 34.0842 25.9812L34.3121 24.8309C34.4872 23.9274 34.7335 23.1892 35.0513 22.6163C35.3737 22.0389 35.7651 21.5872 36.2256 21.261C36.6862 20.9305 37.2181 20.7035 37.8214 20.5801C38.4293 20.4567 39.1086 20.395 39.8592 20.395C40.0803 20.395 40.3267 20.4038 40.5984 20.4215C40.8701 20.4391 41.1372 20.4611 41.3997 20.4876C41.6668 20.514 41.9109 20.5449 42.1319 20.5801C42.3576 20.611 42.7347 20.7407 42.859 20.776L42.4333 22.4775C42.2583 22.4642 41.9661 22.451 41.7589 22.4378C41.5517 22.4246 41.3352 22.4113 41.1096 22.3981C40.8885 22.3849 40.6628 22.3761 40.4326 22.3717C40.2069 22.3629 39.9859 22.3585 39.7694 22.3585C39.378 22.3585 39.0303 22.3959 38.7263 22.4708C38.427 22.5458 38.1622 22.6846 37.9319 22.8873C37.7062 23.0857 37.5128 23.3611 37.3516 23.7137C37.1951 24.0619 37.0638 24.5114 36.9579 25.0623L36.7299 26.2126C36.647 26.6622 36.6056 27.0368 36.6056 27.3365C36.6056 27.6538 36.647 27.916 36.7299 28.1232C36.8128 28.3259 36.9349 28.4868 37.096 28.6058C37.2618 28.7248 37.4645 28.8085 37.7039 28.857C37.948 28.9011 38.2266 28.9231 38.5398 28.9231C38.7563 28.9231 38.9796 28.9209 39.2099 28.9165C39.4401 28.9077 39.6681 28.8989 39.8938 28.89C40.1194 28.8812 40.3382 28.8702 40.55 28.857C40.7619 28.8394 41.1574 28.8239 41.3324 28.8107L40.8194 30.6287Z"
                fill="white"
              />
              <path
                d="M48.1999 30.777L49.0815 26.5394H45.0291L43.9523 30.777H41.4948L43.7504 20.7152H46.2078L45.3676 24.6156H49.521L50.5564 20.7152H53.0001L50.6435 30.777H48.1999Z"
                fill="white"
              />
              <path
                d="M1.13474 4.41379C0.898745 7.40433 3.78965 8.87752 5.26461 9.24029C4.35997 8.93745 3.47827 7.44218 3.15051 6.73241C4.34686 7.42641 7.57537 8.80496 10.9186 8.76711C14.2618 8.72925 15.7204 10.234 16.0318 10.9911L10.132 11.5116L13.2294 11.7955L14.606 12.7419L17.6051 12.174C22.9542 12.3633 24.7504 16.2277 24.9798 18.1362L22.5216 17.2845C18.195 16.0731 12.9835 18.01 10.9186 19.1299L12.9835 17.2845C5.11711 19.0636 1.08557 24.2403 0.0531033 26.6062C-0.37955 29.8617 1.93777 30.8018 3.15051 30.8649H15.7368C17.0741 30.8649 17.5395 30.0763 17.6051 29.6819L18.2934 27.0321C19.0013 24.9122 17.4739 24.6662 16.6217 24.8081C14.9174 24.7766 11.0071 24.7324 9.00115 24.8081C6.99522 24.8838 6.42818 24.0826 6.3954 23.6725C6.31674 21.7797 8.09979 20.9911 9.00115 20.8334L8.70616 22.0636C12.1281 18.5431 16.294 17.7892 17.9492 17.8523C17.9492 17.8523 24.3079 18.0258 25.7665 18.7987C25.0978 13.1204 20.2764 11.2277 17.9492 10.9911C16.2579 8.94692 12.9508 8.27815 11.5086 8.19928C10.7219 7.36648 11.6069 7.15827 12.1477 7.15827H19.5717C20.791 7.15827 21.1286 6.71663 21.1449 6.49581L22.8166 2.09518C23.5245 0.997389 22.7182 0.849125 22.2266 0.912217H3.69132C2.93746 0.833352 1.37073 1.42326 1.13474 4.41379Z"
                fill="white"
              />
              <path
                d="M5.6582 9.71353C1.92165 9.71353 0.39753 7.06369 0.102539 5.73877V8.6252C1.83315 10.0637 4.5274 9.95013 5.6582 9.71353Z"
                fill="white"
              />
              <path
                d="M7.91979 13.2151C3.67193 12.9123 0.938346 14.0353 0.102539 14.6347V17.9943C0.102539 15.1552 5.31404 13.6252 7.91979 13.2151Z"
                fill="white"
              />
            </svg>
          </div>
          <button
            className="md:hidden flex items-center justify-center p-2 -ml-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg width="28" height="28" viewBox="0 0 20 20" fill="none">
              <rect y="4" width="20" height="2" rx="1" fill="white" />
              <rect y="9" width="20" height="2" rx="1" fill="white" />
              <rect y="14" width="20" height="2" rx="1" fill="white" />
            </svg>
          </button>
          <nav className="hidden md:flex justify-between text-sm h-10 w-[710px] font-medium leading-5 items-center">
            {menus.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollTo(item.to)}
                className="uppercase text-[#CAD3E1] tracking-[0.42px]"
              >
                {item.label}
              </button>
            ))}
            <LanguageSelector />
          </nav>
        </div>
        <div className="sm:w-[860px] z-20 sm:h-[522px] w-[343px] flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="font-black sm:text-[80px] text-[40px] text-center sm:leading-[120px] font-playfair leading-13 tracking-[0.6px]">
            {t("header.title")}
          </div>
          <div className="sm:w-[756px] sm:h-[150px] font-playfair w-[343px] flex items-center justify-center pt-2">
            <CountdownTimer />
          </div>
          <div className="flex flex-col items-center justify-center text-center pt-8 text-white rounded-xl max-w-[560px] mx-auto shadow-lg">
            <p className="text-lg md:text-lg font-normal mb-6 leading-[126%] font-montserrat">
              {t("header.subTitle")}
            </p>
            <form className="w-full max-w-xl">
              <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-md">
                <input
                  type="email"
                  placeholder={t("header.inputText")}
                  className="flex-1 px-5 py-3 text-black outline-none"
                />
                <button className="px-4 py-3  text-gray-700 hover:opacity-90">
                  <BsArrowRight size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* <div className="flex absolute sm:bottom-3 sm:left-0 sm:translate-0 sm:w-[838px] sm:h-[838px] w-[343px] h-[343px] left-1/2 -translate-x-1/4 -bottom-49 ">
          <img src={IMAGES.fairy} alt="" className="w-full h-full" />
        </div> */}
        {isOpen && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col px-6 py-4">
            <div className="flex justify-between items-center">
              <LanguageSelector />
              <button
                onClick={() => setIsOpen(false)}
                className="text-black p-2"
              >
                <IoMdClose size={30} />
              </button>
            </div>

            {/* Menu items */}
            <div className="mt-10 flex flex-col gap-6 text-center">
              {menus.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setIsOpen(false);
                    scrollTo(item.to);
                  }}
                  className="border-t border-gray-300 pt-4 text-black font-semibold text-lg"
                >
                  {item.label.toUpperCase()}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
      <div className="relative h-[808px] overflow-hidden">
        <div className="flex z-10 absolute sm:top-0 sm:left-0 sm:translate-0 sm:w-[838px] sm:h-[838px] w-[343px] h-[343px] left-1/2 -translate-x-1/4 top-88 ">
          <img src={IMAGES.fairy} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};
