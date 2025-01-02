import React from "react";
import bactreria from "../img/bacteria.png";
import clock from "../img/clock.png";
import vector from "../img/Vector.png";


const OurBenefits = () => {
    const benefits = [
      {
        icon: bactreria, 
        title: "Enhanced Hygiene and Sanitization",
        description:
          "Professional cleaners use advanced techniques and products to disinfect toilets, reducing germs and promoting a healthier environment.",
      },
      {
        icon: clock, 
        title: "Time and Effort Savings",
        description:
          "By outsourcing toilet cleaning, you free up time and energy to focus on more critical tasks or personal priorities, while experts handle the cleaning efficiently.",
      },
      {
        icon: vector, 
        title: "Consistent and High-Quality Results",
        description:
          "Professional cleaners are trained to maintain high standards, ensuring spotless and odor-free toilets consistently, which enhances the overall user experience.",
      },
    ];
  
    return (
      <section className="our-benefits">
        <h2 className="benefits-title">Our Benefits</h2>
        <div className="benefits-container">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
             <div className="benefit-icon">
          <img src={benefit.icon} alt={benefit.title} />
        </div>
              <h3>{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default OurBenefits;

