import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CountryDetail from "../pages/CountryDetail";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        // loader: homeLoader
    },
    {
        path: "/country/:code",
        element: <CountryDetail />,
        // loader: detailLoader
    }
]);