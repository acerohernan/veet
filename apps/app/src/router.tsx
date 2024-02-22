import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "./pages/home/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);
