import {
  Navigate,
  Outlet,
  Route,
  // RouterProvider,
  Routes,
  // createBrowserRouter,
} from "react-router-dom";
import LeftBar from "./components/LeftBar/LeftBar";
import Header from "./components/Navbar/Header";
import HomePage from "./pages/HomePage/HomePage";
import FriendsPage from "./pages/FriendsPage/FriendsPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import TweetsPage from "./pages/TweetsPage/TweetsPage";

import css from "./app.module.css";
// import OthersPage from "./pages/OthersPage/OthersPage";

const App = () => {
  const Layout = () => {
    return (
      <div className={css.background}>
        <Header />
        <div className={css.container}>
          <div style={{ display: "flex" }}>
            <LeftBar />

            <main className={css.main}>
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    );
  };

  // const router = createBrowserRouter(
  //   [
  //     {
  //       path: "/",
  //       element: <Layout />,
  //       children: [
  //         {
  //           path: "/",
  //           element: <HomePage />,
  //         },
  //         {
  //           path: "/tweets",
  //           element: <TweetsPage />,
  //         },
  //         {
  //           path: "/tweets/:id",
  //           element: <ProfilePage />,
  //         },
  //         {
  //           path: "/profile",
  //           element: <ProfilePage />,
  //         },
  //         {
  //           path: "/friends",
  //           element: <FriendsPage />,
  //         },
  //         {
  //           path: "/others",
  //           element: <OthersPage />,
  //         },

  //         {
  //           path: "*",
  //           element: <Navigate to="/" />,
  //         },
  //       ],
  //     },
  //   ],
  //   { basename: "/social_tweets" }
  // );

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/profile:id" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
  // <RouterProvider router={router}></RouterProvider>;
};

export default App;
