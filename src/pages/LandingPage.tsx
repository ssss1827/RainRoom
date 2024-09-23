import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import styled from "styled-components";
import PhaserRainEffect from "../components/RainEffect";

const PhaserContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* Phaser 캔버스를 UI 요소 아래에 배치 */
`;

const Div = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
  padding-bottom: 64px;
  align-self: stretch;
  justify-content: center;
  position: relative; /* Phaser 캔버스와 겹칠 수 있게 설정 */
  z-index: 1; /* UI 요소가 Phaser 캔버스보다 위에 있도록 설정 */
`;

const SubTitle = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  align-self: stretch;
  font-size: 24px;
  color: #a1a1aa;
  line-height: 24px;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-self: stretch;
  text-align: center;
  font-size: 56px;
  color: #fafafa;
  line-height: 56px;
`;

const PrimaryButton = styled(Link)`
  display: flex;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;

  border-radius: 8px;
  border: 1px solid var(--grey-400, #a1a1aa);
  background: var(--Core-black, #000);
  box-shadow: 0px 0px 16px 0px rgba(255, 255, 255, 0.25);

  margin-top: 32px;
  margin-bottom: 164px;

  &:hover {
    background-color: #27272a; /* hover 시 색상 변경 */
    box-shadow: 0px 0px 24px 0px rgba(255, 255, 255, 0.25);
  }
`;

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  background-image: url("/src/assets/images/pixelArt.png");
  background-size: cover;
  background-position: center;

  margin-top: 48px;
`;

const HelpText = styled.div`
  justify-content: center;
  display: flex;
  padding: var(--28-px, 8px);
  text-align: center;

  height: 50px;

  line-height: 130%;

  align-items: center;
  align-self: stretch;
  max-width: 456px;

  margin: auto;

  background: var(--grey-50, #fafafa);
`;

const HelpTextTail = styled.div`
  width: 20px;
  height: 20px;
  background-image: url("/src/assets/images/HelpTextTail.png");
  background-size: cover;
  background-position: center;
`;

export default function LandingPage() {
  return (
    <>
      <PhaserContainer>
        <PhaserRainEffect /> {/* Phaser 캔버스를 맨 아래에 렌더링 */}
      </PhaserContainer>
      <Div>
        <SubTitle>No more feeling alone.</SubTitle>
        <Title>RainRoom</Title>
        <PrimaryButton to="/about">Create Room</PrimaryButton>
        <HelpText>
          <ReactTyped
            strings={["You are not alone. Work together in the RainRoom."]}
            typeSpeed={40}
            backSpeed={50}
            loop={false}
          />
        </HelpText>

        <HelpTextTail />
        <ImageContainer />
      </Div>
    </>
  );
}
