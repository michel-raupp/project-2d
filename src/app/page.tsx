"use client";
import { useRef } from "react";
import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMoodPuzzled,
  IconWorldShare,
} from "@tabler/icons-react";

import { useSound } from "@/providers";

import OkSound from "@/assets/sfx/ok.mp3";
import Music from "@/assets/music/RPG-Maker-VX-Ace-Airship.mp3";

import Screen from "@/components/TemplateScreen";
import AboutWindow, { AboutWindowRef } from "@/components/AboutWindow";

export default function Home() {
  const { playMusic, playSfx, setMusicVolume } = useSound();
  const aboutWindowRef = useRef<AboutWindowRef>(null);

  const handleGoToTutorial = () => {
    setMusicVolume(0.3);
    playSfx(OkSound);
    playMusic(Music);
  };

  const handleOpenModal = () => {
    if (aboutWindowRef.current) {
      aboutWindowRef.current.open();
    }
  };

  return (
    <main className="h-full">
      <Screen
        title="Project 2d"
        titleSize={48}
        description="um pequeno projeto de jogo 2D, só que na real é um site"
      >
        <Link
          onClick={handleGoToTutorial}
          href="/tutorial"
          className="bg-orange-400 border-4 border-orange-300 p-4 text-white text-2xl font-bold rounded-md  hover:bg-orange-500 hover:border-b-[12px] hover:-mt-2 transition-all ease-in-out duration-300 active:border-b-[8px] active:-mt-1"
        >
          Jogar
        </Link>

        <div className="flex w-full gap-2 items-center justify-start md:justify-between flex-wrap">
          <Link
            href="https://github.com/michel-raupp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="p-3 gap-2 w-fit self-end border-4 border-slate-700">
              <IconBrandGithub size={32} color="#7b8ba0" />
              <p className="text-slate-400">Github</p>
            </button>
          </Link>

          <Link
            href="https://www.linkedin.com/in/michelraupp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="p-3 gap-2 w-fit self-end border-4 border-slate-700">
              <IconBrandLinkedin size={32} color="#7b8ba0" />
              <p className="text-slate-400">Linkedin</p>
            </button>
          </Link>

          <Link
            href="https://michelraupp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="p-3 gap-2 w-fit self-end border-4 border-slate-700">
              <IconWorldShare size={32} color="#7b8ba0" />
              <p className="text-slate-400">Portifolio</p>
            </button>
          </Link>

          <button
            className="p-3 gap-2 w-fit self-end border-4 border-slate-700"
            onClick={handleOpenModal}
          >
            <IconMoodPuzzled size={32} color="#7b8ba0" />
            <p className="text-slate-400">Sobre</p>
          </button>
        </div>
        <AboutWindow ref={aboutWindowRef} />
      </Screen>
    </main>
  );
}
