import React from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import RecipePage from "./pages/RecipePage";
import AddRecipePage from "./pages/AddRecipePage";


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
                path: "/recipes/:id",
                element: <RecipePage />
            },
            {
                path: "/add-recipe",
                element: <AddRecipePage />
            },

        ]
    }
]);

const AppRouter: React.FC = () => {
    return <RouterProvider router={router} />
}

export default AppRouter;