import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../Pages/Home/Home";
import ProductRequest from "../Pages/ProductRequest/ProductRequest";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
          
          {path:'/',element:<Home/>},
          
          {path:'/productrequest',element:<ProductRequest/>},
        //   {path:'/career',element:<Career/>},
        //   {path:'/about',element:<AboutUs/>},
      ]
    },
  ]);