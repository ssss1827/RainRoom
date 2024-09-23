import { Link, Outlet } from "react-router-dom";
import TopNavBar from "./TopNavigation";
import styled from "styled-components";

const PageContainer = styled.div`
  padding: 20px; /* 원하는 패딩 값 */
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const NavBtn = styled(Link)`
  font-size: 14px; /* 글씨 크기 */
  color: white; /* 글씨 색상 */
  text-decoration: none; /* 밑줄 제거 */
  padding: 8px 8px;

  &:hover {
    color: lightgray; /* hover 시 색상 변경 */
    text-decoration: underline; /* hover 시 밑줄 */
  }
`;

export default function Layout() {
  return (
    <PageContainer>
      <TopNavBar>
        <NavBtn color="white" to="/">
          RainRoom
        </NavBtn>
        <Div>
          <NavBtn to="/about">About</NavBtn>
          <NavBtn to="/contact">Contact</NavBtn>
        </Div>
      </TopNavBar>

      <Outlet />
    </PageContainer>
  );
}
