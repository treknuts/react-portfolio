import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useViewportScroll, useTransform, useSpring } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClipboardList,
  faHome,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

const Navbar = ({ homeRef, aboutRef, projectsRef }) => {

  const executeScroll = (ref) => ref.current.scrollIntoView();

  return (
    <nav className="nav">
       <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <div onClick={() => executeScroll(homeRef)} className="nav-item">
          <FontAwesomeIcon icon={faHome} size="lg" />
          <p>home</p>
        </div>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <div onClick={() => executeScroll(aboutRef)} className="nav-item">
          <FontAwesomeIcon icon={faInfoCircle} size="lg" />
          <p>about</p>
        </div>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <div onClick={() => executeScroll(projectsRef)} className="nav-item">
          <FontAwesomeIcon icon={faClipboardList} size="lg" />
          <p>projects</p>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
