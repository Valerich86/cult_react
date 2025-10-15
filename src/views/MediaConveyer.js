import { MdNavigateBefore } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import { useEffect, useState, useRef } from "react";
import { MdNavigateNext } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import photo1 from "../assets/tatoo/photo_1.jpg";
import photo2 from "../assets/tatoo/photo_2.jpg";
import photo3 from "../assets/tatoo/photo_3.jpg";
import photo4 from "../assets/tatoo/photo_4.jpg";
import photo5 from "../assets/tatoo/photo_5.jpg";
import photo6 from "../assets/tatoo/photo_6.jpg";
import photo7 from "../assets/tatoo/photo_7.jpg";
import photo8 from "../assets/tatoo/photo_8.jpg";

export default function MediaConveyer() {
  const {startIndex, contentType} = useParams();
  const redirect = useNavigate();
  const line = useRef(null);
  const [currentPosition, setCurrentPosition] = useState(Number(startIndex));
  const [isBegin, setIsBegin] = useState(true);

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

  const content = [
    { src: photo1 },
    { src: photo2 },
    { src: photo3 },
    { src: photo5 },
    { src: photo4 },
    { src: photo6 },
    { src: photo7 },
    { src: photo3 },
    { src: photo4 },
    { src: photo5 },
    { src: photo6},
    { src: photo7 },
    { src: photo8 },
    { src: photo1 },
    { src: photo8},
    { src: photo1  },
    { src: photo2},
  ];

  useEffect(() => {
    line.current.style.transform = `translateX(${currentPosition * -100}vw)`;
    if (!isBegin) {
      line.current.style.transition = "all 0.3s ease-in-out";
    } else {
      setIsBegin(false);
    }
  }, [currentPosition]);

  return (
    <motion.div
      className={`conveyer`}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      variants={variants}
    >
      <span onClick={() => redirect(-1)} className="back">
        <CgClose className="link close" size={30} />
      </span>
      <div
        ref={line}
        className={"container row"}
        style={{ width: `${content.length * 100}%` }}
      >
        {content.map((item, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${item.src})` }}
          ></div>
        ))}
      </div>
      <div className="skipIcons row row_between">
        <span
          onClick={() => {
            if (currentPosition > 0) {
              setCurrentPosition(currentPosition - 1);
            }
          }}
        >
          <MdNavigateBefore className="link" size={50} />
        </span>
        <span
          onClick={() => {
            if (currentPosition < content.length - 1) {
              setCurrentPosition(currentPosition + 1);
            }
          }}
        >
          <MdNavigateNext className="link" size={50} />
        </span>
      </div>
    </motion.div>
  );
}
