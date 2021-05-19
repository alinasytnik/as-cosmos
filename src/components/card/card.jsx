import React from "react";

export const Card = (props) => {
  const { src, title, alt } = props;

  return (
    <button className="card">
      <img className="card-image" src={src} alt={alt} />
      <div className="card-gradient">
        <h3 className="card-title">{title}</h3>
      </div>
    </button>
  );
};
