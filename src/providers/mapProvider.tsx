"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

import { MAP_TYPES } from "@/constants";

type MapType = string;

interface MapContextProps {
  currentMap: MapType;
  setMap: (map: MapType) => void;
}

const MapContext = createContext<MapContextProps | undefined>(undefined);

export const MapProvider = ({ children }: { children: ReactNode }) => {
  const [currentMap, setCurrentMap] = useState<MapType>(MAP_TYPES.PLAINS);

  const setMap = (map: MapType) => {
    setCurrentMap(map);
  };

  return (
    <MapContext.Provider value={{ currentMap, setMap }}>
      {children}
    </MapContext.Provider>
  );
};

export const useMap = () => {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error("useMap must be used within a MapProvider");
  }
  return context;
};
