import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import Wallets from "../pages/wallets/Wallets";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/profile",
                element: <Profile />
            },
            {
                path: "/wallets",
                element: <Wallets />
            }
        ]
    },
]);

export default router;