import React from "react";
import GlobalStyles from "./styles/GlobalStyles";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/create-account",
    element: <CreateAccountPage />,
  },
]);

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
