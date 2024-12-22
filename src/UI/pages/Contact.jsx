import React from "react";


const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-banner">
      <img src="https://translogist.su/7_dorog_sem_dorog.png" alt="" />  
      </div>      
       <div className="contact-info">
        <div className="detail-card">
            <p> 📞 +7-727-345-67-89</p>
        </div>
        <div className="detail-card">
            <p>💬 +7-701-345-67-89</p>
          </div>
        <div className="option-card">
          <h3>По вопросам: 📧 depot_kz@mail.ru</h3>
        </div>
        <div className="option-card">
          <h3> 📍 Наш офис: город Алматы, индекс 05000, улица Зенкова д.70 офис 512</h3>
        </div>
        
        </div>
      </div>
  );
};

export default Contact;
