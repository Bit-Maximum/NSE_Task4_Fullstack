import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import  List  from "./list/List";
import  Main  from "./main/Main";
import Building from "./buildings/Building";
import Chart from "./chart/Chart";

const router = createBrowserRouter([
    {
        path: "",
        element: <Main />,
    },
    {
        path: "/list",
        element: <List />,
    },
    {
        path: "/diagram",
        element: <Chart />,
    },
    {
        path: "/building/:id",
        element: <Building />,
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
