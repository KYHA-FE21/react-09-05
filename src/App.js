import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import AboutPage from "./components/AboutPage";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/:pageId" element={<AboutPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

// top level ska alltid vara browserrouter
// path=/ är alltid default alltså http://localhost:3000 egen domän va =
// http://klarr.se
