import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Layout } from "./layout";
import { Home } from "./pages/Home";
import { GameRouter } from "./pages/Game/router";
import { NotFound } from "pages/NotFound";
const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "games",
        children: GameRouter,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
