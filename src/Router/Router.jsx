import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ErrorPage from "../pages/ErrorPage";
import Orders from "../components/Orders/Orders";
import PrivetRouter from "../PrivetRouter/PrivetRouter";
import Profile from "../components/Profile/Profile";
import Dashboard from "../components/Dashboard/Dashboard";

const Router = createBrowserRouter([
    {
        path:"/",
        element: <Root/>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/orders',
                element: <PrivetRouter><Orders></Orders></PrivetRouter>
            },
            {
                path: '/profile',
                element: <PrivetRouter><Profile></Profile></PrivetRouter>
            },
            {
                path: '/deshboard',
                element: <PrivetRouter><Dashboard></Dashboard></PrivetRouter>
            }
        ]
    }
])

export default Router;