"use client";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import { IconX } from "@tabler/icons-react";

import { useSound } from "@/providers";

import OkSound from "@/assets/sfx/ok.mp3";
import CancelSound from "@/assets/sfx/cancel.mp3";

export interface AboutWindowRef {
  open: () => void;
  close: () => void;
}

const AboutWindow = forwardRef<AboutWindowRef>((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const { playSfx } = useSound();

  useImperativeHandle(ref, () => ({
    open() {
      playSfx(OkSound);
      setIsOpen(true);
    },
    close() {
      playSfx(CancelSound);
      setIsOpen(false);
    },
  }));

  const handleClose = () => {
    playSfx(CancelSound);
    setIsOpen(false);
  };

  if (!isOpen) return <div className="flex-none hidden"></div>;

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-2 md:p-8 fixed top-0 z-50">
      <div className="flex flex-col items-center  w-full h-full bg-slate-800 border-2 border-slate-600 rounded-lg max-w-3xl p-4 md:p-15 gap-8 overflow-y-scroll">
        <div className="flex flex-col items-center gap-8 pb-8 border-b border-slate-600 w-full">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-slate-200 font-black text-2xl">
              Sobre o Projeto
            </h1>
            <button
              className="p-3 gap-2 w-fit self-end border-4 border-orange-500"
              onClick={handleClose}
            >
              <IconX size={24} color="white" />
            </button>
          </div>
          <p className="text-slate-400 text-sm sm:text-base">
            O projeto tem por intuito desafiar o comum e testar o quão funcional
            é um site que tem a movimentação similar a um RPG.
          </p>
        </div>
        <div className="flex flex-col gap-4 justify-between h-full">
          <h2 className="text-slate-200 font-black text-xl">Como foi feito?</h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Basicamente, o jogo lê um array de objetos contendo o tipo de piso e
            os renderiza na tela. A movimentação é feita através de um sistema
            de coordenadas que é atualizado a cada movimento e verifica se o
            jogador está em um piso válido.
          </p>
          <h2 className="text-slate-200 font-black text-xl">
            Tecnologias Utilizadas
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Apesar da complexidade aparente, em questão de código poderia ter
            sido feito com React ou até mesmo Javascript puro. Entretanto, como
            fazia tempo que não mexia com Next.js, decidi fazer o projeto com
            ele.
          </p>
          <h2 className="text-slate-200 font-black text-xl">
            E quanto aos assets?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Todos os assets, incluindo as músicas foram retiradas do{" "}
            <span className="text-white">RPG Maker VX Ace</span>. Portanto não
            são de minha autoria.
          </p>
        </div>
      </div>
    </div>
  );
});

AboutWindow.displayName = "AboutWindow";

export default AboutWindow;
