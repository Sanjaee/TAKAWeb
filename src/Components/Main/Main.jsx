import { Catagory } from "../Catagory/Catagory";
import { Menu } from "../Menu/Menu";
import MySlider from "../Slider/Slider";

import "./Main.css";

export const Main = () => {
  return (
    <div className="main">
      <MySlider />
      <Menu />
      <Catagory />
    </div>
  );
};
