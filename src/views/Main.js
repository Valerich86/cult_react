import { delay, motion } from "framer-motion";
import { useEffect, useState } from "react";
import tile1 from "../assets/technical/tile1.png";
import tile2 from "../assets/technical/tile2.png";
import tile3 from "../assets/technical/tile3.png";
import tile4 from "../assets/technical/tile4.png";
import tile5 from "../assets/technical/tile5.png";
import tile6 from "../assets/technical/tile6.png";
import NavigationBar from "../components/NavigationBar";

export default function Main() {
  const [blurType, setBlurType] = useState("default");
  const [shadingPhase, setShadingPhase] = useState("phase1");
  const [imgTransition, setImgTransition] = useState("phase1");
  const [navIsVisible, setNavIsVisible] = useState(false);
  const [tileHeight, setTileHeight] = useState(0);
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const [currentHeight, setCurrentHeight] = useState(window.innerHeight);
  const initionalWidth = 390;
  const initionalScale = 120;

  useEffect(() => {
    const timer = setInterval(() => {
      if (imgTransition === "phase2") {
        setImgTransition("phase1");
      } else {
        setImgTransition("phase2");
      }
    }, 60000);
    setImgTransition("phase2");
    setNavIsVisible(true);
    setTimeout(() => setBlurType("flaming"), 3000);
    setTimeout(() => setBlurType("burned"), 9000);
    setTimeout(() => setImgTransition("phase1"), 60000);
    const handleResize = () => {
      setTileHeight((window.innerWidth * initionalScale) / initionalWidth);
      setCurrentWidth(window.innerWidth);
      setCurrentHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      {navIsVisible && <NavigationBar currentHeight={currentHeight}/>}
      <motion.div
        className={`bg-image bg-image_${imgTransition}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          opacity: { duration: 10, delay: 0, ease: "easeIn" },
        }}
      ></motion.div>
      <div className="main-info row row_around">
        <motion.div
          className="body"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 2, delay: 9 },
          }}
        >
          Пермь.
        </motion.div>
        <motion.div
          className="body"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 2, delay: 11 },
          }}
        >
          Студия.
        </motion.div>
        <motion.div
          className="body"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 2, delay: 13 },
          }}
        >
          Тату.
        </motion.div>
      </div>
      <div className={`shading`}></div>
      <div className={`tiles-container tiles-container_${blurType}`}>
        {currentHeight < 700 && (
          <div className="extra-tile"></div>
        )}
        <motion.div
          style={{ height: `${tileHeight}%` }}
          initial={{ scaleY: 2 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{
            scaleY: { duration: 8, delay: 0 },
          }}
        >
          <img src={tile1} alt="Something wrong" />
        </motion.div>
        <motion.div
          style={{ height: `${tileHeight}%` }}
          initial={{ scale: 3 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            scale: { duration: 8, delay: 2 },
          }}
        >
          <img src={tile2} alt="Something wrong" />
        </motion.div>
        <motion.div
          style={{ height: `${tileHeight}%` }}
          initial={{ scaleY: 3 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{
            scaleY: { duration: 8, delay: 4 },
          }}
        >
          <img src={tile3} alt="Something wrong" />
        </motion.div>
        <motion.div
          style={{ height: `${tileHeight}%` }}
          initial={{ scale: 2, y: "17vh" }}
          whileInView={{ scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            scale: { duration: 10, delay: 0 },
            y: { duration: 10, delay: 0 },
          }}
        >
          <img src={tile4} alt="Something wrong" />
        </motion.div>
        <motion.div
          style={{ height: `${tileHeight}%` }}
          initial={{ scaleY: 2, y: "17vh" }}
          whileInView={{ scaleY: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            scaleY: { duration: 10, delay: 5 },
            y: { duration: 10, delay: 5 },
          }}
        >
          <img src={tile5} alt="Something wrong" />
        </motion.div>
        <motion.div
          style={{ height: `${tileHeight}%` }}
          initial={{ scale: 2, y: "17vh" }}
          whileInView={{ scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            scale: { duration: 10, delay: 0 },
            y: { duration: 10, delay: 0 },
          }}
        >
          <img src={tile6} alt="Something wrong" />
        </motion.div>
        {currentHeight < 700 && (
          <div className="extra-tile"></div>
        )}
      </div>
      <div className="footer">
        <p >ⓒ Cult 2025 . Права защищены</p>
      </div>
    </>
  );
}
