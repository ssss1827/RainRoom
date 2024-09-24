import { Link } from "react-router-dom";
import styled from "styled-components";

const TopNavBar = styled.nav`
  position: sticky;
  display: flex;
  padding: 12px 16px;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  align-self: stretch;

  border-radius: 12px;
  border: 0.5px solid var(--Zinc-700, #3f3f46);
  background: rgba(24, 24, 27, 0.8);
  backdrop-filter: blur(16px);
  box-sizing: border-box;

  z-index: 1000; //요소 가장 최상위에 있도록 설정.
`;

const NavBtnGhost = styled(Link)`
  font-size: 14px; /* 글씨 크기 */
  color: white; /* 글씨 색상 */
  text-decoration: none; /* 밑줄 제거 */
  padding: 8px 8px;

  &:hover {
    color: lightgray; /* hover 시 색상 변경 */
    text-decoration: underline; /* hover 시 밑줄 */
  }
`;

const NavBtnFilled = styled(Link)`
  font-size: 14px; /* 글씨 크기 */
  color: var(--grey-900, #18181b); /* 글씨 색상 */
  text-decoration: none; /* 밑줄 제거 */
  padding: 12px 16px;

  border-radius: 8px;
  background: var(--grey-50, #fafafa);

  &:hover {
    color: #565656; /* hover 시 색상 변경 */
    text-decoration: underline; /* hover 시 밑줄 */
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export default function TopNavigation() {
  return (
    <TopNavBar>
      <NavBtnGhost to="/">RainRoom</NavBtnGhost>
      <Div>
        <NavBtnGhost to="/about">About</NavBtnGhost>
        <NavBtnGhost to="/contact">Contact</NavBtnGhost>
        <NavBtnFilled to="/login">Sign in</NavBtnFilled>
      </Div>
    </TopNavBar>
  );
}
