import React from "react";
import { useNavigate } from "react-router-dom";

const FriendDetils = (props) => {
  const { id, name, username } = props.friend;
  let navigat = useNavigate();
  const showDetils = () => {
    const path = `/friend/${id}`;
    navigat(path);
  };
  return (
    <div>
      <h2>{name}</h2>
      <button onClick={showDetils}>
        {username} {id}
      </button>
    </div>
  );
};

export default FriendDetils;
