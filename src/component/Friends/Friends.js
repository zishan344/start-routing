import React, { useEffect, useState } from "react";
import FriendDetils from "../FriendDetils/FriendDetils";

const Friends = () => {
  const [f, setf] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setf(data));
  }, []);
  return (
    <div>
      <h2>Hello friends How are you</h2>
      <p>parle kiso tk dar dis... </p>
      <h6>Total friends : {f.length}</h6>
      {f.map((f) => (
        <FriendDetils key={f.id} friend={f}></FriendDetils>
      ))}
    </div>
  );
};

export default Friends;
