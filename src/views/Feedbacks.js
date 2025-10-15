import { CgClose } from "react-icons/cg";
import { AiOutlineUp } from "react-icons/ai";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Link, Element, animateScroll, scroller } from "react-scroll";
import { useNavigate } from "react-router-dom";

export default function Feedbacks() {
  const redirect = useNavigate();

  const variants = {
    initial: {
      y: "100vh"
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
      y: "100vh",
      transition: { duration: 0.2 }
    },
  };

  useEffect(() => {
    animateScroll.scrollToTop({ containerId: "feedbacks" });
  }, []);

  const returnToTop = (e) => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: true,
      containerId: "feddbacks",
    });
  };

  return (
    <motion.div
      className="content"
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      variants={variants}
      id="feedbacks"
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
        <h1 className="headline">Здесь размещается заголовок блока "Отзывы"</h1>
      </div>
      <div className="separator"></div>
      <div className="services row"></div>
    </motion.div>
  );
}
