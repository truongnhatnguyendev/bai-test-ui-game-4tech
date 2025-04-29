import { useEffect, useRef, useState } from "react";
import { AboutUs } from "./About";
import { OurGames } from "./Games";
import { Partners } from "./Partners";

export function Home() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY.current;

      if (direction !== isScrollingDown) {
        setIsScrollingDown(direction);
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isScrollingDown]);

  const handleClick = () => {
    if (window.scrollY < 50) {
      // Nếu đang ở đầu trang → scroll xuống cuối
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    } else {
      // Ngược lại → scroll lên đầu
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <main className="space-y-8">
      <button
        onClick={handleClick}
        className="bg-white rounded-full z-40 shadow-lg fixed top-1/2  right-5 h-12 w-12 flex items-center justify-center focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 text-gray-800 transform transition-transform duration-300 ${
            isScrollingDown ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div id="about" className="sm:mt-10 mt-50 container mx-auto">
        <AboutUs />
      </div>
      <div id="games" className=" mt-10">
        <OurGames />
      </div>
      <div id="partners" className=" mt-10">
        <Partners />
      </div>
    </main>
  );
}
