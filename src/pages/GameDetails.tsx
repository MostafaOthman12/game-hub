import React from "react";
import { useParams } from "react-router-dom";

export const GameDetails = () => {
  const { id } = useParams();
  return <div>Game {id}</div>;
};
