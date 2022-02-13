import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import About from "./About";
import Resume from "./Resume";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <Router>
      <div desc="grid-side-columns" id="left__wavecontainer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
          id="home__bgwave"
        >
          <path
            fill="lightcoral"
            fillOpacity="1"
            d="M0,0L288,160L576,64L864,224L1152,128L1440,224L1440,0L1152,0L864,0L576,0L288,0L0,0Z"
          ></path>
        </svg>
      </div>
      <Header />
      <Switch>
        <Route exact path="/about">
          <main>
            <About />
          </main>
        </Route>
        <Route exact path="/resume">
          <main>
            <Resume />
          </main>
        </Route>
        <Route exact path="/">
          <main>
            <Home />
          </main>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
