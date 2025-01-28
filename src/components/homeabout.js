import React from "react";
import people from "../img/image main about.png";



const Homeabout = () => {
    return (
        <div className="company-description-container">
        <div className="company-text">
        <div className="company-about-title">
        Nasz zespół
        </div>
          <p>
          WOWClean jest oddany świadczeniu wyjątkowych usług sprzątania dla firm i organizacji każdej wielkości. Mając misję utrzymania higieny i czystości „najlepszego sprzątania toalet”, jesteśmy dumni z dostarczania niezawodnych, dokładnych i przyjaznych dla środowiska rozwiązań sprzątania. Nasz doświadczony zespół rozumie wyjątkowe wyzwania związane ze sprzątaniem komercyjnym i ściśle współpracuje z klientami, aby sprostać ich konkretnym potrzebom. Od restauracji po salony kosmetyczne, stacje benzynowe i magazyny, nasze usługi są dostosowane do utrzymania Twoich przestrzeni w nieskazitelnej czystości i gościnności. 
          </p>
        </div>
        <div className="company-image">
          <img src={people} alt="WOWClean team" />
        </div>
      </div>
    );
  };
  
  export default Homeabout;