import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Applications/App';
import Login from './pages/login/Login'; 
import Register from './pages/Regis/Register'; 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register/> ,
  },
  {
    path: "/login",
    element: <Login/> ,
  },
  {
    path: '/app',
    element: <App />,
  },
]);

 ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

