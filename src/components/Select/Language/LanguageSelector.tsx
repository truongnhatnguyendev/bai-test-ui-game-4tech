import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";

import { IMAGES } from "assets";
import { IoMdArrowDropdown } from "react-icons/io";
import { useOutsideClick } from "hooks/useOutsideClick";
import i18n from "i18n";
import { LazyImage } from "components/Image";

const languages = [
  {
    code: "vi",
    label: "Vietnamese",
    flag: IMAGES.vi,
  },
  {
    code: "en",
    label: "English",
    flag: IMAGES.en,
  },
];

export function LanguageSelector() {
  const { containerRef } = useOutsideClick({
    onOutsideClick: () => {
      if (open) {
        setOpen(false);
      }
    },
  });
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  const currentLang = languages.find((lang) => lang.code === selected);

  useEffect(() => {
    const currentLanguage = i18n.language || navigator.language.split("-")[0]; // fallback nếu cần
    i18n.changeLanguage(currentLanguage);
    setSelected(currentLanguage);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative inline-block text-left sm:border-none border border-solid border-[#747e8c] rounded-lg"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-transparent px-2 py-1"
      >
        <LazyImage
          src={currentLang?.flag}
          alt={currentLang?.label}
          className="w-6 h-6"
        />
        <IoMdArrowDropdown className="w-6 h-6 sm:text-white text-black" />
      </button>

      {open && (
        <div className="absolute sm:right-0  mt-2 w-40 bg-white rounded-lg shadow-md z-50 overflow-hidden">
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => {
                setSelected(lang.code);
                i18n.changeLanguage(lang.code);
                setOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {selected === lang.code && (
                <FaCheck className="text-black w-3 h-3" />
              )}
              {selected !== lang.code && <div className="w-3 h-3" />}
              <LazyImage src={lang.flag} alt={lang.label} className="w-6 h-6" />
              <span className="text-sm text-black">{lang.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
