"use client";
import Link from "next/link";
import {
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
  IconCircle,
} from "@tabler/icons-react";

import { useSound } from "@/providers";
import OkSound from "@/assets/sfx/ok.mp3";
import Screen from "@/components/TemplateScreen";

export default function Tutorial() {
  const { playSfx } = useSound();
  return (
    <main>
      <Screen
        title="Como jogar?"
        description="Antes de mais nada, um tutorial rápido para você entender como
              funcionam as coisas aqui"
      >
        <div className="flex w-full justify-around flex-wrap gap-16">
          <div className="flex flex-col items-center gap-4 w-48">
            <h2 className="text-slate-300 text-center">
              Navegue pelo mapa com as setas do teclado
            </h2>
            <div className="flex items-center justify-center flex-col gap-1">
              <button className="general-button p-2">
                <IconChevronUp size={24} color="white" />
              </button>
              <div className="flex flex-row gap-1">
                <button className="general-button p-2">
                  <IconChevronLeft size={24} color="white" />
                </button>
                <button className="general-button p-2">
                  <IconChevronDown size={24} color="white" />
                </button>
                <button className="general-button p-2">
                  <IconChevronRight size={24} color="white" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 w-48">
            <h2 className="text-slate-300 text-center">
              Ou pelo celular, clicando nos botões do DPAD
            </h2>
            <div className="flex items-center justify-center flex-col gap-1">
              <button className="general-button p-2">
                <IconChevronUp size={24} color="white" />
              </button>
              <div className="flex flex-row gap-1">
                <button className="general-button p-2">
                  <IconChevronLeft size={24} color="white" />
                </button>
                <div className="general-button p-2 rounded-md">
                  <IconCircle size={24} color="white" />
                </div>
                <button className="general-button p-2">
                  <IconChevronRight size={24} color="white" />
                </button>
              </div>
              <button className="general-button p-2">
                <IconChevronDown size={24} color="white" />
              </button>
            </div>
          </div>
        </div>

        <Link
          onClick={() => playSfx(OkSound)}
          href={`/options`}
          className="bg-orange-400 border-4 border-orange-300 p-4 text-white text-2xl font-bold rounded-md  hover:bg-orange-500 hover:border-b-[12px] hover:-mt-2 transition-all ease-in-out duration-300 active:border-b-[8px] active:-mt-1"
        >
          Bora lá
        </Link>
      </Screen>
    </main>
  );
}
