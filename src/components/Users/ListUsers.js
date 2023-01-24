import "./Users.css";
import React from "react";
import UserCard from "./UserCard";
import { Users_db } from "../../Context/UsersContext";

const ListUsers = ({ show }) => {
  const { ListOfUsers } = Users_db();
  const Users = ListOfUsers();
  return (
    <div className="ListUsers" style={{ display: `${show ? "grid" : "none"}` }}>
      {Users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default ListUsers;
