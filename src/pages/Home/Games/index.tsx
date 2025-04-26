import { GameCard } from "components/Card/Card";
import { useWindowSize } from "hooks/useWindowSize";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useGame } from "services/game.hook";

export const OurGames = () => {
  const { t } = useTranslation();
  const { width } = useWindowSize();

  const { data: games } = useGame();

  function chunkArray<T>(arr: T[], columns: number): T[][] {
    const result: T[][] = Array.from({ length: columns }, () => []);
    arr.forEach((item, index) => {
      result[index % columns].push(item);
    });
    return result;
  }

  const colGroups = useMemo(() => {
    const columns = width < 768 ? 2 : 4;
    return chunkArray(games, columns);
  }, [games, width]);

  return (
    <section className="max-w-[1920px]">
      <h2 className="text-6xl font-black text-center mb-8 font-playfair">
        {t("ourGames.title")}
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-4xl mx-auto font-montserrat px-2">
        {t("ourGames.subTitle")}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:p-20 p-5 w-full">
        {colGroups.map((group, index) => (
          <div
            key={index}
            className={`flex flex-col gap-7 w-full items-center ${
              index === 1 || index === 3 ? "sm:mt-30 mt-10" : ""
            }`}
          >
            {group.map((item) => (
              <GameCard key={item.id} {...item} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
