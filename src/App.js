import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Listings from "./pages/Listings/Listings";
import Fraction from "./pages/Fraction/Fractional";
import Why from "./pages/Why-Frac/Why-us";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<Listings />} />
        <Route path="/fraction" element={<Fraction />} />
        <Route path="/why" element={<Why />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
