import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Tweets from "./pages/Tweets/Tweets";
import Profile from "./pages/Profile/Profile";
import LeftBar from "./components/LeftBar/LeftBar";

import css from "./app.module.css";
import Header from "./components/Navbar/Header";

const App = () => {
  const Layout = () => {
    return (
      <div className={css.background}>
        <Header />
        <div className={css.container}>
          <div style={{ display: "flex" }}>
            <LeftBar />

            <div style={{ width: "57%" }}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/tweets",
          element: <Tweets />,
        },
        {
          path: "/tweets/:id",
          element: <Profile />,
        },

        {
          path: "*",
          element: <Navigate to="/" />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
