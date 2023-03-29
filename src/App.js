import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Listings from "./pages/Listings/Listings";
import Fraction from "./pages/Fraction/Fractional";
import Why from "./pages/Why-Frac/Why-us";
import MyNavbar from "./Components/Navbar/Navbar";
import EnquireNow from './Components/enquireNow/enquireNow'
import Footer from "./Components/footer/Footer"
import AboutUs from "./Components/aboutus/AboutUs";
import HowItWorks from "./Components/howItWorks/HowItWorks";
import FAQs from "./pages/faqs/FAQs";


function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<Listings />} />
        <Route path="/fraction" element={<Fraction />} />
        <Route path="/why" element={<Why />} />
        <Route path="/enquiry" element={<EnquireNow />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/howitworks' element={<HowItWorks />} />
        <Route path='/faqs' element={<FAQs />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
