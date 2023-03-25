import React, { useState } from "react";
import "./Faq.css";

const Faq = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container">
      {data.map((item, index) => (
        <div key={index} className="faqItem">
          <button className="faqButton" onClick={() => handleClick(index)}>
            {item.question}
          </button>
          {activeIndex === index && (
            <div className="faqContent">
              <p className="faqAnswer">{item.answer}</p>
              <img className="faqImage" src={item.image} alt={item.alt} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
