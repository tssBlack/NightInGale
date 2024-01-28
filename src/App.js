import { useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { BackgroundStars } from "./js/animated-background";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Project } from "./components/Project";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Wrong } from "./components/Wrong";

function App() {
  useEffect(() => {
    BackgroundStars();
  }, []);

  return (
    <BrowserRouter>
      <canvas className="fixed"></canvas>
      <div className="container mx-auto relative ">
        <header className="flex relative">
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/projects/:projects" element={<Project/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="*" element={<Wrong />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
