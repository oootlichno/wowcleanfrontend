import React from "react";
import bactreria from "../img/bacteria.png";
import clock from "../img/clock.png";
import vector from "../img/Vector.png";

const OurBenefits = () => {
  const benefits = [
    {
      icon: bactreria,
      title: "Lepsza higiena i dezynfekcja",
      description:
        "Profesjonalni sprzątacze stosują zaawansowane techniki i produkty do dezynfekcji toalet, redukując liczbę zarazków i promując zdrowsze środowisko.",
    },
    {
      icon: clock,
      title: "Oszczędność czasu i wysiłku",
      description:
        "Dzięki zleceniu czyszczenia toalet na zewnątrz zyskujesz czas i energię, które możesz poświęcić na ważniejsze zadania lub priorytety osobiste, podczas gdy eksperci sprawnie zajmą się czyszczeniem. Zajmiemy się całą brudną robotą.",
    },
    {
      icon: vector,
      title: "Spójne i wysokiej jakości rezultaty",
      description:
        "Profesjonalni sprzątacze są przeszkoleni w zakresie utrzymywania wysokich standardów, zapewniając nieskazitelnie czyste i pozbawione zapachów WC, co poprawia ogólne wrażenia użytkownika.",
    },
  ];

  return (
    <section className="our-benefits">
      <h2 className="benefits-title">Nasze korzyści</h2>
      <div className="benefits-container">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <div className="benefit-icon">
              <img src={benefit.icon} alt={benefit.title} />
            </div>
            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurBenefits;

