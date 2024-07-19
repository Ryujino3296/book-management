import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Layout from './Layout.jsx';
import EmailVerification from './components/EmailVerification.jsx';
import Login from './components/Login.jsx'
import Signin from './components/Signin.jsx'
import Books from './components/Books.jsx';
import AuthProvider from './AuthProvider.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "emailverification",
        element: <EmailVerification/>,
      },
      {
        path: "books",
        element: <Books/>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
   
  </React.StrictMode>
);
