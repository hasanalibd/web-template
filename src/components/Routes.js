import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddUser from "./AddUser";
import ErrorPage from "./ErrorPage";
import Home from "./Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/add/user",
                element: <AddUser></AddUser>
            },
            {
                path: "*",
                element: <ErrorPage></ErrorPage>,
            },
        ]
    }
])

export default router;