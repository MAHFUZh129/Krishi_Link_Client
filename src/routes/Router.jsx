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

const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
        {
            path:'/',
            Component:Home,
            loader:()=>fetch('http://localhost:3000/latest-corps')
        },
        {
            path:'/login',
            Component:Login
        },
        {
            path:'/register',
            Component:Register
        },
        {
            path:'/all-corps',
            Component:AllCorps,
            loader:()=>fetch('http://localhost:3000/corps')
        },
        {
            path:'/corps-details/:id',
            element: <PrivateRoute>
                <CorpsDetails></CorpsDetails>
            </PrivateRoute>
            ,
            loader:({params})=>fetch(`http://localhost:3000/corps/${params.id}`)
        },
        {
            path:'/add-corps',
            Component:AddCorps
        },
        {
            path:'/my-posts',
            Component:MyPosts
        },
        {
            path:'/my-interests',
            Component:MyInterests
        },
        {
            path:'/profile',
            Component:Profile
        },
    ]
  },
  
]);


export default router