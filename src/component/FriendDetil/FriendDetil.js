import React from "react";
import { useParams } from "react-router-dom";

const FriendDetil = () => {
  const params = useParams();
  return (
    <div>
      <h2>Detil about dosto {params.friendId}</h2>
    </div>
  );
};

export default FriendDetil;
