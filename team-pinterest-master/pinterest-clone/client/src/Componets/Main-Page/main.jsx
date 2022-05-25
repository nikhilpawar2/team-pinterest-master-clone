import { About } from "./About";
import { Routes, Route } from "react-router-dom";

import React from "react";
import { Landing } from "./landing";
import { Business } from "./Business";
import { Blog } from "./Blog";


export const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/bus" element={<Business />}></Route>
        <Route path="/blo" element={<Blog />}></Route>
   
      </Routes>
    </div>
  );
};
