import { MAP_TYPES } from "@/constants";
import { TILES_TYPES } from "@/constants/tiles";

export const house = [
  {
    y: 1,
    tiles: [
      { x: 1, type: TILES_TYPES.INDOOR_ROOF_1, collidable: true },
      { x: 2, type: TILES_TYPES.INDOOR_ROOF_2, collidable: true },
      { x: 3, type: TILES_TYPES.INDOOR_ROOF_2, collidable: true },
      { x: 4, type: TILES_TYPES.INDOOR_ROOF_2, collidable: true },
      { x: 5, type: TILES_TYPES.INDOOR_ROOF_2, collidable: true },
      { x: 6, type: TILES_TYPES.INDOOR_ROOF_2, collidable: true },
      { x: 7, type: TILES_TYPES.INDOOR_ROOF_2, collidable: true },
      { x: 8, type: TILES_TYPES.INDOOR_ROOF_2, collidable: true },
      { x: 9, type: TILES_TYPES.INDOOR_ROOF_2, collidable: true },
      { x: 10, type: TILES_TYPES.INDOOR_ROOF_3, collidable: true },
    ],
  },
  {
    y: 2,
    tiles: [
      { x: 1, type: TILES_TYPES.INDOOR_ROOF_1, collidable: true },
      { x: 2, type: TILES_TYPES.WALL_1, collidable: true },
      { x: 3, type: TILES_TYPES.CHIMNEY_1, collidable: true },
      { x: 4, type: TILES_TYPES.WALL_1, collidable: true },
      { x: 5, type: TILES_TYPES.INDOOR_WINDOW_1, collidable: true },
      { x: 6, type: TILES_TYPES.WALL_1, collidable: true },
      { x: 7, type: TILES_TYPES.WALL_1, collidable: true },
      { x: 8, type: TILES_TYPES.INDOOR_WINDOW_1, collidable: true },
      { x: 9, type: TILES_TYPES.WALL_1, collidable: true },
      { x: 10, type: TILES_TYPES.INDOOR_ROOF_3, collidable: true },
    ],
  },
  {
    y: 3,
    tiles: [
      { x: 1, type: TILES_TYPES.INDOOR_ROOF_1, collidable: true },
      { x: 2, type: TILES_TYPES.WALL_2, collidable: true },
      { x: 3, type: TILES_TYPES.CHIMNEY_2, collidable: true },
      { x: 4, type: TILES_TYPES.WALL_2, collidable: true },
      { x: 5, type: TILES_TYPES.INDOOR_WINDOW_2, collidable: true },
      { x: 6, type: TILES_TYPES.WALL_2, collidable: true },
      { x: 7, type: TILES_TYPES.WALL_2, collidable: true },
      { x: 8, type: TILES_TYPES.INDOOR_WINDOW_2, collidable: true },
      { x: 9, type: TILES_TYPES.WALL_2, collidable: true },
      { x: 10, type: TILES_TYPES.INDOOR_ROOF_3, collidable: true },
    ],
  },
  {
    y: 4,
    tiles: [
      { x: 1, type: TILES_TYPES.INDOOR_ROOF_1, collidable: true },
      { x: 2, type: TILES_TYPES.FLOOR_2 },
      { x: 3, type: TILES_TYPES.FLOOR_2 },
      { x: 4, type: TILES_TYPES.FLOOR_2 },
      { x: 5, type: TILES_TYPES.FLOOR_2 },
      { x: 6, type: TILES_TYPES.FLOOR_2 },
      { x: 7, type: TILES_TYPES.FLOOR_2 },
      { x: 8, type: TILES_TYPES.FLOOR_2 },
      { x: 9, type: TILES_TYPES.BED_1, collidable: true },
      { x: 10, type: TILES_TYPES.INDOOR_ROOF_3, collidable: true },
    ],
  },

  {
    y: 5,
    tiles: [
      { x: 1, type: TILES_TYPES.INDOOR_ROOF_1, collidable: true },
      { x: 2, type: TILES_TYPES.FLOOR_2 },
      { x: 3, type: TILES_TYPES.RUG_1 },
      { x: 4, type: TILES_TYPES.RUG_2 },
      { x: 5, type: TILES_TYPES.RUG_2 },
      { x: 6, type: TILES_TYPES.RUG_2 },
      { x: 7, type: TILES_TYPES.RUG_3 },
      { x: 8, type: TILES_TYPES.FLOOR_2 },
      { x: 9, type: TILES_TYPES.BED_2, collidable: true },
      { x: 10, type: TILES_TYPES.INDOOR_ROOF_3, collidable: true },
    ],
  },

  {
    y: 6,
    tiles: [
      { x: 1, type: TILES_TYPES.INDOOR_ROOF_1, collidable: true },
      { x: 2, type: TILES_TYPES.FLOOR_2 },
      { x: 3, type: TILES_TYPES.RUG_7 },
      { x: 4, type: TILES_TYPES.RUG_8 },
      { x: 5, type: TILES_TYPES.RUG_8 },
      { x: 6, type: TILES_TYPES.RUG_8 },
      { x: 7, type: TILES_TYPES.RUG_9 },
      { x: 8, type: TILES_TYPES.FLOOR_2 },
      { x: 9, type: TILES_TYPES.FLOOR_2 },
      { x: 10, type: TILES_TYPES.INDOOR_ROOF_3, collidable: true },
    ],
  },
  {
    y: 7,
    tiles: [
      { x: 1, type: TILES_TYPES.INDOOR_ROOF_1, collidable: true },
      { x: 2, type: TILES_TYPES.FLOOR_2 },
      { x: 3, type: TILES_TYPES.FLOOR_2 },
      { x: 4, type: TILES_TYPES.FLOOR_2 },
      { x: 5, type: TILES_TYPES.FLOOR_2 },
      { x: 6, type: TILES_TYPES.FLOOR_2 },
      { x: 7, type: TILES_TYPES.FLOOR_2 },
      { x: 8, type: TILES_TYPES.FLOOR_2 },
      { x: 9, type: TILES_TYPES.FLOOR_2 },
      { x: 10, type: TILES_TYPES.INDOOR_ROOF_3, collidable: true },
    ],
  },
  {
    y: 8,
    tiles: [
      { x: 1, type: TILES_TYPES.INDOOR_ROOF_1, collidable: true },
      { x: 2, type: TILES_TYPES.INDOOR_ROOF_2, collidable: true },
      { x: 3, type: TILES_TYPES.INDOOR_ROOF_2, collidable: true },
      { x: 4, type: TILES_TYPES.INDOOR_ROOF_2, collidable: true },
      { x: 5, type: TILES_TYPES.INDOOR_ROOF_2, collidable: true },
      { x: 6, type: TILES_TYPES.INDOOR_ROOF_3, collidable: true },
      {
        x: 7,
        type: TILES_TYPES.FLOOR_2_EXIT,
        isDoor: true,
        destinationMap: MAP_TYPES.PLAINS,
        destinationX: 8,
        destinationY: 6,
      },
      { x: 8, type: TILES_TYPES.INDOOR_ROOF_1, collidable: true },
      { x: 9, type: TILES_TYPES.INDOOR_ROOF_2, collidable: true },
      { x: 10, type: TILES_TYPES.INDOOR_ROOF_3, collidable: true },
    ],
  },
];
