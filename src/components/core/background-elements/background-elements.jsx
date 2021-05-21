import React from "react";
import Circle from "../../../assets/icons/circle.svg";

export const BackgroundElements = () => {
  return (
    <div className="background-elements">
      <img src={Circle} alt="Circle" className="circle circle-left" />
      <img src={Circle} alt="Circle" className="circle circle-right" />
      <img src={Circle} alt="Circle" className="circle circle-center" />
      <div className="dot-red-left dot" />
      <div className="dot-violet dot" />
      <div className="dot-green dot" />
      <div className="dot-red-right dot" />
    </div>
  );
};
