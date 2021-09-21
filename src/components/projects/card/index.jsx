import gsap from "gsap/all";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react/cjs/react.development";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./index.scss";

const Card = () => {
  const imageUrl =
    "https://treknuts-image-bucket.s3.us-east-2.amazonaws.com/projects-images/chet-mockup.jpg";

  gsap.registerPlugin(ScrollTrigger);

  const card = useRef();
  const q = gsap.utils.selector(card);

  useEffect(() => {
    gsap.from(card.current, {
      y: 200,
      opacity: 0.25,
      stagger: 0.33,
      ease: "ease-in-out",
      scrollTrigger: {
        trigger: card.current,
        toggleActions: "restart none restart pause",
        start: "top bottom",
        end: "top 60%",
        scrub: true,
      },
    });
    gsap.from(q(".badge"), {
      x: 50,
      duration: 0.2,
      opacity: 0,
      stagger: 0.25,
      scrollTrigger: {
        trigger: q(".badge"),
        toggleActions: "restart none restart pause",
        start: "-200px 95%",
        end: "-240px top",
      },
    });
  }, []);

  return (
    <div className="card" ref={card}>
      <div class="header">
        <h1>ChetBot</h1>
        <a href="https://github.com/treknuts" className="github">
          Code <FontAwesomeIcon className="icon" icon={faGithub} size="lg" />
        </a>
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
    </div>
  );
};

export default Card;
