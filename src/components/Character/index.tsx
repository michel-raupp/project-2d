"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import Char1Down1 from "@/assets/characters/main_1/char_down_1.png";
import Char1Down2 from "@/assets/characters/main_1/char_down_2.png";
import Char1Down3 from "@/assets/characters/main_1/char_down_3.png";
import Char1Up1 from "@/assets/characters/main_1/char_up_1.png";
import Char1Up2 from "@/assets/characters/main_1/char_up_2.png";
import Char1Up3 from "@/assets/characters/main_1/char_up_3.png";
import Char1Left1 from "@/assets/characters/main_1/char_left_1.png";
import Char1Left2 from "@/assets/characters/main_1/char_left_2.png";
import Char1Left3 from "@/assets/characters/main_1/char_left_3.png";
import Char1Right1 from "@/assets/characters/main_1/char_right_1.png";
import Char1Right2 from "@/assets/characters/main_1/char_right_2.png";
import Char1Right3 from "@/assets/characters/main_1/char_right_3.png";

import Char2Down1 from "@/assets/characters/main_2/char_down_1.png";
import Char2Down2 from "@/assets/characters/main_2/char_down_2.png";
import Char2Down3 from "@/assets/characters/main_2/char_down_3.png";
import Char2Up1 from "@/assets/characters/main_2/char_up_1.png";
import Char2Up2 from "@/assets/characters/main_2/char_up_2.png";
import Char2Up3 from "@/assets/characters/main_2/char_up_3.png";
import Char2Left1 from "@/assets/characters/main_2/char_left_1.png";
import Char2Left2 from "@/assets/characters/main_2/char_left_2.png";
import Char2Left3 from "@/assets/characters/main_2/char_left_3.png";
import Char2Right1 from "@/assets/characters/main_2/char_right_1.png";
import Char2Right2 from "@/assets/characters/main_2/char_right_2.png";
import Char2Right3 from "@/assets/characters/main_2/char_right_3.png";

import { DELAY, TILE_SIZE } from "@/constants";

type Position = {
  x: number;
  y: number;
};

type CharacterProps = {
  position: Position;
  direction: "up" | "down" | "left" | "right";
  moving: boolean;
  selectedCharacter: string | null;
};

const Character = ({
  position,
  direction,
  moving,
  selectedCharacter,
}: CharacterProps) => {
  const [spriteIndex, setSpriteIndex] = useState(0);

  const [spriteSequences, setSpriteSequences] = useState({
    down: [Char1Down2, Char1Down3, Char1Down2, Char1Down1],
    up: [Char1Up2, Char1Up3, Char1Up2, Char1Up1],
    left: [Char1Left2, Char1Left3, Char1Left2, Char1Left1],
    right: [Char1Right2, Char1Right3, Char1Right2, Char1Right1],
  });

  useEffect(() => {
    if (selectedCharacter === "1") {
      setSpriteSequences({
        down: [Char1Down2, Char1Down3, Char1Down2, Char1Down1],
        up: [Char1Up2, Char1Up3, Char1Up2, Char1Up1],
        left: [Char1Left2, Char1Left3, Char1Left2, Char1Left1],
        right: [Char1Right2, Char1Right3, Char1Right2, Char1Right1],
      });
    }
    if (selectedCharacter === "2") {
      setSpriteSequences({
        down: [Char2Down2, Char2Down3, Char2Down2, Char2Down1],
        up: [Char2Up2, Char2Up3, Char2Up2, Char2Up1],
        left: [Char2Left2, Char2Left3, Char2Left2, Char2Left1],
        right: [Char2Right2, Char2Right3, Char2Right2, Char2Right1],
      });
    }
  }, [selectedCharacter]);

  useEffect(() => {
    let animationInterval: NodeJS.Timeout;

    if (moving) {
      animationInterval = setInterval(() => {
        setSpriteIndex((prevIndex) => (prevIndex + 1) % 4);
      }, DELAY);
    } else {
      setSpriteIndex(0);
    }

    return () => clearInterval(animationInterval);
  }, [moving]);

  const sprite = spriteSequences[direction][spriteIndex];

  return (
    <Image
      className="absolute transition-all ease-linear duration-200 pointer-events-none select-none"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        height: TILE_SIZE,
        width: TILE_SIZE,
      }}
      src={sprite}
      alt="Character"
    />
  );
};

export default Character;
