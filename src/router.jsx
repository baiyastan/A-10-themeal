import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";

export const myRouter = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children: [
            {
                path:"",
                element: <Home/>
            },
            {
                path:"search/:value",
                element: <Search/>
            },
        ]
    }
])
