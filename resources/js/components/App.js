import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import router from "../routes";
export default function App() {
    return (
        <main> <RouterProvider router={router} /></main>
       
    );
}


const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);