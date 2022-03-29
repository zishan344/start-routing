import React from "react";
import { Link, useNavigate } from "react-router-dom";

const FriendDetils = (props) => {
  const { id, name, username } = props.friend;
  let navigat = useNavigate();
  const showDetils = () => {
    const path = `/friends/${id}`;
    navigat(path);
  };
  return (
    <div>
      <h2>{name}</h2>
      <Link to={`/friends/${id}`}></Link>
      <button onClick={showDetils}>
        {username} {id}
      </button>
    </div>
  );
};

export default FriendDetils;
