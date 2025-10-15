import { AiOutlineUp } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { delay, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { swing } from "react-animations";
import styled, { keyframes } from "styled-components";
import { Link, Element, animateScroll, scroller } from "react-scroll";
import ContentItem from "../components/ContentItem";
import PhotoContainer from "../components/PhotoContainer";
import photo1 from "../assets/tatoo/photo_1.jpg";
import photo2 from "../assets/tatoo/photo_2.jpg";
import photo3 from "../assets/tatoo/photo_3.jpg";
import photo4 from "../assets/tatoo/photo_4.jpg";
import photo5 from "../assets/tatoo/photo_5.jpg";
import photo6 from "../assets/tatoo/photo_6.jpg";
import photo7 from "../assets/tatoo/photo_7.jpg";
import photo8 from "../assets/tatoo/photo_8.jpg";

export default function Gallery() {
  const text = `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. `;
  const text2 = `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis.`;
  const content = [
    { src: photo1, text: text },
    { src: photo2, text: text2 },
    { src: photo3 },
    { src: photo5 },
    { src: photo4, text: text },
    { src: photo6, text: text },
    { src: photo7 },
    { src: photo3 },
    { src: photo4, text: text2 },
    { src: photo5 },
    { src: photo6, text: text },
    { src: photo7 },
    { src: photo8, text: text },
    { src: photo1, text: text2 },
    { src: photo8, text: text },
    { src: photo1, text: text },
    { src: photo2, text: text },
  ];
  const redirect = useNavigate();
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const [currentHeight, setCurrentHeight] = useState(window.innerHeight);

  const variants = {
    initial: {
      rotateY: 90,
    },
    animate: {
      rotateY: 0,
      transition: { duration: 0.2, delay: 0.2 }
    },
    exit: {
      rotateY: 90,
      transition: { duration: 0.2 }
    },
  };

  useEffect(() => {
    const handleResize = () => {
      setCurrentWidth(window.innerWidth);
      setCurrentHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const returnToTop = (e) => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: true,
      containerId: "gallery",
    });
  };

  return (
    <motion.div
      className="content"
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      variants={variants}
      id="gallery"
    >
      <div className="panel column">
        <span onClick={() => redirect(-1)}>
          <CgClose size={30} />
        </span>
        <span onClick={returnToTop}>
          <AiOutlineUp size={30} />
        </span>
      </div>
      <div className="headline-container">
        <h1 className="headline">Здесь размещается заголовок блока в категории "Галерея"</h1>
      </div>
      {/* <div className="separator"></div> */}
      <div className="row row_between">
        {content.map((item, index) => (
          <PhotoContainer
            key={index}
            item={item}
            index={index}
            currentWidth={currentWidth}
          />
        ))}
      </div>
    </motion.div>
  );
}
