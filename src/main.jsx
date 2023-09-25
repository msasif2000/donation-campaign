import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Home from './pages/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Statistics from './pages/Statistics/Statistics';
import Root from './components/Root/Root';
import DonationDetails from './components/DonationDetails/DonationDetails';
import Donation from './pages/Donation/Donation';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: () => fetch('/donation.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch('/donation.json')
      },
      {
        path: "/DonationDetails/:id",
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('/donation.json')
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
