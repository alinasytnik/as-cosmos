import React from "react";
import Circle from "../../assets/icons/circle.svg";

export const BackgroundElements = () => {
  return (
    <>
      <img src={Circle} alt="Circle" className="circle-left" />
      <img src={Circle} alt="Circle" className="circle-right" />
      <img src={Circle} alt="Circle" className="circle-center" />
      <div className="dot-red-left dot" />
      <div className="dot-violet dot" />
      <div className="dot-green dot" />
      <div className="dot-red-right dot" />
    </>
  );
};
