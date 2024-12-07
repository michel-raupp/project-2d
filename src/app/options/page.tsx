"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useSound } from "@/providers";

import Char1 from "@/assets/characters/main_1/char_down_2.png";
import Char2 from "@/assets/characters/main_2/char_down_2.png";
import OkSound from "@/assets/sfx/ok.mp3";
import CursorSound from "@/assets/sfx/cursor.mp3";
import Music from "@/assets/music/RPG-Maker-VX-Ace-Town-5.mp3";

import Screen from "@/components/TemplateScreen";

export default function Options() {
  const { playMusic, playSfx } = useSound();
  const [selectedCharacter, setSelectedCharacter] = useState("1");

  const handleSelectCharacter = (char: string) => {
    setSelectedCharacter(char);
    playSfx(CursorSound);
  };

  const handleStartGame = () => {
    playSfx(OkSound);
    playMusic(Music);
  };

  return (
    <main className="h-full">
      <Screen
        title="Escolha de personagem"
        description="antes de sua aventura começar, escolha um personagem para lhe representar"
      >
        <div className="flex flex-col gap-4 items-center">
          <h2 className="text-slate-400">Selecione uma opção</h2>
          <div className="flex gap-2 ">
            <div
              className={`border-2 p-2 rounded-md bg-slate-600/50 ${selectedCharacter === "1" ? "border-orange-400 hover:bg-slate-600 hover:border-orange-300" : "border-slate-600 hover:border-slate-400 hover:bg-slate-600"} cursor-pointer`}
              onClick={() => handleSelectCharacter("1")}
            >
              <Image src={Char1} alt="Personagem 1" width={72} height={72} />
            </div>

            <div
              className={`border-2 p-2 rounded-md bg-slate-600/50 ${selectedCharacter === "2" ? "border-orange-400 hover:bg-slate-600 hover:border-orange-300" : "border-slate-600 hover:border-slate-400 hover:bg-slate-600"} cursor-pointer`}
              onClick={() => handleSelectCharacter("2")}
            >
              <Image src={Char2} alt="Personagem 2" width={72} height={72} />
            </div>
          </div>
        </div>

        <Link
          onClick={handleStartGame}
          href={`/game?char=${selectedCharacter}`}
          className="bg-orange-400 border-4 border-orange-300 p-4 text-white text-2xl font-bold rounded-md  hover:bg-orange-500 hover:border-b-[12px] hover:-mt-2 transition-all ease-in-out duration-300 active:border-b-[8px] active:-mt-1 mb-10"
        >
          Jogar
        </Link>
      </Screen>
    </main>
  );
}
