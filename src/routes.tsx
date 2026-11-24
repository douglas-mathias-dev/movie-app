import { RootLayout } from "./components/rootLayout";
import { Movies } from "./components/movies";
import { Home } from "./components/home";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "movies",
                element: <Movies />,
            },
        ],
    },
]);
