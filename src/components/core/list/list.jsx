import React from "react";
import { ListItem } from "./list-item";

export const List = (props) => {
  const { items } = props;

  return (
    <ul className="list">
      {items.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </ul>
  );
};
