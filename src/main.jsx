import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Discover from './components/page/Discover';
import About from './components/page/About';
import Projects from './components/page/Projcets';

// Components
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Discover />,
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/projects",
    element: <Projects />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
     <RouterProvider router={router} />
)
