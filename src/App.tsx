import React, { useEffect, useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import Loading from "./components/Loading";

// 1. router를 생성한다.
// 2. RouterProvider로 라우터를 애플리케이션에 제공하여 URL 경로에 따라 컴포넌트가 보여지도록한다.
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
  /**
   * 1. 로그인을 위해 첫 번째로 해줄 것은 로딩.
   * 왜냐하면 데이터를 Fb로부터 받아와야 하는데. 이때 유저들이 기다리는 시간이 생기는데
   * 이를 시각적으로 보여주기 위함.
   * useState란 상태를 관리할 수 있도록 도와주는 React Hook이다.
   * state는 렌더링을 일으킬 수 있는 변수이다. setState는 state의 값을 변경할 때 사용하는 함수이다.
   * useState는 state의 초기값을 정할 수 있고, return 값으로 state, setState를 돌려주는 hook이다.
   */
  const [isLoading, setLoading] = useState(true);

  // 2. FireBase를 불러오는 과정이 필요. 기다려야함.
  // firebase를 초기화한다는 의미는 fb 서비스를 사용하기 위해 프로젝트와 앱을 설정하고 연력하는 것으 의미.
  const init = async () => {
    //다 불러온다면 로딩화면을 보여주지 않을 것 이다.
    setLoading(false);
  };

  // 3. useEffect를 이용해서 딱 한번만 실행해준다.
  // Firebase는 초기화가 완료되면 해당 앱 인스턴스를 계속해서 재사용하므로, 여러번 초기화할 필요가 없다.
  //useEffect는 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있도록 하는 Hook이다.
  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <GlobalStyles />
      {/* 4. Loading이 끝나면 RouterProvider을 보여줘야하기 위한 동작을 줘야함. */}
      {isLoading ? <Loading /> : <RouterProvider router={router} />}
    </>
  );
};

export default App;
