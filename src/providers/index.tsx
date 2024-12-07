"use client";

import { SoundProvider } from "./soundProvider";
import { MapProvider } from "./mapProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SoundProvider>
      <MapProvider>{children}</MapProvider>
    </SoundProvider>
  );
}

export { useSound } from "./soundProvider";
export { useMap } from "./mapProvider";
