import { useEffect, useRef } from "react";
import "./index.scss";
import { gsap } from "gsap";

const Home = () => {
  const resumeUrl =
    "https://treknuts-image-bucket.s3.us-east-2.amazonaws.com/Resume.pdf";
  const profileUrl =
    "https://treknuts-image-bucket.s3.us-east-2.amazonaws.com/trevor.jpg";
  const nameRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    gsap.from(nameRef.current, { duration: 1, x: -500, opacity: 0 });
    gsap.from(titleRef.current, { duration: 1, x: 500, opacity: 0 });
  }, []);

  return (
    <div className="landing-info">
      <img
        src={profileUrl}
        loading="lazy"
        alt="The site creator intensily looking at the camera"
      />
      <h1 className="name" ref={nameRef}>
        Trevor Knutson
      </h1>
      <p className="title" ref={titleRef}>
        Software Engineer
      </p>
      <a href={resumeUrl} rel="noreferrer" target="_blank" className="btn">
        resume
      </a>
    </div>
  );
};

export default Home;
