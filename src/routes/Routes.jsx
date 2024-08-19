
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
            path:'/',
            element: <Home/>
        },
        // {
        //     path:'/contact',
        //     element: <Contact/>
        // },
        // {
        //     path:'/webHosting',
        //     element: <WebHosting/>
        // },
        // {
        //     path:'/resellerServer',
        //     element: <ResellerServer/>
        // },
        // {
        //     path:'/dedicatedServer',
        //     element: <DedicatedServer/>
        // },
        // {
        //     path:'/shikkha',
        //     element: <ShikkhaChat/>
        // },
      ]
    },
    // {
    //     path: "/homeErp",
    //     element: <Main/>,
    //     children:[
    //         {
    //             path:'/homeErp',
    //             element:<HomeErp/>
    //         },
    //         {
    //             path:'manufacturing',
    //             element:<Manufacturing/>
    //         },
    //         {
    //             path:'healthCare',
    //             element:<HealthCare/>
    //         },
    //         {
    //             path:'tradingErp',
    //             element:<TradingErp/>
    //         },
    //         {
    //             path:'chemical-industry-ionic-erp',
    //             element:<Chemical/>
    //         },
    //     ]
    // }
  ]);