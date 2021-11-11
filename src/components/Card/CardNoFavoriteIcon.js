import React from "react";

const CardNoFavoriteIcon = ({ handleFavorite }) => {
  return (
    <button onClick={handleFavorite} className="btn btn-favorite">
      <i className="fas fa-star"></i>
    </button>
  );
};

export default CardNoFavoriteIcon;
