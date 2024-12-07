import Image from "next/image";

import Char1Down1 from "@/assets/characters/main_1/char_down_1.png";
import Char1Down2 from "@/assets/characters/main_1/char_down_2.png";
import Char1Down3 from "@/assets/characters/main_1/char_down_3.png";
import Char1Up1 from "@/assets/characters/main_1/char_up_1.png";
import Char1Up2 from "@/assets/characters/main_1/char_up_2.png";
import Char1Up3 from "@/assets/characters/main_1/char_up_3.png";
import Char1Left1 from "@/assets/characters/main_1/char_left_1.png";
import Char1Left2 from "@/assets/characters/main_1/char_left_2.png";
import Char1Left3 from "@/assets/characters/main_1/char_left_3.png";
import Char1Right1 from "@/assets/characters/main_1/char_right_1.png";
import Char1Right2 from "@/assets/characters/main_1/char_right_2.png";
import Char1Right3 from "@/assets/characters/main_1/char_right_3.png";

import Char2Down1 from "@/assets/characters/main_2/char_down_1.png";
import Char2Down2 from "@/assets/characters/main_2/char_down_2.png";
import Char2Down3 from "@/assets/characters/main_2/char_down_3.png";
import Char2Up1 from "@/assets/characters/main_2/char_up_1.png";
import Char2Up2 from "@/assets/characters/main_2/char_up_2.png";
import Char2Up3 from "@/assets/characters/main_2/char_up_3.png";
import Char2Left1 from "@/assets/characters/main_2/char_left_1.png";
import Char2Left2 from "@/assets/characters/main_2/char_left_2.png";
import Char2Left3 from "@/assets/characters/main_2/char_left_3.png";
import Char2Right1 from "@/assets/characters/main_2/char_right_1.png";
import Char2Right2 from "@/assets/characters/main_2/char_right_2.png";
import Char2Right3 from "@/assets/characters/main_2/char_right_3.png";

export default function RenderCharacter() {
  return (
    <div className="fixed opacity-0 pointer-events-none select-none flex flex-wrap w-96 ">
      <Image src={Char1Down1} alt="Char1Down1" height={64} width={64} />
      <Image src={Char1Down2} alt="Char1Down2" height={64} width={64} />
      <Image src={Char1Down3} alt="Char1Down3" height={64} width={64} />
      <Image src={Char1Up1} alt="Char1Up1" height={64} width={64} />
      <Image src={Char1Up2} alt="Char1Up2" height={64} width={64} />
      <Image src={Char1Up3} alt="Char1Up3" height={64} width={64} />
      <Image src={Char1Left1} alt="Char1Left1" height={64} width={64} />
      <Image src={Char1Left2} alt="Char1Left2" height={64} width={64} />
      <Image src={Char1Left3} alt="Char1Left3" height={64} width={64} />
      <Image src={Char1Right1} alt="Char1Right1" height={64} width={64} />
      <Image src={Char1Right2} alt="Char1Right2" height={64} width={64} />
      <Image src={Char1Right3} alt="Char1Right3" height={64} width={64} />
      <Image src={Char2Down1} alt="Char2Down1" height={64} width={64} />
      <Image src={Char2Down2} alt="Char2Down2" height={64} width={64} />
      <Image src={Char2Down3} alt="Char2Down3" height={64} width={64} />
      <Image src={Char2Up1} alt="Char2Up1" height={64} width={64} />
      <Image src={Char2Up2} alt="Char2Up2" height={64} width={64} />
      <Image src={Char2Up3} alt="Char2Up3" height={64} width={64} />
      <Image src={Char2Left1} alt="Char2Left1" height={64} width={64} />
      <Image src={Char2Left2} alt="Char2Left2" height={64} width={64} />
      <Image src={Char2Left3} alt="Char2Left3" height={64} width={64} />
      <Image src={Char2Right1} alt="Char2Right1" height={64} width={64} />
      <Image src={Char2Right2} alt="Char2Right2" height={64} width={64} />
      <Image src={Char2Right3} alt="Char2Right3" height={64} width={64} />
    </div>
  );
}
