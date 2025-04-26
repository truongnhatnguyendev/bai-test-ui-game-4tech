import { IGame } from "services/game/game.interface";
import { useNavigate } from "react-router-dom";

export const GameCard = ({ title, image, description, id }: Partial<IGame>) => {
  const navigator = useNavigate();

  const handleClick = (id?: number) => {
    if (!id) return;
    navigator(`/games/${id}`);
  };

  return (
    <div
      onClick={() => handleClick(id)}
      className="overflow-hidden relative font-montserrat text-white rounded-xl sm:w-[410px] sm:h-[560px] w-full h-[268px] cursor-pointer aspect-3/2"
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute z-50 bottom-7 flex flex-col items-start sm:px-5 px-2 ">
        <span className="text-center sm:text-5xl text-2xl font-bold leading-tight">
          {title}
        </span>
        <span className="font-normal sm:text-sm text-xs sm:mt-5 mt-1">
          {description}
        </span>
      </div>
    </div>
  );
};
