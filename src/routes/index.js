import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout";
import Home from "../Pages/Home";
import Signin from "../Pages/Auth/SignIn";
import Signup from "../Pages/Auth/SignUp";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
    {
        path: '/signin',
        element: <Signin />
    },
    {
        path: '/signup',
        element: <Signup />
    }
])

export default routes