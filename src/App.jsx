import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import FloatingHearts from "./components/FloatingHearts";
import PageTransition from "./components/PageTransition";

import Home from "./pages/Home";
import Story from "./pages/Story";
import Gallery from "./pages/Gallery";
import Gallery2 from "./pages/Gallery2";
import Quiz from "./pages/Quiz";
import Letter from "./pages/Letter";

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <FloatingHearts />
      <Navbar />

      <PageTransition key={location.pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery-2" element={<Gallery2 />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/letter" element={<Letter />} />
        </Routes>
      </PageTransition>
    </div>
  );
}

export default App;
