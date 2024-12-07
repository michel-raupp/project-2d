import { MAP_TYPES } from "@/constants";
import { TILES_TYPES } from "@/constants/tiles";

export const plains = [
  {
    y: 1,
    tiles: [
      { x: 1, type: TILES_TYPES.GRASS_1 },
      { x: 2, type: TILES_TYPES.TRUNK_2, collidable: true },
      { x: 3, type: TILES_TYPES.GRASS_1 },
      { x: 4, type: TILES_TYPES.GRASS_1 },
      { x: 5, type: TILES_TYPES.GRASS_2 },
      { x: 6, type: TILES_TYPES.GRASS_1 },
      { x: 7, type: TILES_TYPES.GRASS_2 },
      { x: 8, type: TILES_TYPES.GRASS_1 },
      { x: 9, type: TILES_TYPES.GRASS_1 },
      { x: 10, type: TILES_TYPES.GRASS_1 },
      { x: 11, type: TILES_TYPES.GRASS_3 },
      { x: 12, type: TILES_TYPES.GRASS_1 },
    ],
  },
  {
    y: 2,
    tiles: [
      { x: 1, type: TILES_TYPES.GRASS_1 },
      { x: 2, type: TILES_TYPES.GRASS_1 },
      { x: 3, type: TILES_TYPES.GRASS_1 },
      { x: 4, type: TILES_TYPES.GRASS_1 },
      { x: 5, type: TILES_TYPES.GRASS_2 },
      { x: 6, type: TILES_TYPES.GRASS_1 },
      { x: 7, type: TILES_TYPES.GRASS_1 },
      { x: 8, type: TILES_TYPES.GRASS_2 },
      { x: 9, type: TILES_TYPES.GRASS_1 },
      { x: 10, type: TILES_TYPES.GRASS_1 },
      { x: 11, type: TILES_TYPES.WELL, collidable: true },
      { x: 12, type: TILES_TYPES.GRASS_2 },
    ],
  },
  {
    y: 3,
    tiles: [
      { x: 1, type: TILES_TYPES.GRASS_1 },
      { x: 2, type: TILES_TYPES.GRASS_3 },
      { x: 3, type: TILES_TYPES.GRASS_1 },
      { x: 4, type: TILES_TYPES.GRASS_1 },
      { x: 5, type: TILES_TYPES.ROOF_1, collidable: true },
      { x: 6, type: TILES_TYPES.ROOF_1, collidable: true },
      { x: 7, type: TILES_TYPES.ROOF_1, collidable: true },
      { x: 8, type: TILES_TYPES.ROOF_1, collidable: true },
      { x: 9, type: TILES_TYPES.ROOF_1, collidable: true },
      { x: 10, type: TILES_TYPES.GRASS_1 },
      { x: 11, type: TILES_TYPES.PATH_1 },
      { x: 12, type: TILES_TYPES.GRASS_1 },
    ],
  },
  {
    y: 4,
    tiles: [
      { x: 1, type: TILES_TYPES.GRASS_1 },
      { x: 2, type: TILES_TYPES.GRASS_1 },
      { x: 3, type: TILES_TYPES.GRASS_1 },
      { x: 4, type: TILES_TYPES.GRASS_1 },
      { x: 5, type: TILES_TYPES.ROOF_2, collidable: true },
      { x: 6, type: TILES_TYPES.ROOF_2, collidable: true },
      { x: 7, type: TILES_TYPES.ROOF_2, collidable: true },
      { x: 8, type: TILES_TYPES.ROOF_2, collidable: true },
      { x: 9, type: TILES_TYPES.ROOF_2, collidable: true },
      { x: 10, type: TILES_TYPES.GRASS_1 },
      { x: 11, type: TILES_TYPES.PATH_1 },
      { x: 12, type: TILES_TYPES.GRASS_1 },
    ],
  },
  {
    y: 5,
    tiles: [
      { x: 1, type: TILES_TYPES.GRASS_1 },
      { x: 2, type: TILES_TYPES.GRASS_3 },
      { x: 3, type: TILES_TYPES.GRASS_1 },
      { x: 4, type: TILES_TYPES.LOGS_1, collidable: true },
      { x: 5, type: TILES_TYPES.WALL_3, collidable: true },
      { x: 6, type: TILES_TYPES.WINDOW_1, collidable: true },
      { x: 7, type: TILES_TYPES.WALL_3, collidable: true },
      {
        x: 8,
        type: TILES_TYPES.DOOR_1,
        isDoor: true,
        destinationMap: MAP_TYPES.HOUSE,
        destinationX: 7,
        destinationY: 7,
      },
      { x: 9, type: TILES_TYPES.WALL_3, collidable: true },
      { x: 10, type: TILES_TYPES.GRASS_3 },
      { x: 11, type: TILES_TYPES.PATH_1 },
      { x: 12, type: TILES_TYPES.GRASS_3 },
    ],
  },
  {
    y: 6,
    tiles: [
      { x: 1, type: TILES_TYPES.GRASS_3 },
      { x: 2, type: TILES_TYPES.GRASS_1 },
      {
        x: 3,
        type: TILES_TYPES.CRATE_1_CLOSED,
        collidable: true,
        interactlable: true,
      },
      { x: 4, type: TILES_TYPES.GRASS_3 },
      { x: 5, type: TILES_TYPES.GRASS_1 },
      { x: 6, type: TILES_TYPES.GRASS_1 },
      { x: 7, type: TILES_TYPES.GRASS_1 },
      { x: 8, type: TILES_TYPES.PATH_1 },
      { x: 9, type: TILES_TYPES.GRASS_1 },
      { x: 10, type: TILES_TYPES.GRASS_1 },
      { x: 11, type: TILES_TYPES.PATH_1 },
      { x: 12, type: TILES_TYPES.GRASS_1 },
    ],
  },
  {
    y: 7,
    tiles: [
      { x: 1, type: TILES_TYPES.GROUND_TOP },
      { x: 2, type: TILES_TYPES.GROUND_TOP },
      { x: 3, type: TILES_TYPES.GROUND_TOP },
      { x: 4, type: TILES_TYPES.GROUND_TOP },
      { x: 5, type: TILES_TYPES.GROUND_TOP },
      { x: 6, type: TILES_TYPES.GROUND_TOP },
      { x: 7, type: TILES_TYPES.GROUND_TOP },
      { x: 8, type: TILES_TYPES.GROUND_TOP },
      { x: 9, type: TILES_TYPES.GROUND_TOP },
      { x: 10, type: TILES_TYPES.GROUND_TOP },
      { x: 11, type: TILES_TYPES.GROUND_TOP_RIGHT },
      { x: 12, type: TILES_TYPES.GRASS_1 },
    ],
  },
  {
    y: 8,
    tiles: [
      { x: 1, type: TILES_TYPES.GROUND_BOTTOM },
      { x: 2, type: TILES_TYPES.GROUND_BOTTOM },
      { x: 3, type: TILES_TYPES.GROUND_BOTTOM },
      { x: 4, type: TILES_TYPES.GROUND_BOTTOM },
      { x: 5, type: TILES_TYPES.GROUND_BOTTOM },
      { x: 6, type: TILES_TYPES.GROUND_BOTTOM },
      { x: 7, type: TILES_TYPES.GROUND_BOTTOM },
      { x: 8, type: TILES_TYPES.GROUND_BOTTOM },
      { x: 9, type: TILES_TYPES.GROUND_BOTTOM },
      { x: 10, type: TILES_TYPES.GROUND_CORNER_BOTTOM_LEFT },
      { x: 11, type: TILES_TYPES.GROUND_MIDDLE_RIGHT },
      { x: 12, type: TILES_TYPES.GRASS_1 },
    ],
  },
  {
    y: 9,
    tiles: [
      { x: 1, type: TILES_TYPES.GRASS_1 },
      { x: 2, type: TILES_TYPES.GRASS_3 },
      { x: 3, type: TILES_TYPES.GRASS_1 },
      { x: 4, type: TILES_TYPES.GRASS_1 },
      { x: 5, type: TILES_TYPES.TRUNK_1, collidable: true },
      { x: 6, type: TILES_TYPES.GRASS_1 },
      { x: 7, type: TILES_TYPES.GRASS_3 },
      { x: 8, type: TILES_TYPES.GRASS_1 },
      { x: 9, type: TILES_TYPES.GRASS_1 },
      { x: 10, type: TILES_TYPES.GROUND_MIDDLE_LEFT },
      { x: 11, type: TILES_TYPES.GROUND_MIDDLE_RIGHT },
      { x: 12, type: TILES_TYPES.GRASS_1 },
    ],
  },
  {
    y: 10,
    tiles: [
      { x: 1, type: TILES_TYPES.GRASS_1 },
      { x: 2, type: TILES_TYPES.GRASS_1 },
      { x: 3, type: TILES_TYPES.GRASS_1 },
      { x: 4, type: TILES_TYPES.GRASS_1 },
      { x: 5, type: TILES_TYPES.GRASS_1 },
      { x: 6, type: TILES_TYPES.GRASS_1 },
      { x: 7, type: TILES_TYPES.TREE_1, collidable: true },
      { x: 8, type: TILES_TYPES.TREE_2, collidable: true },
      { x: 9, type: TILES_TYPES.GRASS_1 },
      { x: 10, type: TILES_TYPES.GROUND_MIDDLE_LEFT },
      { x: 11, type: TILES_TYPES.GROUND_MIDDLE_RIGHT },
      { x: 12, type: TILES_TYPES.GRASS_1 },
    ],
  },
  {
    y: 11,
    tiles: [
      { x: 1, type: TILES_TYPES.GRASS_1 },
      { x: 2, type: TILES_TYPES.GRASS_1 },
      { x: 3, type: TILES_TYPES.GRASS_3 },
      { x: 4, type: TILES_TYPES.GRASS_1 },
      { x: 5, type: TILES_TYPES.GRASS_3 },
      { x: 6, type: TILES_TYPES.GRASS_1 },
      { x: 7, type: TILES_TYPES.TREE_3, collidable: true },
      { x: 8, type: TILES_TYPES.TREE_4, collidable: true },
      { x: 9, type: TILES_TYPES.GRASS_1 },
      { x: 10, type: TILES_TYPES.GROUND_MIDDLE_LEFT },
      { x: 11, type: TILES_TYPES.GROUND_MIDDLE_RIGHT },
      { x: 12, type: TILES_TYPES.GRASS_3 },
    ],
  },
  {
    y: 12,
    tiles: [
      { x: 1, type: TILES_TYPES.GRASS_3 },
      { x: 2, type: TILES_TYPES.GRASS_1 },
      { x: 3, type: TILES_TYPES.GRASS_2 },
      { x: 4, type: TILES_TYPES.GRASS_3 },
      { x: 5, type: TILES_TYPES.GRASS_1 },
      { x: 6, type: TILES_TYPES.GRASS_2 },
      { x: 7, type: TILES_TYPES.GRASS_3 },
      { x: 8, type: TILES_TYPES.GRASS_1 },
      { x: 9, type: TILES_TYPES.GRASS_1 },
      { x: 10, type: TILES_TYPES.GROUND_MIDDLE_LEFT },
      { x: 11, type: TILES_TYPES.GROUND_MIDDLE_RIGHT },
      { x: 12, type: TILES_TYPES.GRASS_1 },
    ],
  },
];
