import Card from "./card";
import { motion } from "framer-motion";
import "./index.scss";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Projects = () => {
  const cards = [0, 1, 2, 3, 4, 5];

  return (
    <motion.div
      variants={variants}
      initial="closed"
      animate="open"
      className="card-container"
    >
      {cards.map((i) => (
        <Card key={i} />
      ))}
    </motion.div>
  );
};

export default Projects;
