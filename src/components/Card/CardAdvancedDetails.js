import React from "react";

function CardAdvancedDetails({ main }) {
  return (
    <section className="card__section">
      <h3>Advanced details</h3>
      <div>
        {main.sea_level && <p>Sea level: {main.sea_level} hPa</p>}
        {main.grnd_level && <p>Ground level: {main.grnd_level} hPa</p>}
        {main.humidity && <p>Humidity: {main.humidity}%</p>}
        {main.presure && <p>Presure: {main.presure} hPa</p>}
      </div>
    </section>
  );
}

export default CardAdvancedDetails;
