import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import About_page from "./pages/About_page";
import Coffee_page from "./pages/Coffee_page";
import Contact_page from "./pages/Contact_page";
import Home_page from "./pages/Home_page";
import Tea_page from "./pages/Tea_page";
import Paragraph from "./components/Paragraph";
import coffee from "./assets/coffee/c5.png"
import line from "./assets/coffee/line.png"

export default function App() {

  return (
    <BrowserRouter>
    <About_page/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home_page />} />
        <Route path="/About_page" element={<About_page />} />
        <Route path="/Coffee_page" element={<Coffee_page />} />
        <Route path="/Tea_page" element={<Tea_page />} />
        <Route path="/Contact_page" element={<Contact_page />} />
      </Routes>
      <Footer/>

    </BrowserRouter>
  );
}

