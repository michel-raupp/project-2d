"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  IconHome,
  IconMoodHappy,
  IconQuestionMark,
  IconSettings,
  IconX,
} from "@tabler/icons-react";

import CancelSound from "@/assets/sfx/cancel.mp3";
import OkSound from "@/assets/sfx/ok.mp3";
import Cursor from "@/assets/sfx/cursor.mp3";

import { MAP_TYPES, TILE_SIZE } from "@/constants";
import { useKeyboard, useMovement } from "@/hooks";
import { useMap, useSound } from "@/providers";
import { house, plains } from "@/data";

import { Character, Dpad, SoundManager } from "@/components";
import { PlainsMap, HouseMap } from "@/components/Map";
import AboutWindow, { AboutWindowRef } from "@/components/AboutWindow";

const GameContainer = () => {
  const searchParams = useSearchParams();
  const char = searchParams.get("char");
  const aboutWindowRef = useRef<AboutWindowRef>(null);

  const { playSfx, pauseMusic } = useSound();

  const { currentMap, setMap } = useMap();
  const [selectedCharacter, setSelectedCharacter] = useState(char);
  const [settingsIsOpen, setSettingsIsOpen] = useState(false);

  const initialCharacterPosition = { x: 8, y: 8 };
  const initialPosition = {
    x: initialCharacterPosition.x * TILE_SIZE,
    y: initialCharacterPosition.y * TILE_SIZE,
  };

  const mapHeight = plains.length * TILE_SIZE;
  const mapWidth = plains[0].tiles.length * TILE_SIZE;

  const [actualMapTiles, setActualMapTiles] = useState(plains);

  const { position, direction, startMoving, stopMoving, isMoving } =
    useMovement({
      initialPosition,
      tiles: actualMapTiles,
      setMap,
    });

  const activeKeys = useKeyboard();
  const [dpadInUse, setDpadInUse] = useState<boolean>(false);

  const upPressed = activeKeys.includes("ArrowUp") || activeKeys.includes("w");
  const downPressed =
    activeKeys.includes("ArrowDown") || activeKeys.includes("s");
  const leftPressed =
    activeKeys.includes("ArrowLeft") || activeKeys.includes("a");
  const rightPressed =
    activeKeys.includes("ArrowRight") || activeKeys.includes("d");

  useEffect(() => {
    if (upPressed && !downPressed && !leftPressed && !rightPressed)
      startMoving("up");
    if (downPressed && !upPressed && !leftPressed && !rightPressed)
      startMoving("down");
    if (leftPressed && !rightPressed && !upPressed && !downPressed)
      startMoving("left");
    if (rightPressed && !leftPressed && !upPressed && !downPressed)
      startMoving("right");

    if (
      !dpadInUse &&
      !upPressed &&
      !downPressed &&
      !leftPressed &&
      !rightPressed
    ) {
      stopMoving();
    }
  }, [
    activeKeys,
    startMoving,
    stopMoving,
    dpadInUse,
    upPressed,
    downPressed,
    leftPressed,
    rightPressed,
  ]);

  const invertedPosition = { x: -position.x, y: -position.y };

  useEffect(() => {
    stopMoving();
    if (currentMap === MAP_TYPES.PLAINS) {
      setActualMapTiles(plains);
    }
    if (currentMap === MAP_TYPES.HOUSE) {
      setActualMapTiles(house);
    }
  }, [currentMap]);

  const selectNextCharacter = () => {
    playSfx(Cursor);
    setSelectedCharacter((prev) => (prev === "1" ? "2" : "1"));
  };

  const openSettings = () => {
    playSfx(OkSound);
    setSettingsIsOpen(true);
  };

  const closeSettings = () => {
    playSfx(CancelSound);
    setSettingsIsOpen(false);
  };

  const handleOpenAboutModal = () => {
    if (aboutWindowRef.current) {
      aboutWindowRef.current.open();
    }
  };

  const goToHome = () => {
    playSfx(OkSound);
    pauseMusic();
  };

  return (
    <div className="overflow-hidden w-full h-screen bg-slate-800 flex items-center justify-center select-none">
      <div className="flex fixed top-4 left-4 z-30 gap-2 ">
        <Link href="/" passHref onClick={goToHome}>
          <button className="p-3 w-fit self-end bg-slate-700 border-2 border-slate-500 ">
            <IconHome size={32} />
          </button>
        </Link>
        <button
          className="p-3 w-fit self-end bg-slate-700 border-2 border-slate-500 "
          onClick={handleOpenAboutModal}
        >
          <IconQuestionMark size={32} />
        </button>
      </div>
      <div className="flex fixed top-4 right-4 z-30 gap-2 flex-col">
        <button
          className="p-3 w-fit self-end bg-orange-700 border-2 border-orange-500 "
          onClick={settingsIsOpen ? closeSettings : openSettings}
        >
          {settingsIsOpen ? <IconX size={32} /> : <IconSettings size={32} />}
        </button>

        {settingsIsOpen && (
          <div className="bg-slate-700 border-2 border-slate-500 p-4 rounded-md text-white flex flex-col w-auto h-auto items-start gap-4">
            <h1 className="font-bold text-lg">Configurações</h1>
            <hr className="text-white w-full" />

            <button
              onClick={selectNextCharacter}
              className="bg-white text-slate-800 p-2 gap-1 text-sm w-full justify-between"
            >
              Trocar de Personagem
              <IconMoodHappy size={24} />
            </button>

            <hr className="text-white w-full" />

            <SoundManager />
          </div>
        )}
      </div>

      <Dpad onMove={startMoving} setDpadInUse={setDpadInUse} />

      <div className="fixed top-0 left-0 w-full h-full pointer-events-none select-none"></div>

      <div className="fixed pointer-events-none select-none">
        {currentMap === MAP_TYPES.PLAINS && (
          <PlainsMap
            position={invertedPosition}
            height={mapHeight}
            width={mapWidth}
          >
            <Character
              position={position}
              direction={direction}
              moving={isMoving}
              selectedCharacter={selectedCharacter}
            />
          </PlainsMap>
        )}
        {currentMap === MAP_TYPES.HOUSE && (
          <HouseMap
            position={invertedPosition}
            height={mapHeight}
            width={mapWidth}
          >
            <Character
              position={position}
              direction={direction}
              moving={isMoving}
              selectedCharacter={selectedCharacter}
            />
          </HouseMap>
        )}
      </div>
      <AboutWindow ref={aboutWindowRef} />
    </div>
  );
};

export default GameContainer;
