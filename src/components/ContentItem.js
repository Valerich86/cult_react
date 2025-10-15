import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import { swing } from "react-animations";
import { Element } from "react-scroll";
import styled, { keyframes } from "styled-components";
import Decor from "./Decor";

const Anim = styled.div`
  animation: 10s ${keyframes`${swing}`} infinite;
`;

export default function ContentItem({ item, index, currentWidth }) {
  const redirect = useNavigate();
  const delay = Math.random();
  const contentType = "gallery";

  return (
    <Element
      className="screen-container row row_center"
      style={{
        width: item.text
          ? "100%"
          : !item.text && currentWidth < 550
          ? "100%"
          : "45%",
        height: !item.text && currentWidth < 550 
        ? "70vh" : "100vh"
      }}
    >
      <Decor />
      <div className="row row_between" style={{ width: "100%" }}>
        {item.text && (
          <motion.div
            className="text-container column"
            initial={{ x: "-20%" }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{
              x: { duration: 1 },
            }}
          >
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{
                x: { duration: 1 },
              }}
            >
              <p className="body">{item.text}</p>
            </motion.div>
          </motion.div>
        )}
        <motion.div
          className="photo-container photo-container_tatoo"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            scale: { duration: 1, delay: delay },
          }}
          style={{
            backgroundImage: `url(${item.src})`,
            width: item.text && currentWidth > 550 ? "45%" : "100%",
          }}
          onClick={() => redirect(`/conveyer/${contentType}/${index}`)}
        ></motion.div>
      </div>
    </Element>
  );
}
