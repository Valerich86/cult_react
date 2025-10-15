import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { pulse } from "react-animations";
import styled, { keyframes } from "styled-components";

const Anim1 = styled.div`
  animation: 5s ${keyframes`${pulse}`} infinite;
`;

const Anim2 = styled.div`
  animation: 3s ${keyframes`${pulse}`} infinite;
`;

const Link1 = ({redirect, currentHeight}) => {
  const [bluring, setBluring] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setBluring(!bluring), 2000);
    return () => clearInterval(interval);
  });

  return (
    <motion.div
      style={{ position: "absolute", left: "10vw", top: "25vh" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{
        opacity: { duration: 2, delay: 0.3 },
      }}
    >
      <Anim1>
        <p
          className={bluring ? "link link_blur" : "link link_default"}
          onClick={() => redirect("/services")}
        >
          Услуги
        </p>
      </Anim1>
    </motion.div>
  );
};

const Link2 = ({redirect, currentHeight}) => {
  const [bluring, setBluring] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => setBluring(!bluring), 2300);
    return () => clearInterval(interval);
  });
  return (
    <motion.div
      style={{ position: "absolute", right: "47vw", top: "10vh" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{
        opacity: { duration: 2, delay: 0 },
      }}
    >
      <Anim2>
        <p
          className={bluring ? "link link_blur" : "link link_default"}
          onClick={() => redirect("/about")}
        >
          О нас
        </p>
      </Anim2>
    </motion.div>
  );
};

const Link5 = ({redirect, currentHeight}) => {
  const [bluring, setBluring] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => setBluring(!bluring), 2300);
    return () => clearInterval(interval);
  });
  return (
    <motion.div
      style={{ position: "absolute", right: "10vw", top: "30vh" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{
        opacity: { duration: 2, delay: 0.6 },
      }}
    >
      <Anim1>
        <p
          className={bluring ? "link link_blur" : "link link_default"}
          onClick={() => redirect("/news")}
        >
          Новости
        </p>
      </Anim1>
    </motion.div>
  );
};

const Link3 = ({redirect, currentHeight}) => {
  const [bluring, setBluring] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => setBluring(!bluring), 2200);
    return () => clearInterval(interval);
  });
  return (
    <motion.div
      style={{ position: "absolute", left: "25vw", bottom: "20vh" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{
        opacity: { duration: 2, delay: 0.9 },
      }}
    >
      <Anim1>
        <p
          className={bluring ? "link link_blur" : "link link_default"}
          onClick={() => redirect("/feedbacks")}
        >
          Отзывы
        </p>
      </Anim1>
    </motion.div>
  );
};

const Link4 = ({redirect, currentHeight}) => {
  const [bluring, setBluring] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => setBluring(!bluring), 2500);
    return () => clearInterval(interval);
  });
  return (
    <motion.div
      style={{ position: "absolute", right: currentHeight < 1000 ? "25vw" : "30vw", bottom: currentHeight < 1000 ? "15vh" : "10vh" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{
        opacity: { duration: 2, delay: 1.2 },
      }}
    >
      <Anim2>
        <p
          className={bluring ? "link link_blur" : "link link_default"}
          onClick={() => redirect("/gallery")}
        >
          Галерея
        </p>
      </Anim2>
    </motion.div>
  );
};

export default function NavigationBar({ currentHeight }) {
  const redirect = useNavigate();
  return (
    <div className="nav-bar">
      <Link1 redirect={redirect} currentHeight={currentHeight}/>
      <Link2 redirect={redirect} currentHeight={currentHeight}/>
      <Link3 redirect={redirect} currentHeight={currentHeight}/>
      <Link4 redirect={redirect} currentHeight={currentHeight}/>
      <Link5 redirect={redirect} currentHeight={currentHeight}/>
    </div>
  );
}
