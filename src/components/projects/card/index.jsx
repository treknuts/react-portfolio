import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import "./index.scss";

const variant = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      y: { stiffness: 500, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 3,
      y: { stiffness: 1000 },
    },
  }, whileHover: {
    y: -10
  }
};

const Card = () => {
  const imageUrl =
    "https://treknuts-image-bucket.s3.us-east-2.amazonaws.com/projects-images/chet-mockup.jpg";

  return (
    <motion.div initial={variant.closed} animate={variant.open} whileHover={variant.whileHover} className="card">
      <div className="header">
        <h1>ChetBot</h1>
        <motion.a href="https://github.com/treknuts" className="github" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: .95, y: 0 }}>
          Code <FontAwesomeIcon className="icon" icon={faGithub} size="lg" />
        </motion.a>
      </div>
      <div className="image-container">
        <img src={imageUrl} alt="Thumbnail of a project in action." />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iure
        neque, voluptatum corporis architecto officia dolore quis fugiat
        molestiae corrupti doloremque hic tempora odit. Eveniet sunt qui
        exercitationem dignissimos aperiam.
      </p>
    </motion.div>
  );
};

export default Card;
