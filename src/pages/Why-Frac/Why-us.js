import React from "react";
import img from "../../assets/images/imag2.jpg"

import "./Why.css"

export default function Whyus(){
     return (
       <>
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