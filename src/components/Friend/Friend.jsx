import React from "react";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
  //console.log(friend);
  const { email, name, id, phone } = friend;
  return (
    <div className="border  border-t-violet-400 border-b-indigo-600 border-s-cyan-800 border-r-purple-500 rounded-xl mb-5 shadow-md ">
      <h3 className=" text-4xl">Name:{name}</h3>
      <p className="text-3xl">Email:{email}</p>
      <p className="text-3xl">Id:{id}</p>
      <p>{phone}</p>
      <p><Link to={`/friend/${id}`}>Show Details</Link></p>
    </div>
  );
};

export default Friend;
