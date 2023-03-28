import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Listings from "./Components/page1/List/Listings";
import Fraction from "./Components/page1/Fraction/Fractional";
import Why from "./Components/page1/Why-Frac/Why-us";
import Footer from './Components/footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<Listings />} />
        <Route path="/fraction" element={<Fraction />} />
        <Route path="/why" element={<Why />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
