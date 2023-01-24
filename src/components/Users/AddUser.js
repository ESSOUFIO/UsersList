import "./AddUser.css";

import React, { useState } from "react";
import Button from "../Buttons/Button";
import CancelBtn from "../Buttons/CancelBtn";
import { Users_db } from "../../Context/UsersContext";
import { UI_db } from "../../Context/UIContext";

const InitUser = {
  id: "",
  name: "",
  age: "",
  adress: "",
  gender: "",
};

const AddUser = () => {
  const [newUser, setNewUser] = useState(InitUser);
  const { addUserHandler } = Users_db();
  const { CloseModal } = UI_db();
  const inputsHandler = ({ target }) => {
    setNewUser({
      ...newUser,
      [target.id]: target.value,
    });
  };

  const AddHandler = () => {
    const userId = Math.round(Math.random() * 100);
    addUserHandler({ ...newUser, id: userId });
    CloseModal();
    setNewUser(InitUser);
  };

  return (
    <div>
      <form className="FormWrap">
        <div className="InputWrap">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={newUser.name}
            placeholder="Put your name here .."
            autoComplete="off"
            onChange={inputsHandler}
            autoFocus
          />
        </div>

        <div className="InputWrap">
          <label htmlFor="age">age</label>
          <input
            type="text"
            id="age"
            value={newUser.age}
            placeholder="Put your age here .."
            autoComplete="off"
            onChange={inputsHandler}
          />
        </div>

        <div className="InputWrap">
          <label htmlFor="gender">Gender</label>
          <select id="gender" onChange={inputsHandler} value={newUser.gender}>
            <option value="" style={{ display: "none" }}></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="InputWrap">
          <label htmlFor="adress">Adress</label>
          <input
            type="text"
            id="adress"
            value={newUser.adress}
            placeholder="Put your adress here .."
            autoComplete="off"
            onChange={inputsHandler}
          />
        </div>

        <div style={{ marginTop: "30px" }}>
          <Button onClick={AddHandler}>Add</Button>
          <CancelBtn onClick={CloseModal}>Cancel</CancelBtn>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
