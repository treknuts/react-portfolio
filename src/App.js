import "./App.scss";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <BrowserRouter>
      <main className="app">
        <Navbar />
        <section className="content">
          <AnimatePresence>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Projects} />
            </Switch>
          </AnimatePresence>
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;
