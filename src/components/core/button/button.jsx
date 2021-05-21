import React from "react";

export const Button = (props) => {
  const className = `button ${props.className}`;

  return <button {...props} className={className} />;
};
