import Card from "./card";
import { motion } from "framer-motion";
import "./index.scss";

const variants = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.75,
      staggerDirection: -1,
    }
  }
};

const badge = {
  hidden: { y: -10, opacity: 0},
  show: { y: 0, opacity: 1},
  whileHover: {
    rotate: "-8deg",
    transformOrigin: "left bottom"
  }
};

const Projects = () => {
  const cards = [0, 1, 2, 3, 4, 5];

  // whileHover={{ rotate: "-8deg", transformOrigin: "left bottom"}}

  return (
    <div className="content">
      <h1>Technologies</h1>
      <motion.div variants={variants} className="badges">
        <motion.div initial={badge.hidden} animate={badge.show} whileHover={badge.whileHover} className="badge javascript">Javascript</motion.div>
        <motion.div initial={badge.hidden} animate={badge.show} whileHover={badge.whileHover} className="badge node">NodeJs</motion.div>
        <motion.div initial={badge.hidden} animate={badge.show} whileHover={badge.whileHover} className="badge react">React</motion.div>
        <motion.div initial={badge.hidden} animate={badge.show} whileHover={badge.whileHover} className="badge mongo">Mongo</motion.div>
      </motion.div>
<motion.div
      variants={variants}
      initial={variants.hidden}
      animate={variants.show}
      className="card-container"
    >
      {cards.map((i) => (
        <Card key={i} />
      ))}
    </motion.div>
    </div>
  );
};

export default Projects;
