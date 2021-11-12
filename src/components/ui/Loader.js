import React from "react";

const Loader = () => {
  return (
    <article className="loader">
      <h2>Loading</h2>
      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </article>
  );
};

export default Loader;
