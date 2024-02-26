import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
const Home = lazy(() => import("../pages/Home"));
import Error from "../components/error/Error";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            }
        ]
    }
])