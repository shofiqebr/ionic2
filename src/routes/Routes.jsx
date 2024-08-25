
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/home/Home";
import WebHosting from "../pages/home/WebHosting";
import ResellerServer from "../pages/home/ResellerServer";
import DedicatedServer from "../pages/home/DedicatedServer";
import Contact from "../pages/home/Contact";
import MainErp from "./MainErp";
import HomeErp from "../pages/ionicerp/HomeErp";


export const router = createBrowserRouter([

  // -----------------home route----------------
  {
    path: "/",
    element: <Root/>,
    children:[
      {
          path:'/',
          element: <Home/>
      },
      {
          path:'/contact',
          element: <Contact/>
      },
      {
          path:'/webHosting',
          element: <WebHosting/>
      },
      {
          path:'/resellerServer',
          element: <ResellerServer/>
      },
      {
          path:'/dedicatedServer',
          element: <DedicatedServer/>
      },
      // {
      //     path:'/shikkha',
      //     element: <ShikkhaChat/>
      // },
      // {
      //     path:'karmochary',
      //     element: <Karmochary/>
      // },
  
    ]
  },
  // -----------------ionic shop----------------
  // {
  //     path: "/ionicshop",
  //     element: <MainShop/>,
  //     children:[
  //         {
  //             path:'/ionicshop',
  //             element:<IonicShop/>
  //         },
        
  //     ]
  // },
  // -----------------ionic kormochary----------------
  // {
  //     path: "/karmochary",
  //     element: <MainKarmochary/>,
  //     children:[
  //         {
  //             path:'/karmochary',
  //             element:<Karmochary/>
  //         },
  //         {
  //             path:'services',
  //             element:<Services/>
  //         },
        
  //     ]
  // },
  // -----------------ionic pharma----------------
  // {
  //     path: "/ionicpharma",
  //     element: <MainPharma/>,
  //     children:[
  //         {
  //             path:'/ionicpharma',
  //             element:<IonicPharma/>
  //         },
        
  //     ]
  // },
  // ----------------ionic erp-----------------
  {
      path: "/ionicerp",
      element: <MainErp/>,
      children:[
          {
              path:'/ionicerp',
              element:<HomeErp/>
          },
          // {
          //     path:'manufacturing-industry-ionic-erp-software',
          //     element:<Manufacturing/>
          // },
          // {
          //     path:'healthcare',
          //     element:<HealthCare/>
          // },
          // {
          //     path:'trading-ionic-erp',
          //     element:<TradingErp/>
          // },
          // {
          //     path:'chemical-industry-ionic-erp',
          //     element:<Chemical/>
          // },
          // {
          //     path:'healthcare-ionic-erp',
          //     element:<HealthManagement/>
          // },
          // {
          //     path:'lone-management-ionic-erp',
          //     element:<Loan/>
          // },
          // {
          //     path:'agriculture-ionic-erp',
          //     element:<Agriculture/>
          // },
          // {
          //     path:'all-services-ionic-erp',
          //     element:<ServicesErp/>
          // },
          // {
          //     path:'all-products-ionic-erp',
          //     element:<DifferentBrands/>
          // },
          
      ]
  },
]);