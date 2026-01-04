import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllCorps from "../Pages/AllCorps";
import AddCorps from "../Pages/AddCorps";
import MyPosts from "../Pages/MyPosts";
import MyInterests from "../Pages/MyInterests";
import Profile from "../Pages/Profile";
import Home from "../Pages/Home";
import CorpsDetails from "../Pages/CorpsDetails";
import PrivateRoute from "./PrivateRoute";
import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";
import DashboardLayout from "../Layouts/DashboardLayout";
import Overview from "../Pages/Overview";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                path: '/',
                Component: Home,
                loader: () => fetch('https://krishilinkapi-server.vercel.app/latest-corps')
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/all-corps',
                Component: AllCorps,
                loader: () => fetch('https://krishilinkapi-server.vercel.app/corps')
            },
            {
                path: '/about',
                Component: AboutUs,
            },
            {
                path: '/contact',
                Component: Contact,
            },
            {
                path: '/corps-details/:id',
                element:
                    <CorpsDetails></CorpsDetails>
                
                ,
                loader: ({ params }) => fetch(`https://krishilinkapi-server.vercel.app/corps/${params.id}`)
            },
            
            

        ]
    },

    {
        path: '/dashboard',
        Component: DashboardLayout,
        children:[
            {
                index:true,
                Component:Overview
            },
            {
                path:'my-interests',
                Component:MyInterests
            },
            {
                path:'profile',
                Component:Profile
            },
            {
                path: 'add-corps',
                Component: AddCorps
            },
            {
                path: 'my-posts',
                Component: MyPosts
            },
        ]
    },

]);


export default router