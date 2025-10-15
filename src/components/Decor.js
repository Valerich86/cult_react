import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { swing } from "react-animations";
import styled, { keyframes } from "styled-components";

const Anim = styled.div`
  animation: 10s ${keyframes`${swing}`} infinite;
`;

export default function Decor() {
  const [decor, setDecor] = useState({
    side: getRandomSide(),
    size: getRandomSize(),
  });

  function getRandomSide() {
    return Math.round(Math.random()) === 0 ? "left" : "right";
  }

  function getRandomSize() {
    return Math.round(Math.random()) === 0 ? "min" : "max";
  }

  return (
    <>
      <div
        className={`decor decor_${decor.side} decor_${decor.size}`}
      ></div>
    </>
  );
}
