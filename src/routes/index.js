import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ExplorePage from "../pages/ExplorePage";
import DetailPage from "../pages/DetailPage";
import SearchPage from "../pages/SearchPage";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

const router = createBrowserRouter ([
    {
        path:'/',
        element: <App/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: ":explore",
                element: <ExplorePage/>
            },
            {
                path: ":explore/:id",
                element: <DetailPage/>
            },
            {
                path: "search",
                element: <SearchPage/>
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "signup",
                element: <SignUp/>
            },
        ]
    }
])

export default router