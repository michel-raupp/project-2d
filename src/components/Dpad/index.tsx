"use client";
import React, { useRef, useState } from "react";
import {
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
  IconCircle,
} from "@tabler/icons-react";

import { DELAY } from "@/constants";

type TDirection = "up" | "down" | "left" | "right";

type DpadProps = {
  onMove: (direction: TDirection) => void;
  setDpadInUse: (dpadInUse: boolean) => void;
};

const Dpad = ({ onMove, setDpadInUse }: DpadProps) => {
  const isHoldingRef = useRef(false);
  const dpadRef = useRef<TDirection | null>(null);
  const [lastMoveTime, setLastMoveTime] = useState<number>(0);

  const handleMouseDown = (direction: TDirection) => {
    const now = Date.now();

    if (!isHoldingRef.current && now - lastMoveTime > DELAY) {
      isHoldingRef.current = true;
      setDpadInUse(true);
      dpadRef.current = direction;
      onMove(direction);
      setLastMoveTime(now);
    }
  };

  const handleMouseUp = () => {
    if (isHoldingRef.current) {
      setDpadInUse(false);
      dpadRef.current = null;
      isHoldingRef.current = false;
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 dpad z-20 flex md:hidden items-center justify-center flex-col gap-1">
        <button
          className="general-button p-4"
          onTouchStart={() => handleMouseDown("up")}
          onTouchEnd={handleMouseUp}
        >
          <IconChevronUp size={32} color="white" />
        </button>
        <div className="flex flex-row gap-1">
          <button
            className="general-button p-4"
            onTouchStart={() => handleMouseDown("left")}
            onTouchEnd={handleMouseUp}
          >
            <IconChevronLeft size={32} color="white" />
          </button>
          <div className="general-button p-4 rounded-md">
            <IconCircle size={32} color="white" />
          </div>
          <button
            className="general-button p-4"
            onTouchStart={() => handleMouseDown("right")}
            onTouchEnd={handleMouseUp}
          >
            <IconChevronRight size={32} color="white" />
          </button>
        </div>
        <button
          className="general-button p-4"
          onTouchStart={() => handleMouseDown("down")}
          onTouchEnd={handleMouseUp}
        >
          <IconChevronDown size={32} color="white" />
        </button>
      </div>

      <div className="fixed bottom-6 left-6 dpad z-20 hidden md:flex items-center justify-center flex-col gap-1">
        <button
          className="general-button p-4"
          onMouseDown={() => handleMouseDown("up")}
          onMouseUp={handleMouseUp}
        >
          <IconChevronUp size={32} color="white" />
        </button>
        <div className="flex flex-row gap-1">
          <button
            className="general-button p-4"
            onMouseDown={() => handleMouseDown("left")}
            onMouseUp={handleMouseUp}
          >
            <IconChevronLeft size={32} color="white" />
          </button>
          <div className="general-button p-4 rounded-md">
            <IconCircle size={32} color="white" />
          </div>
          <button
            className="general-button p-4"
            onMouseDown={() => handleMouseDown("right")}
            onMouseUp={handleMouseUp}
          >
            <IconChevronRight size={32} color="white" />
          </button>
        </div>
        <button
          className="general-button p-4"
          onMouseDown={() => handleMouseDown("down")}
          onMouseUp={handleMouseUp}
        >
          <IconChevronDown size={32} color="white" />
        </button>
      </div>
    </>
  );
};

export default Dpad;
