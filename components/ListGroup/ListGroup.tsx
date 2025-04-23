import { useState } from "react";
import "./ListGroup.css";

const ListGroup = () => {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default ListGroup;
