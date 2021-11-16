import React from "react";

const CardLocations = ({ coord }) => {
  return (
    <section className="card__section">
      <h3>Coords</h3>
      <div>
        <p>Latitude: {coord.lat}°</p>
        <p>longitude: {coord.lon}°</p>
      </div>
    </section>
  );
};

export default CardLocations;
