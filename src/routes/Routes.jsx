
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/home/Home";
import WebHosting from "../pages/home/WebHosting";
import ResellerServer from "../pages/home/ResellerServer";
import DedicatedServer from "../pages/home/DedicatedServer";
import Contact from "../pages/home/Contact";
import MainErp from "./MainErp";
import HomeErp from "../pages/ionicerp/HomeErp";
import HealthCare from "../pages/ionicerp/healthCare/HealthCare";
import Manufacturing from "../pages/ionicerp/manufacturing/Manufacturing";
import TradingErp from "../pages/ionicerp/tradingErp/TradingErp";
import Chemical from "../pages/ionicerp/chemical-industry/Chemical";
import HealthManagement from "../pages/ionicerp/healthManagement/HealthManagement";
import Loan from "../pages/ionicerp/loan/Loan";
import Agriculture from "../pages/ionicerp/agriculture/Agriculture";
import ServicesErp from "../pages/ionicerp/ServicesErp";
import DifferentBrands from "../pages/ionicerp/DifferentBrands";
import MainKarmochary from "./MainKarmochary";
import Karmochary from "../pages/karmochary/Karmochary";


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
      {
          path:'karmochary',
          element: <Karmochary/>
      },
  
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
  {
    path: "/karmochary",
    element: <MainKarmochary/>,
    children:[
        {
            path:'/karmochary',
            element:<Karmochary/>
        },
        // {
        //     path:'services',
        //     element:<Services/>
        // },
      
    ]
},
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
          {
              path:'manufacturing-industry-ionic-erp-software',
              element:<Manufacturing/>
          },
          {
              path:'healthcare',
              element:<HealthCare/>
          },
          {
              path:'trading-ionic-erp',
              element:<TradingErp/>
          },
          {
              path:'chemical-industry-ionic-erp',
              element:<Chemical/>
          },
          {
              path:'healthcare-ionic-erp',
              element:<HealthManagement/>
          },
          {
              path:'lone-management-ionic-erp',
              element:<Loan/>
          },
          {
              path:'agriculture-ionic-erp',
              element:<Agriculture/>
          },
          {
              path:'all-services-ionic-erp',
              element:<ServicesErp/>
          },
          {
              path:'all-products-ionic-erp',
              element:<DifferentBrands/>
          },
          
      ]
  },
]);