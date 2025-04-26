import { IGame } from "./game.interface";

let cacheData: IGame[];

async function getMany() {
  if (cacheData === undefined) {
    const data = await fetch("./data/games.json").then((t) => t.json());
    cacheData = data;
  }
  return cacheData;
}

export const gameService = {
  getMany,
};
