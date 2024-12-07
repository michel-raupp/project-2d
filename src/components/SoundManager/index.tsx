import React from "react";
import { IconVolume, IconVolumeOff } from "@tabler/icons-react";

import Music from "@/assets/music/RPG-Maker-VX-Ace-Town-5.mp3";
import OkSound from "@/assets/sfx/ok.mp3";

import { useSound } from "@/providers";

const SoundManager: React.FC = () => {
  const {
    playMusic,
    pauseMusic,
    isPlaying,
    sfxVolume,
    setSfxVolume,
    musicVolume,
    setMusicVolume,
    playSfx,
  } = useSound();

  const handleSfxVolumeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSfxVolume(Number(event.target.value));
  };

  const handleMusicVolumeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMusicVolume(Number(event.target.value));
  };

  const handleMutateMusic = () => {
    playSfx(OkSound);
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic(Music);
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full ">
      <button
        onClick={handleMutateMusic}
        className="bg-white text-slate-800 p-2 gap-1 w-full text-sm justify-between"
      >
        {isPlaying ? "Silenciar" : "Habilitar Música"}
        {isPlaying ? <IconVolume size={24} /> : <IconVolumeOff size={24} />}
      </button>

      <label className="flex flex-col mt-4 w-full">
        <p className="w-60">Efeitos: {(sfxVolume * 100).toFixed()}%</p>
        <input
          className="w-60"
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={sfxVolume}
          onChange={handleSfxVolumeChange}
        />
      </label>

      <label className="flex flex-col mt-4 w-full">
        <p className="w-60">Musica: {(musicVolume * 100).toFixed()}%</p>
        <input
          className="w-60"
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={musicVolume}
          onChange={handleMusicVolumeChange}
        />
      </label>
    </div>
  );
};

export default SoundManager;
