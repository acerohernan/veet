import React from "react";
import { createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/home";
import UnexpectedError from "./pages/unexpected-error";

const RoomPage = React.lazy(() => import("./pages/room"));

export const router = createBrowserRouter([
  {
    path: "",
    errorElement: <UnexpectedError />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:roomId",
        element: <RoomPage />,
      },
    ],
  },
]);
