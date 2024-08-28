import React from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import RecipePage from "./pages/RecipePage";
import AddRecipePage from "./pages/AddRecipePage";
import Recipes from "./pages/Recipes";
import Mention from "./pages/Mention";
import Popular from "./pages/Popular";
import Favorite from "./pages/Favorite";
import Demande from "./pages/Demande";


const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/home" />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/recipes",
                element: <Recipes />
            },
            {
                path: "/recipes/:id",
                element: <RecipePage />
            },
            {
                path: "/add-recipe",
                element: <AddRecipePage />
            },
            {
                path: "/popular",
                element: <Popular />
            },
            {
                path: "/favorite",
                element: <Favorite />
            },
            {
                path: "/demande",
                element: <Demande />
            },
            {
                path: "/mention-legale",
                element: <Mention />
            },

        ]
    }
]);

const AppRouter: React.FC = () => {
    return <RouterProvider router={router} />
}

export default AppRouter;