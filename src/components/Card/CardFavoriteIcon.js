import React from "react";
const CardFavoriteIcon = ({ handleFavorite }) => {
  return (
    <button onClick={handleFavorite} className="btn btn-favorite">
      <i className="far fa-star"></i>
    </button>
  );
};

export default CardFavoriteIcon;
