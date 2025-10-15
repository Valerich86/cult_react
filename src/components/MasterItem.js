import { CgClose } from "react-icons/cg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { swing } from "react-animations";
import styled, { keyframes } from "styled-components";
import Decor from "./Decor";

const Anim = styled.div`
  animation: 10s ${keyframes`${swing}`} infinite;
`;

export default function MasterItem({ text, src }) {
  return (
    <>
      {/* <Decor /> */}
      <motion.div
        className="photo-master row"
        initial={{ scale: 0.95 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: false }}
        transition={{
          scale: { duration: 0.7, delay: 0 },
        }}
        style={{ backgroundImage: `url(${src})` }}
      >
        <motion.div
          initial={{ x: "100%" }}
          whileInView={{ x: "75%" }}
          viewport={{ once: false }}
          transition={{
            x: { duration: 1, delay: 0 },
          }}
        >
          <p className="body">{text}</p>
        </motion.div>
      </motion.div>
    </>
  );
}
