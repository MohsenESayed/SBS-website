import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Components/Home/Home.jsx";
import OurStory from "./Components/OurStory/OurStory.jsx";
// import Projects from "./Components/Projects/Projects.jsx";
import Team from "./Components/Team/Team.jsx";
// import Contact from "./Components/Contact/Contact.jsx";
import BlogPage from "./Components/Blog/BlogPage.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        {/* <Route path="/Projects" element={<Projects />} /> */}
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<BlogPage />} />
        {/* <Route path="/Contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
