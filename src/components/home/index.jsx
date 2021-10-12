import "./index.scss";
import { motion } from "framer-motion";

const Home = () => {
  const resumeUrl =
    "https://treknuts-image-bucket.s3.us-east-2.amazonaws.com/Resume.pdf";
  const profileUrl =
    "https://treknuts-image-bucket.s3.us-east-2.amazonaws.com/trevor.jpg";

  const nameVariants = {
    small: { x: 450 },
    full: { x: 0 },
  };

  const titleVariants = {
    left: { x: -400 },
    center: { x: 0 },
  };

  return (
    <div className="landing-info">
      <motion.h1
        initial="small"
        animate="full"
        variants={nameVariants}
        transition={{ duration: 1 }}
        className="name"
      >
        Trevor Knutson
      </motion.h1>
      <motion.p
        initial="left"
        animate="center"
        variants={titleVariants}
        transition={{ duration: 1 }}
        className="title"
      >
        Software Engineer
      </motion.p>
      <a href={resumeUrl} rel="noreferrer" target="_blank" className="btn">
        resume
      </a>
    </div>
  );
};

export default Home;
