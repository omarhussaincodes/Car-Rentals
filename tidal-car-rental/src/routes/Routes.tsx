import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Booking } from "../pages/Booking";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact/" element={<Contact />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
  );
};
