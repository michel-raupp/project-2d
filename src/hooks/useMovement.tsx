"use client";
import { useState, useRef } from "react";

import { TILE_SIZE, DELAY } from "@/constants";

type TPosition = { x: number; y: number };
type TMoveInterval = NodeJS.Timeout | null;

interface IUseMovement {
  initialPosition: TPosition;
  tiles: any;
  setMap: any;
}

export function useMovement({ initialPosition, tiles, setMap }: IUseMovement) {
  const [position, setPosition] = useState<TPosition>(initialPosition);
  const [direction, setDirection] = useState<"up" | "down" | "left" | "right">(
    "down"
  );

  const [isMoving, setIsMoving] = useState(false);

  const cooldownRef = useRef({
    up: 0,
    down: 0,
    left: 0,
    right: 0,
  });

  const lastMoveTimeRef = useRef({
    up: 0,
    down: 0,
    left: 0,
    right: 0,
  });

  const moveIntervalRef = useRef<TMoveInterval>(null);

  const canMoveTo = ({ x, y }: TPosition): boolean => {
    const tileX = Math.floor(x / TILE_SIZE);
    const tileY = Math.floor(y / TILE_SIZE);

    if (tiles[tileY] && tiles[tileY].tiles[tileX]) {
      return !tiles[tileY].tiles[tileX].collidable;
    }
    return false;
  };

  const navigateTo = (newPosition: TPosition) => {
    const tileX = Math.floor(newPosition.x / TILE_SIZE);
    const tileY = Math.floor(newPosition.y / TILE_SIZE);

    if (tiles[tileY] && tiles[tileY].tiles[tileX]) {
      const tile = tiles[tileY].tiles[tileX];
      if (tile.isDoor) {
        setTimeout(() => {
          setMap(tile.destinationMap);
          setPosition({
            x: tile.destinationX * TILE_SIZE - TILE_SIZE,
            y: tile.destinationY * TILE_SIZE - TILE_SIZE,
          });
          stopMoving();
        }, 0);

        return true;
      }
    }
    return false;
  };

  const isCooldownOver = (direction: "up" | "down" | "left" | "right") => {
    const now = Date.now();
    return (
      now - lastMoveTimeRef.current[direction] >= cooldownRef.current[direction]
    );
  };

  const moveCharacter = (newDirection: "up" | "down" | "left" | "right") => {
    setPosition((prevPosition) => {
      let newPosition = { ...prevPosition };

      switch (newDirection) {
        case "up":
          if (canMoveTo({ x: prevPosition.x, y: prevPosition.y - TILE_SIZE })) {
            newPosition.y -= TILE_SIZE;
          }
          break;
        case "down":
          if (canMoveTo({ x: prevPosition.x, y: prevPosition.y + TILE_SIZE })) {
            newPosition.y += TILE_SIZE;
          }
          break;
        case "left":
          if (canMoveTo({ x: prevPosition.x - TILE_SIZE, y: prevPosition.y })) {
            newPosition.x -= TILE_SIZE;
          }
          break;
        case "right":
          if (canMoveTo({ x: prevPosition.x + TILE_SIZE, y: prevPosition.y })) {
            newPosition.x += TILE_SIZE;
          }
          break;
      }

      if (navigateTo(newPosition)) {
        return prevPosition;
      }

      return newPosition;
    });
  };

  const startMoving = (newDirection: "up" | "down" | "left" | "right") => {
    const now = Date.now();

    if (!isCooldownOver(newDirection)) {
      return;
    }

    lastMoveTimeRef.current[newDirection] = now;

    if (moveIntervalRef.current && direction === newDirection) {
      return;
    }

    if (moveIntervalRef.current) {
      clearInterval(moveIntervalRef.current);
      moveIntervalRef.current = null;
    }
    setIsMoving(true);

    setDirection(newDirection);
    moveCharacter(newDirection);
    moveIntervalRef.current = setInterval(() => {
      moveCharacter(newDirection);
    }, DELAY);

    cooldownRef.current[newDirection] = DELAY;
  };

  const stopMoving = () => {
    if (moveIntervalRef.current) {
      clearInterval(moveIntervalRef.current);
      moveIntervalRef.current = null;
    }
    setIsMoving(false);
  };

  return {
    position,
    direction,
    startMoving,
    stopMoving,
    isMoving,
    setIsMoving,
  };
}
