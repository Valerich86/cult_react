import { CgClose } from "react-icons/cg";
import { AiOutlineUp } from "react-icons/ai";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Link, Element, animateScroll, scroller } from "react-scroll";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const redirect = useNavigate();

  const variants = {
    initial: {
      x: "-100vw"
    },
    animate: {
      x: 0,
      transition: {
        type: "spring", 
        stiffness: 200,
        damping: 15,
      }
    },
    exit: {
      x: "-100vw",
      transition: { duration: 0.2 }
    },
  };

  useEffect(() => {
    animateScroll.scrollToTop({ containerId: "services" });
  }, []);

  const returnToTop = (e) => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: true,
      containerId: "news",
    });
  };

  return (
    <motion.div
      className="content"
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      variants={variants}
      id="services"
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
        <h1 className="headline">Здесь размещается заголовок блока "Услуги"</h1>
      </div>
      <div className="separator"></div>
      <div className="services row"></div>
    </motion.div>
  );
}
