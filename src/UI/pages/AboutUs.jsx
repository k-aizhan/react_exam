import React from "react";
import '../styles/pages.css';
const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h3>Description</h3>
        <p>
         Эффективная перевозка грузов
        </p>
      </div>
      <div className="team-section">
        <div className="team-images">
          <div className="team-member">
            <img className="img-about-us" src="https://www.kdelo.ru/images/art/ads/2209_5.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Operations Manager</p>
          </div>
          <div className="team-member">
            <img className="img-about-us" src="https://s12.stc.all.kpcdn.net/edu/wp-content/uploads/2023/08/menedzher-proektov-1232.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Project Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
