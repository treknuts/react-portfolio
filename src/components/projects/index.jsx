import { useEffect } from "react";
import Card from "./card";
import "./index.scss";
import gsap, { ScrollTrigger } from "gsap/all";

const Projects = () => {
  useEffect(() => {
    const cards = gsap.utils.toArray(".card");
    cards.forEach((card) => {
      gsap.from(card, {
        y: 100,
        z: 20,
        opacity: 0.25,
        scrollTrigger: {
          trigger: card,
          toggleActions: "restart none restart pause",
          start: () => "top bottom",
          end: () => "bottom 90%",
          scrub: true,
        },
      });
    });
  }, []);
  return (
    <div>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Projects;
