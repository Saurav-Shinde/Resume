import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Skillsp from './Pages/Skillsp';
import Workexp from './Pages/Workexp';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contactus from './Pages/Contactus';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Skills",
    element: <Skillsp />,
  },
  {
    path: "Work-Experience",
    element: <Workexp />,
  },
  {
    path: "contact",
    element: <Contactus />,
  },
]); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
