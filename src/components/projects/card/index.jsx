import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import "./index.scss";

const variant = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 500, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Card = () => {
  const imageUrl =
    "https://treknuts-image-bucket.s3.us-east-2.amazonaws.com/projects-images/chet-mockup.jpg";

  return (
    <motion.div variants={variant} className="card">
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
      <div className="badges">
        <div className="badge react">React</div>
        <div className="badge javascript">JavaScript</div>
        <div className="badge mongo">MongoDB</div>
        <div className="badge node">NodeJs</div>
      </div>
    </motion.div>
  );
};

export default Card;
