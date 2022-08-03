import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./layouts/NavBar";
import Footer from "./layouts/Footer";
import NotFound from "./pages/NotFound";
import AboutMe from "./pages/AboutMe";
import Pokemon from "./pages/Pokemon";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/pokemon" element={<Pokemon />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
