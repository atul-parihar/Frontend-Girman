import React from 'react';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './layout/AppLayout';

function App() {

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/search",
          element: <SearchResults />,
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />
}

export default App;