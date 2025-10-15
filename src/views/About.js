import { CgClose } from "react-icons/cg";
import { AiOutlineUp } from "react-icons/ai";
import { motion } from "framer-motion";
import { Link, Element, animateScroll, scroller } from "react-scroll";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MasterItem from "../components/MasterItem";
import photo1 from "../assets/masters/photo_1.png";
import photo2 from "../assets/masters/photo_2.png";
import Decor from "../components/Decor";

export default function About() {
  const text = `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
            hendrerit semper vel class aptent taciti sociosqu. Ad litora
            torquent per conubia nostra inceptos himenaeos.`;
  const content = [
    { text: text, src: photo1 },
    { text: text, src: photo2 },
  ];
  const redirect = useNavigate();

  const variants = {
    initial: {
      y: "-100vh"
    },
    animate: {
      y: 0,
      transition: {
        type: "spring", 
        stiffness: 200,
        damping: 15,
      }
    },
    exit: {
      y: "-100vh",
      transition: { duration: 0.2 }
    },
  };

  const returnToTop = (e) => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: true,
      containerId: "about",
    });
  };

  return (
    <motion.div
      className="content"
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      variants={variants}
      id="about"
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
        <h1 className="headline">Здесь размещается заголовок блока в категории "О нас"</h1>
      </div>
      {/* <div className="separator"></div> */}
      <div className="column">
        {content.map((item, index) => (
          <MasterItem
            key={index}
            text={item.text}
            src={item.src}
          />
        ))}
      </div>
    </motion.div>
  );
}
