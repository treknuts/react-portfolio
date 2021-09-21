import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClipboardList,
  faHome,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const homeIcon = useRef();
  const aboutIcon = useRef();
  const projectsIcon = useRef();
  var tl = useRef();

  const handleClick = () => {
    // Small screens only
    // console.log(isOpen);
    // setIsOpen(!isOpen);
    // isOpen ? tl.current.reverse() : tl.current.play();
  };

  useEffect(() => {
    // Only use this on small screens
    // tl.current = gsap
    //   .timeline({ paused: true })
    //   .to(homeIcon.current, {
    //     x: 125,
    //     y: 0,
    //     ease: "back",
    //     opacity: 1,
    //     duration: 0.25,
    //   })
    //   .to(aboutIcon.current, {
    //     x: 100,
    //     y: 100,
    //     ease: "back",
    //     opacity: 1,
    //     duration: 0.25,
    //   })
    //   .to(projectsIcon.current, {
    //     x: 0,
    //     y: 125,
    //     ease: "back",
    //     opacity: 1,
    //     duration: 0.25,
    //   });
  }, []);

  return (
    <nav className="nav">
      <Link to="/" className="nav-item" ref={homeIcon} onClick={handleClick}>
        <FontAwesomeIcon icon={faHome} size="lg" />
        <p>home</p>
      </Link>
      <Link
        to="/about"
        ref={aboutIcon}
        className="nav-item"
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faInfoCircle} size="lg" />
        <p>about</p>
      </Link>
      <Link
        to="/projects"
        ref={projectsIcon}
        className="nav-item"
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faClipboardList} size="lg" />
        <p>projects</p>
      </Link>
      <div className="nav-btn" onClick={handleClick}>
        <FontAwesomeIcon icon={faBars} size="lg" />
      </div>
    </nav>
  );
};

export default Navbar;
