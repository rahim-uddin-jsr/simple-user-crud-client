import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Update from "./Update/Update.jsx";
import Users from "./Users/Users.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/users",
    loader: () => fetch("http://localhost:5000/users"),
    element: <Users />,
  },
  {
    path: "/user/:id",
    loader: ({ params }) => fetch(`http://localhost:5000/user/${params.id}`),
    element: <Update />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
