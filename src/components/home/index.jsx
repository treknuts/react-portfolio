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
    gsap.from(nameRef.current, { duration: 1, x: -250 });
    gsap.from(titleRef.current, { duration: 1, y: -250 });
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
      <h4 className="title" ref={titleRef}>
        Software Engineer
      </h4>
      <a href={resumeUrl} rel="noreferrer" target="_blank" className="btn">
        resume
      </a>
    </div>
  );
};

export default Home;
