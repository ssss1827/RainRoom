import { Link } from "react-router-dom";
import styled from "styled-components";

const TopNavBar = styled.nav`
  position: fixed;
  display: flex;
  padding: 12px 24px;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  align-self: stretch;

  width: calc(100% - 40px);

  border-radius: 12px;
  border: 0.5px solid var(--Zinc-700, #3f3f46);
  background: rgba(24, 24, 27, 0.8);
  backdrop-filter: blur(16px);
  box-sizing: border-box;

  z-index: 1000; //요소 가장 최상위에 있도록 설정.
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

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export default function TopNavigation() {
  return (
    <TopNavBar>
      <NavBtn to="/">RainRoom</NavBtn>
      <Div>
        <NavBtn to="/about">About</NavBtn>
        <NavBtn to="/contact">Contact</NavBtn>
      </Div>
    </TopNavBar>
  );
}
