import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Amenities from "./pages/Amenities";
import FloorPlans from "./pages/FloorPlans";
import Gallery from "./pages/Gallery";
import Location from "./pages/Location";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/amenities" element={<Amenities />} />
      <Route path="/floor-plans" element={<FloorPlans />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/location" element={<Location />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
