import React from "react";

import { house } from "@/data/house";

import Tile from "@/components/Tile";

type Position = {
  x: number;
  y: number;
};

type MapProps = {
  position: Position;
  height: number;
  width: number;
  children: React.ReactNode;
};

const HouseMap = ({ position, height, width, children }: MapProps) => {
  return (
    <div
      className={`absolute -left-8 -top-8 transition-all ease-linear duration-200 pointer-events-none select-none`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        width: `${width}px`,
        height: `${height}px}`,
      }}
    >
      {children}
      {house.map((row) => (
        <div className="flex " key={row.y}>
          {row.tiles.map((tile, colIndex) => (
            <Tile key={colIndex} type={tile.type} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default HouseMap;
