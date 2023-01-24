import "./Users.css";
import { IoMdCloseCircle } from "react-icons/io";

import React from "react";
import { Users_db } from "../../Context/UsersContext";

const UserCard = ({ user }) => {
  const styleBack = user.gender === "male" ? "blue" : "pink";
  const { deleteUser } = Users_db();

  return (
    <div className={`UserCard ${styleBack}`}>
      <p>Id: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Age : {user.age}</p>
      <p>Adress: {user.adress}</p>
      <p>Gender: {user.gender}</p>
      <div className="iconClose" onClick={() => deleteUser(user.id)}>
        <IoMdCloseCircle />
      </div>
    </div>
  );
};

export default UserCard;
