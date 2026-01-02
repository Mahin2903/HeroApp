import React from 'react'

import { createBrowserRouter } from 'react-router'
import Root from '../Root/Root'
import Home from '../Home/Home.jsx'
import AllApps from '../All Apps/AllApps.jsx'
import AppDetails from '../All Apps/AppDetails.jsx'

import ErrorPageNotFound from '../Error/ErrorPageNotFound.jsx'
import ErrorPage from '../Error/ErrorPage.jsx'
import Installation from '../Installation/Installation.jsx'


export const router = createBrowserRouter([
  {
    path:"/",
    errorElement:<ErrorPageNotFound></ErrorPageNotFound>,
    Component:Root,
    children: [
      {
        index: true,
            path:"/",
            Component: Home,
      },
      {
        path:"AllApps",
        Component: AllApps,
      },
      {
        path:'appDetails/:id',
        loader: () => fetch('/App.json'),
        Component: AppDetails,
      },
      {
        path:'Installation',
        loader: () => fetch('/App.json'),
        Component:Installation,
      }
    ]
  }
])