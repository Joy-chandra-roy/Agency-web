import { createBrowserRouter } from "react-router";
import Main from "../components/layout/Main";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Categories from "../pages/categories/Categories";
import Blogs from "../pages/blog/Blogs";
import Services from './../pages/services/Services';
import Contact from "../pages/Contact/Contact";
import Error from "../components/Error";
import Pricing from "../pages/home/Pricing";
import Register from "../components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
        {
            path:"",
            element:<Home/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/categories",
            element:<Categories/>
        },
        {
            path:"/blog",
            element:<Blogs/>
        },
        {
            path:"/service",
            element:<Services/>
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/pricing",
            element:<Pricing/>
        },
        
        // error pages
        {
            path:"*",
            element:<Error/>
        },
    ]
  },

//   Authentication
{
    path:"/register",
    element:<Register/> 
},
{
    path:"/login",
    element:<div>Login page</div>
}
]);

export default router;