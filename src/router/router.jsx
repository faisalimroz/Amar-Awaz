import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../Pages/Home/Home";
import ProductRequest from "../Pages/ProductRequest/ProductRequest";
import RemovedProducts from "../Pages/RemovedProducts/RemovedProducts";
import PromotionalBanner from "../Pages/PromotionalBanner/PromotionalBanner";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
          
          {path:'/',element:<Home/>},
          
          {path:'productrequest',element:<ProductRequest/>},
          {path:'removeproducts',element:<RemovedProducts/>},
          {path:'promotionalbanner',element:<PromotionalBanner/>},
   
      ]
    },
  ]);