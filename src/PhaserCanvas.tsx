import React, { useEffect, useRef } from "react";
import Phaser from "phaser";

const PhaserCanvas: React.FC = () => {
  const phaserGameRef = useRef<HTMLDivElement>(null); // Canvas를 위한 참조

  useEffect(() => {
    // Phaser 게임 설정
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: "arcade",
        arcade: {
          gravity: { x: 0, y: 300 },
          debug: false,
        },
      },
      scene: {
        preload,
        create,
        update,
      },
      parent: phaserGameRef.current!, // ref로 Phaser를 DOM에 마운트
    };

    // Phaser 게임 생성
    const game = new Phaser.Game(config);

    // 컴포넌트 언마운트 시 Phaser 게임 종료
    return () => {
      game.destroy(true);
    };
  }, []);

  // Phaser 관련 로직
  function preload(this: Phaser.Scene) {
    this.load.image("sky", "src/assets/images/sky.png");
  }

  function create(this: Phaser.Scene) {
    this.add.image(400, 300, "sky");
  }

  function update(this: Phaser.Scene) {
    // 게임 업데이트 로직
  }

  return <div ref={phaserGameRef} />;
};

export default PhaserCanvas;
