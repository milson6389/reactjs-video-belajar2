import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./components/layout/Root";
import Public from "./components/layout/Public";
import Private from "./components/layout/Private";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Classes from "./pages/Classes";
import Orders from "./pages/Orders";
import ClassDetail from "./pages/ClassDetail";
import { useSelector } from "react-redux";

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
        {
          path: "/classes/:id",
          element: <ClassDetail />,
        },
        {
          path: "/profile",
          element: (
            <Private>
              <Profile />
            </Private>
          ),
        },
        {
          path: "/classes",
          element: (
            <Private>
              <Classes />
            </Private>
          ),
        },
        {
          path: "/order",
          element: (
            <Private>
              <Orders />
            </Private>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
