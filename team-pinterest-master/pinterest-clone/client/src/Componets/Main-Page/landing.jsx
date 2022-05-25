import React from "react";
// import { Link } from "react-router-dom";
// import { Navbarm } from "./Navbarm";
import SimpleSlider from "./carm";
import { Card } from "./cardm";
import { Navbarm } from "./Navbarm";

export const Landing = () => {
  return (
    <div>
      <Navbarm/>
      <SimpleSlider />
      <Card />
    </div>
  );
};
