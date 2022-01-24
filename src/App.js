import React, { useEffect } from "react";
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import AnimatedCursor from "react-animated-cursor";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <div className="julien_all_wrap">
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="165, 42, 42"
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={1.2}
      />
      <ScrollToTop />
      <Routes />
    </div>
  );
};

export default App;
