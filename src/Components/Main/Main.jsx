import { Catagory } from "../Catagory/Catagory";
import { Menu } from "../Menu/Menu";
import SliderHeading from "../Slider/Slider";
import Testimoni from "../Testimoni/Testimoni";

import "./Main.css";

export const Main = () => {
  return (
    <div className="main">
      <SliderHeading />
      <Menu />
      <Catagory />
      <Testimoni />
    </div>
  );
};
