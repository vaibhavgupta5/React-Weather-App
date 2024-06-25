import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import weatherStore from "./store/index.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer.jsx";
import Cities from "./components/Cities.jsx";
import Dashboard from "./components/Dashboard.jsx";


// Setting up router, defining paths
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  children: [
    {path: "/", element: <MainContainer/>},
    {path: "/cities", element: <Cities/>},
    {path: "/dashboard", element: <Dashboard/>},
    
 ] }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={weatherStore}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
