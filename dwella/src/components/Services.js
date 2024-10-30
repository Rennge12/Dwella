import React from 'react';
import "../styles/Services.css";

const Services = () => {
  return (
    <section className="services-section">
      <h1 className="title">Sniedz savu pakalpojumu</h1>
      <p>Jums ir iespēja dot citiem dzīvesvietu.</p>
      <a className="service-button" href="/AddListing">Pievienot sludinājumu</a>
    </section>
  );
};

export default Services;
