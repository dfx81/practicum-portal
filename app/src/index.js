import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Announcement from "./pages/Announcements";
import Article from './pages/Article';
import Contacts from "./pages/Contacts";
import Resources from "./pages/Resources";
import Information from "./pages/Informations";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Guide from './pages/Guide';
import Companies from './pages/Companies';
import Offer from './pages/Offer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Announcement />
      },
      {
        path: "/article/:slug",
        element: <Article />
      },
      {
        path: "/guide/:slug",
        element: <Guide />
      },
      {
        path: "/companies",
        element: <Companies />
      },
      {
        path: "/offer/:slug",
        element: <Offer />
      },
      {
        path: "contacts",
        element: <Contacts />
      },
      {
        path: "resources",
        element: <Resources />
      },
      {
        path: "info",
        element: <Information />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
