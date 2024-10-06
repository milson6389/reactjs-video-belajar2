import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./components/layout/Root";
import Public from "./components/layout/Public";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          index: true,
          element: <Home />,
        },
        {
          path: "/login",
          element: (
            <Public>
              <Login />
            </Public>
          ),
        },
        {
          path: "/register",
          element: (
            <Public>
              <Register />
            </Public>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
