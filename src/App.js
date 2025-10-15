import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Main from "./views/Main";
import Admin from "./views/Admin";
import Services from "./views/Services";
import News from "./views/News";
import Feedbacks from "./views/Feedbacks";
import About from "./views/About";
import Gallery from "./views/Gallery";
import MediaConveyer from "./views/MediaConveyer";

function App() {
  const location = useLocation();
  return (
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route key={"main"} path="/" element={<Main />} />
          <Route key={"admin"} path="/admin" element={<Admin />} />
          <Route key={"services"} path="/services" element={<Services />} />
          <Route key={"news"} path="/news" element={<News />} />
          <Route key={"feedbacks"} path="/feedbacks" element={<Feedbacks />} />
          <Route key={"about"} path="/about" element={<About />} />
          <Route key={"gallery"} path="/gallery" element={<Gallery />} />
          <Route key={"conveyer"} path="/conveyer/:contentType/:startIndex" element={<MediaConveyer />} />
        </Routes>
      </AnimatePresence>
  );
}

export default App;
