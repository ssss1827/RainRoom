import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명 배경 */
  z-index: 999;
`;

const Text = styled.span`
  font-size: 24px;
  color: white;
`;

export default function Loading() {
  return (
    <Wrapper>
      <Text>Now Loading...</Text>
    </Wrapper>
  );
}
