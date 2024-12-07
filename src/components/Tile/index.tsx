import React from "react";
import Image from "next/image";

// Grass
import Grass1 from "@/assets/tiles/grass/grass_1.png";
import Grass2 from "@/assets/tiles/grass/grass_2.png";
import Grass3 from "@/assets/tiles/grass/grass_3.png";
import Grass4 from "@/assets/tiles/grass/grass_4.png";
import Grass5 from "@/assets/tiles/grass/grass_5.png";

// Flowers
import Flowers1 from "@/assets/tiles/flowers/flowers_1.png";
import Flowers2 from "@/assets/tiles/flowers/flowers_2.png";

// Crates
import Crate1Closed from "@/assets/tiles/crate/crate_1_closed.png";
import Crate1Opened from "@/assets/tiles/crate/crate_1_opened.png";

// Tent
import Tent1 from "@/assets/tiles/tent/tent_1.png";
import Tent2 from "@/assets/tiles/tent/tent_2.png";
import Tent3 from "@/assets/tiles/tent/tent_3.png";
import Tent4 from "@/assets/tiles/tent/tent_4.png";
import Tent5 from "@/assets/tiles/tent/tent_5.png";
import Tent6 from "@/assets/tiles/tent/tent_6.png";
import Tent7 from "@/assets/tiles/tent/tent_7.png";
import Tent8 from "@/assets/tiles/tent/tent_8.png";
import Tent9 from "@/assets/tiles/tent/tent_9.png";

// Grounds
import GroundBottom from "@/assets/tiles/ground/ground_bottom.png";
import GroundBottomLeft from "@/assets/tiles/ground/ground_bottom_left.png";
import GroundBottomRight from "@/assets/tiles/ground/ground_bottom_right.png";
import GroundTop from "@/assets/tiles/ground/ground_top.png";
import GroundTopLeft from "@/assets/tiles/ground/ground_top_left.png";
import GroundTopRight from "@/assets/tiles/ground/ground_top_right.png";
import GroundMiddle from "@/assets/tiles/ground/ground_middle.png";
import GroundMiddleLeft from "@/assets/tiles/ground/ground_middle_left.png";
import GroundMiddleRight from "@/assets/tiles/ground/ground_middle_right.png";
import GroundCross from "@/assets/tiles/ground/ground_cross.png";
import GroundCornerBottomLeft from "@/assets/tiles/ground/ground_corner_bottom_left.png";
import GroundCornerBottomRight from "@/assets/tiles/ground/ground_corner_bottom_right.png";
import GroundCornerTopLeft from "@/assets/tiles/ground/ground_corner_top_left.png";
import GroundCornerTopRight from "@/assets/tiles/ground/ground_corner_top_right.png";
import GroundCornersLeft from "@/assets/tiles/ground/ground_corners_left.png";
import GroundCornersRight from "@/assets/tiles/ground/ground_corners_right.png";
import GroundCornersTop from "@/assets/tiles/ground/ground_corners_top.png";
import GroundCornersBottom from "@/assets/tiles/ground/ground_corners_bottom.png";

// Trees
import Tree1 from "@/assets/tiles/tree/tree_1.png";
import Tree2 from "@/assets/tiles/tree/tree_2.png";
import Tree3 from "@/assets/tiles/tree/tree_3.png";
import Tree4 from "@/assets/tiles/tree/tree_4.png";
import Trunk1 from "@/assets/tiles/tree/tree_trunk_1.png";
import Trunk2 from "@/assets/tiles/tree/tree_trunk_2.png";

// Misc
import Sign1 from "@/assets/tiles/misc/sign_1.png";
import WaterTank from "@/assets/tiles/misc/water_tank.png";
import Door1 from "@/assets/tiles/misc/door_1.png";
import Logs1 from "@/assets/tiles/misc/logs_1.png";
import Path1 from "@/assets/tiles/misc/path_1.png";
import Well from "@/assets/tiles/misc/well.png";

// House
import Roof1 from "@/assets/tiles/house/roof_1.png";
import Roof2 from "@/assets/tiles/house/roof_2.png";
import Wall1 from "@/assets/tiles/house/wall_1.png";
import Wall2 from "@/assets/tiles/house/wall_2.png";
import Wall3 from "@/assets/tiles/house/wall_3.png";
import Window1 from "@/assets/tiles/house/window_1.png";
import Floor1 from "@/assets/tiles/house/floor_1.png";
import Floor1Exit from "@/assets/tiles/house/floor_1_exit.png";
import Floor2 from "@/assets/tiles/house/floor_2.png";
import Floor2Exit from "@/assets/tiles/house/floor_2_exit.png";
import Rug1 from "@/assets/tiles/house/rug_1.png";
import Rug2 from "@/assets/tiles/house/rug_2.png";
import Rug3 from "@/assets/tiles/house/rug_3.png";
import Rug4 from "@/assets/tiles/house/rug_4.png";
import Rug5 from "@/assets/tiles/house/rug_5.png";
import Rug6 from "@/assets/tiles/house/rug_6.png";
import Rug7 from "@/assets/tiles/house/rug_7.png";
import Rug8 from "@/assets/tiles/house/rug_8.png";
import Rug9 from "@/assets/tiles/house/rug_9.png";
import IndoorRoof1 from "@/assets/tiles/house/indoor_roof_1.png";
import IndoorRoof2 from "@/assets/tiles/house/indoor_roof_2.png";
import IndoorRoof3 from "@/assets/tiles/house/indoor_roof_3.png";
import IndoorWall1 from "@/assets/tiles/house/indoor_wall_1.png";
import Chimney1 from "@/assets/tiles/house/chimney_1.png";
import Chimney2 from "@/assets/tiles/house/chimney_2.png";
import IndoorWindow1 from "@/assets/tiles/house/indoor_window_1.png";
import IndoorWindow2 from "@/assets/tiles/house/indoor_window_2.png";
import Bed1 from "@/assets/tiles/house/bed_1.png";
import Bed2 from "@/assets/tiles/house/bed_2.png";
import Shelf from "@/assets/tiles/house/shelf.png";

import { TILE_SIZE } from "@/constants";
import { TILES_TYPES } from "@/constants/tiles";

type TileProps = {
  type: string;
};

const Tile = ({ type }: TileProps) => {
  let bgImage;

  switch (type) {
    case TILES_TYPES.GRASS_1:
      bgImage = Grass1;
      break;
    case TILES_TYPES.GRASS_2:
      bgImage = Grass2;
      break;
    case TILES_TYPES.GRASS_3:
      bgImage = Grass3;
      break;
    case TILES_TYPES.GRASS_4:
      bgImage = Grass4;
      break;
    case TILES_TYPES.GRASS_5:
      bgImage = Grass5;
      break;
    case TILES_TYPES.FLOWERS_1:
      bgImage = Flowers1;
      break;
    case TILES_TYPES.FLOWERS_2:
      bgImage = Flowers2;
      break;
    case TILES_TYPES.CRATE_1_OPENED:
      bgImage = Crate1Opened;
      break;
    case TILES_TYPES.CRATE_1_CLOSED:
      bgImage = Crate1Closed;
      break;
    case TILES_TYPES.TENT_1:
      bgImage = Tent1;
      break;
    case TILES_TYPES.TENT_2:
      bgImage = Tent2;
      break;
    case TILES_TYPES.TENT_3:
      bgImage = Tent3;
      break;
    case TILES_TYPES.TENT_4:
      bgImage = Tent4;
      break;
    case TILES_TYPES.TENT_5:
      bgImage = Tent5;
      break;
    case TILES_TYPES.TENT_6:
      bgImage = Tent6;
      break;
    case TILES_TYPES.TENT_7:
      bgImage = Tent7;
      break;
    case TILES_TYPES.TENT_8:
      bgImage = Tent8;
      break;
    case TILES_TYPES.TENT_9:
      bgImage = Tent9;
      break;
    case TILES_TYPES.GROUND_BOTTOM:
      bgImage = GroundBottom;
      break;
    case TILES_TYPES.GROUND_BOTTOM_LEFT:
      bgImage = GroundBottomLeft;
      break;
    case TILES_TYPES.GROUND_BOTTOM_RIGHT:
      bgImage = GroundBottomRight;
      break;
    case TILES_TYPES.GROUND_TOP:
      bgImage = GroundTop;
      break;
    case TILES_TYPES.GROUND_TOP_LEFT:
      bgImage = GroundTopLeft;
      break;
    case TILES_TYPES.GROUND_TOP_RIGHT:
      bgImage = GroundTopRight;
      break;
    case TILES_TYPES.GROUND_MIDDLE:
      bgImage = GroundMiddle;
      break;
    case TILES_TYPES.GROUND_MIDDLE_LEFT:
      bgImage = GroundMiddleLeft;
      break;
    case TILES_TYPES.GROUND_MIDDLE_RIGHT:
      bgImage = GroundMiddleRight;
      break;
    case TILES_TYPES.GROUND_CROSS:
      bgImage = GroundCross;
      break;
    case TILES_TYPES.GROUND_CORNER_BOTTOM_LEFT:
      bgImage = GroundCornerBottomLeft;
      break;
    case TILES_TYPES.GROUND_CORNER_BOTTOM_RIGHT:
      bgImage = GroundCornerBottomRight;
      break;
    case TILES_TYPES.GROUND_CORNER_TOP_LEFT:
      bgImage = GroundCornerTopLeft;
      break;
    case TILES_TYPES.GROUND_CORNER_TOP_RIGHT:
      bgImage = GroundCornerTopRight;
      break;
    case TILES_TYPES.GROUND_CORNERS_LEFT:
      bgImage = GroundCornersLeft;
      break;
    case TILES_TYPES.GROUND_CORNERS_RIGHT:
      bgImage = GroundCornersRight;
      break;
    case TILES_TYPES.GROUND_CORNERS_TOP:
      bgImage = GroundCornersTop;
      break;
    case TILES_TYPES.GROUND_CORNERS_BOTTOM:
      bgImage = GroundCornersBottom;
      break;
    case TILES_TYPES.SIGN_1:
      bgImage = Sign1;
      break;
    case TILES_TYPES.WATER_TANK:
      bgImage = WaterTank;
      break;
    case TILES_TYPES.TREE_1:
      bgImage = Tree1;
      break;
    case TILES_TYPES.TREE_2:
      bgImage = Tree2;
      break;
    case TILES_TYPES.TREE_3:
      bgImage = Tree3;
      break;
    case TILES_TYPES.TREE_4:
      bgImage = Tree4;
      break;
    case TILES_TYPES.TRUNK_1:
      bgImage = Trunk1;
      break;
    case TILES_TYPES.TRUNK_2:
      bgImage = Trunk2;
      break;
    case TILES_TYPES.ROOF_1:
      bgImage = Roof1;
      break;
    case TILES_TYPES.ROOF_2:
      bgImage = Roof2;
      break;
    case TILES_TYPES.WALL_1:
      bgImage = Wall1;
      break;
    case TILES_TYPES.WALL_2:
      bgImage = Wall2;
      break;
    case TILES_TYPES.WALL_3:
      bgImage = Wall3;
      break;
    case TILES_TYPES.WINDOW_1:
      bgImage = Window1;
      break;
    case TILES_TYPES.FLOOR_1:
      bgImage = Floor1;
      break;
    case TILES_TYPES.FLOOR_1_EXIT:
      bgImage = Floor1Exit;
      break;
    case TILES_TYPES.FLOOR_2:
      bgImage = Floor2;
      break;
    case TILES_TYPES.FLOOR_2_EXIT:
      bgImage = Floor2Exit;
      break;
    case TILES_TYPES.RUG_1:
      bgImage = Rug1;
      break;
    case TILES_TYPES.RUG_2:
      bgImage = Rug2;
      break;
    case TILES_TYPES.RUG_3:
      bgImage = Rug3;
      break;
    case TILES_TYPES.RUG_4:
      bgImage = Rug4;
      break;
    case TILES_TYPES.RUG_5:
      bgImage = Rug5;
      break;
    case TILES_TYPES.RUG_6:
      bgImage = Rug6;
      break;
    case TILES_TYPES.RUG_7:
      bgImage = Rug7;
      break;
    case TILES_TYPES.RUG_8:
      bgImage = Rug8;
      break;
    case TILES_TYPES.RUG_9:
      bgImage = Rug9;
      break;
    case TILES_TYPES.INDOOR_ROOF_1:
      bgImage = IndoorRoof1;
      break;
    case TILES_TYPES.INDOOR_ROOF_2:
      bgImage = IndoorRoof2;
      break;
    case TILES_TYPES.INDOOR_ROOF_3:
      bgImage = IndoorRoof3;
      break;
    case TILES_TYPES.INDOOR_WALL_1:
      bgImage = IndoorWall1;
      break;
    case TILES_TYPES.CHIMNEY_1:
      bgImage = Chimney1;
      break;
    case TILES_TYPES.CHIMNEY_2:
      bgImage = Chimney2;
      break;
    case TILES_TYPES.INDOOR_WINDOW_1:
      bgImage = IndoorWindow1;
      break;
    case TILES_TYPES.INDOOR_WINDOW_2:
      bgImage = IndoorWindow2;
      break;
    case TILES_TYPES.BED_1:
      bgImage = Bed1;
      break;
    case TILES_TYPES.BED_2:
      bgImage = Bed2;
      break;
    case TILES_TYPES.SHELF:
      bgImage = Shelf;

    case TILES_TYPES.DOOR_1:
      bgImage = Door1;
      break;
    case TILES_TYPES.LOGS_1:
      bgImage = Logs1;
      break;
    case TILES_TYPES.PATH_1:
      bgImage = Path1;
      break;
    case TILES_TYPES.WELL:
      bgImage = Well;
      break;

    default:
      bgImage = Grass1;
  }

  if (type === TILES_TYPES.VOID) {
    return (
      <div
        className="bg-transparent"
        style={{ height: TILE_SIZE, width: TILE_SIZE }}
      ></div>
    );
  }

  return (
    <Image
      style={{
        height: TILE_SIZE,
        width: TILE_SIZE,
      }}
      src={bgImage}
      alt={type}
      className="pointer-events-none select-none"
    />
  );
};

export default Tile;
