import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import About_page from "./pages/About_page";
import Coffee_page from "./pages/Coffee_page";
import Contact_page from "./pages/Contact_page";
import Home_page from "./pages/Home_page";
import Tea_page from "./pages/Tea_page";


import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const PageFade = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.9, ease: "easeInOut" }} >
    {children}
  </motion.div>
);

function App() {
  const location = useLocation();
  const shouldAnimate = location.state?.animate === true;

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={shouldAnimate ? <PageFade><Home_page /></PageFade> : <Home_page />}/>
          <Route path="/About_page" element={shouldAnimate ? <PageFade><About_page /></PageFade> : <About_page />}/>
          <Route path="/Contact_page" element={shouldAnimate ? <PageFade><Contact_page /></PageFade> : <Contact_page />}/>
          <Route path="/Tea_page" element={<Tea_page />} />
          <Route path="/Coffee_page" element={<Coffee_page />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
