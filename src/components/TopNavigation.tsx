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
  backdrop-filter: blur(4px);
  box-sizing: border-box;

  flex: 1 0 0;
`;

export default TopNavBar;
