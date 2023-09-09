import React from "react";
import './Friend.css'

function Friend({friend}) {
  console.log(friend);
  const {name , email} = friend;
  return (
    <div className="box">
      <h2>Name : {name} </h2>
      <h2>Email :{email} </h2>
    </div>
  );
}

export default Friend;
