import { useEffect, useState } from "react";
import { IGame } from "./game/game.interface";
import { gameService } from "./game/game.service";

export function useGame() {
  const [data, setData] = useState<IGame[]>([]);

  useEffect(() => {
    gameService.getMany().then(setData);
  }, []);
  return { data };
}
