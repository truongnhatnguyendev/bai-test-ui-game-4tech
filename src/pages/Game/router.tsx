import { RouteObject } from "react-router-dom";
import { Game } from ".";

export const GameRouter: RouteObject[] = [
  {
    path: "",
    element: <Game />,
  },
];
