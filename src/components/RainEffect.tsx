import React, { useEffect } from "react";
import Phaser from "phaser";

const PhaserRainEffect: React.FC = () => {
  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: window.innerWidth,
      height: window.innerHeight,
      transparent: true, // 캔버스 배경을 투명하게 설정
      scene: {
        preload: preload,
        create: create,
      },
      parent: document.getElementById("phaser-rain"),
    };

    // Phaser 게임 생성
    const game = new Phaser.Game(config);

    // preload 함수: 이미지 로드가 필요 없으므로 빈 함수
    function preload(this: Phaser.Scene) {}

    // create 함수: 파티클 시스템 생성
    function create(this: Phaser.Scene) {
      // 그래픽 객체로 파티클 모양을 생성 (빗방울 형태)
      const graphics = this.add.graphics();

      // 그래픽에 색상과 크기를 설정
      graphics.fillStyle(0x00aaff, 1); // 파란색 채우기
      graphics.fillRect(0, 0, 2, 10); // 폭 2, 높이 10의 직사각형 모양

      // 그래픽을 텍스처로 변환하여 사용
      const textureKey = "rain";
      graphics.generateTexture(textureKey, 2, 10); // 'rain'이라는 텍스처 키로 생성

      // 파티클 시스템 생성
      const emiiter = this.add.particles(0, 0, textureKey, {
        x: { min: 0, max: window.innerWidth }, // 파티클의 X축 범위
        y: 0, // 파티클의 시작 Y 좌표
        lifespan: 2000, // 파티클의 수명 (밀리초)
        speedY: { min: 200, max: 400 }, // Y축 속도 범위
        scale: { start: 0.5, end: 0.1 }, // 파티클 크기 변화
        quantity: 1, // 매 프레임 생성되는 파티클 수
        blendMode: "ADD", // 블렌딩 모드 설정
      });

      // 브라우저 크기 변경 시 X축 범위를 업데이트

      // 그래픽 객체는 더 이상 필요 없으므로 제거
      graphics.destroy();
    }

    // 컴포넌트 언마운트 시 Phaser 게임을 정리
    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="phaser-rain"></div>; // Phaser가 렌더링될 div
};

export default PhaserRainEffect;
