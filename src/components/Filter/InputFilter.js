import "./InputFilter.css";

import React from "react";
import { Users_db } from "../../Context/UsersContext";

const InputFilter = () => {
  const { filterByName } = Users_db();
  const inputHandler = ({ target }) => {
    const InputName = target.value;
    filterByName(InputName);
  };

  return (
    <input
      type="text"
      placeholder="Filter by name .."
      className="InputFilter"
      onChange={inputHandler}
    />
  );
};

export default InputFilter;
