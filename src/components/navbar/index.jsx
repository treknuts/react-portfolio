import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClipboardList,
  faHome,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link to="/" className="nav-item">
          <FontAwesomeIcon icon={faHome} size="lg" />
          <p>home</p>
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link to="/about" className="nav-item">
          <FontAwesomeIcon icon={faInfoCircle} size="lg" />
          <p>about</p>
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link to="/projects" className="nav-item">
          <FontAwesomeIcon icon={faClipboardList} size="lg" />
          <p>projects</p>
        </Link>
      </motion.div>
    </nav>
  );
};

export default Navbar;
