"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface SoundContextProps {
  playMusic: (musicUrl: string) => void;
  playSfx: (sfx: string) => void;
  pauseMusic: () => void;
  toggleMuteMusic: () => void;
  toggleMuteSfx: () => void;
  isPlaying: boolean;
  isMusicMuted: boolean;
  isSfxMuted: boolean;
  musicVolume: number;
  setMusicVolume: (newVolume: number) => void;
  sfxVolume: number;
  setSfxVolume: (newVolume: number) => void;
}

const SoundContext = createContext<SoundContextProps | undefined>(undefined);

export const SoundProvider = ({ children }: { children: ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMusicMuted, setIsMusicMuted] = useState<boolean>(false);
  const [isSfxMuted, setIsSfxMuted] = useState<boolean>(false);
  const [sfxVolume, setSfxVolume] = useState<number>(0.2);
  const [musicVolume, setMusicVolume] = useState<number>(0.2);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audio) {
      audio.volume = isMusicMuted ? 0 : musicVolume;
    }
  }, [musicVolume, isMusicMuted, audio]);

  const playMusic = async (musicUrl: string) => {
    if (audio) {
      await audio.pause();
      audio.src = musicUrl;
    } else {
      const newAudio = new Audio(musicUrl);
      newAudio.loop = true;
      newAudio.volume = isMusicMuted ? 0 : musicVolume;
      setAudio(newAudio);
      try {
        await newAudio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Erro ao reproduzir a música:", error);
      }
    }

    try {
      await audio?.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Erro ao reproduzir a música:", error);
    }
  };

  const pauseMusic = () => {
    if (audio && isPlaying) {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const playSfx = (sfx: string) => {
    const sfxAudio = new Audio(sfx);
    sfxAudio.volume = isSfxMuted ? 0 : sfxVolume;
    sfxAudio.play().catch((error) => {
      console.error("Erro ao reproduzir o SFX:", error);
    });
  };

  const toggleMuteMusic = () => {
    setIsMusicMuted((prev) => !prev);
  };

  const toggleMuteSfx = () => {
    setIsSfxMuted((prev) => !prev);
  };

  const handleMusicVolumeChange = (newVolume: number) => {
    setMusicVolume(newVolume);
  };

  const handleSfxVolumeChange = (newVolume: number) => {
    setSfxVolume(newVolume);
  };

  return (
    <SoundContext.Provider
      value={{
        playMusic,
        playSfx,
        pauseMusic,
        toggleMuteMusic,
        toggleMuteSfx,
        musicVolume,
        setMusicVolume: handleMusicVolumeChange,
        sfxVolume,
        setSfxVolume: handleSfxVolumeChange,
        isPlaying,
        isMusicMuted,
        isSfxMuted,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error(
      "useSound precisa ser usado dentro do provider SoundProvider"
    );
  }
  return context;
};
