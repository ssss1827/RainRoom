import { Outlet } from "react-router-dom";
import TopNavigation from "./TopNavigation";
import styled from "styled-components";

const PageContainer = styled.div`
  padding: 20px; /* 페이지 전체 패딩 값 */
`;

export default function Layout() {
  return (
    <>
      <PageContainer>
        <TopNavigation />
        <Outlet />
      </PageContainer>
    </>
  );
}
