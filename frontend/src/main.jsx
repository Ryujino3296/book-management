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
import Error from './components/Error.jsx';
import NotFound from './components/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error/>,
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
      {
        path:'*',
        element: <NotFound/>,
      }
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
