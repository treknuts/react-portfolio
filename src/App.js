import "./App.scss";
import { useState, useEffect, useRef } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import { 
  motion, 
  useSpring, 
  useTransform, 
  useViewportScroll
} from "framer-motion";

function App() {
  const app = useRef(null);
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => {
    console.log(scrollYProgress.get());
    yRange.onChange(v => setIsComplete(v >= 1));
  }, [yRange, scrollYProgress]);

  const homeRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();

  return (
      <main className="app" ref={app}>
        <Navbar homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} />
        <section ref={homeRef} id="home" className="content">
          <Home/>
        </section>
        <section ref={aboutRef} id="about" className="content">
          <About />
        </section>
        <section ref={projectsRef} id="projects" className="content">
          <Projects />
        </section>
              <svg className="progress-icon" viewBox="0 0 60 60">
        <motion.path
          fill="none"
          strokeWidth="5"
          stroke="white"
          strokeDasharray="0 1"
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          style={{
            pathLength,
            rotate: 90,
            translateX: 5,
            translateY: 5,
            scaleX: -1 // Reverse direction of line animation
          }}
        />
        <motion.path
          fill="none"
          strokeWidth="5"
          stroke="white"
          d="M14,26 L 22,33 L 35,16"
          initial={false}
          strokeDasharray="0 1"
          animate={{ pathLength: isComplete ? 1 : 0 }}
        />
      </svg>
      </main>
  );
}

export default App;
