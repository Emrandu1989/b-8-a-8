import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import DonationDetails from "../components/DonationDetails/DonationDetails";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage/>,
      children:[
         {
            path: '/',
            element: <Home />
         },
         {
            path: '/donation',
            element: <Donation/>
         },
         {
            path: '/statistics',
            element: <Statistics />
         },
         {
            path: '/donation-details/:id',
            element: <DonationDetails/>
         },
      ]
    },
  ]);

  export default router