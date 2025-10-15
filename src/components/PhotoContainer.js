import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import { swing } from "react-animations";
import { Element } from "react-scroll";
import styled, { keyframes } from "styled-components";
import Decor from "./Decor";

export default function PhotoContainer({ item, index, currentWidth }) {
  const redirect = useNavigate();
  const delay = Math.random();
  const contentType = "gallery";

  return (
    <motion.div
      className="photo-tatoo"
      initial={{ scale: 0.95 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: false }}
      transition={{
        scale: { duration: 1, delay: delay },
      }}
    >
      <div
        className="photo-tatoo__photo"
        style={{
          backgroundImage: `url(${item.src})`, height: item.text ? "50%" : "100%"
        }}
        onClick={() => redirect(`/conveyer/${contentType}/${index}`)}
      ></div>
      {item.text && (
        <div className="photo-tatoo__text">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              opacity: { duration: 2 },
            }}
          >
            <p className="body">{item.text}</p>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
