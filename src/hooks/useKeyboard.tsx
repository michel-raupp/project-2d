"use client";
import { useState, useEffect } from "react";

type TActiveKeys = string[];

export function useKeyboard() {
  const [activeKeys, setActiveKeys] = useState<TActiveKeys>([]);

  const handleKeyDown = (event: KeyboardEvent) => {
    setActiveKeys((prevKeys) => Array.from(new Set([...prevKeys, event.key])));
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    setActiveKeys((prevKeys) => prevKeys.filter((key) => key !== event.key));
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return activeKeys;
}
