import React from "react";
import MyNavbar from "../../Components/Navbar/Navbar";
import img from "../../assets/images/imag2.jpg"

import "./Why.css"

export default function Whyus(){
     return (
       <>
         <header>
           <MyNavbar />
         </header>
         <main>
           <section className="sec-why">
             <div className="head-sec">
               <h1>Experience the ultimate in comfort</h1>
             </div>
             <div className="why-img">
               <img src={img} />
             </div>
           </section>
           <section>
             
           </section>
         </main>
       </>
     );
}