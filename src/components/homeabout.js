import React from "react";
import people from "../img/people_on_work.jpeg";



const Homeabout = () => {
    return (
        <div className="company-description-container">
        <div className="company-text">
          <h2>About</h2>
          <p>
            WOWClean is dedicated to providing exceptional cleaning services for
            businesses and organizations of all sizes. With a mission to
            maintain hygiene and cleanliness "one toilet at a time," we pride
            ourselves on delivering reliable, thorough, and eco-friendly
            cleaning solutions. Our experienced team understands the unique
            challenges of commercial cleaning and works closely with clients to
            meet their specific needs. From offices to restaurants, gas
            stations, and beauty salons, our services are tailored to keep your
            spaces spotless and welcoming. Trust WOWClean to transform your
            spaces into a beacon of cleanliness.
          </p>
        </div>
        <div className="company-image">
          <img src={people} alt="WOWClean team" />
        </div>
      </div>
    );
  };
  
  export default Homeabout;