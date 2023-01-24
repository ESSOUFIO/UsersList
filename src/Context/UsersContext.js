import { createContext, useContext, useState } from "react";

const UsersListInit = [
  {
    id: "1",
    name: "Omar",
    age: "35",
    adress: "Raoued",
    gender: "male",
  },
  {
    id: "2",
    name: "Farah",
    age: "22",
    adress: "Ariana",
    gender: "female",
  },
  {
    id: "3",
    name: "Sami",
    age: "39",
    adress: "Bizerte",
    gender: "male",
  },
  {
    id: "4",
    name: "Hajer",
    age: "29",
    adress: "Mornag",
    gender: "female",
  },
];

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(UsersListInit);
  const [filterInName, setFilterInName] = useState("");

  const deleteUser = (UserId) => {
    setUsers(users.filter((user) => user.id !== UserId));
  };

  const filterByName = (inputName) => {
    setFilterInName(inputName);
  };

  const ListOfUsers = () => {
    if (filterInName) {
      return users.filter((user) =>
        user.name.toLowerCase().includes(filterInName.toLowerCase())
      );
    }
    return users;
  };

  const addUserHandler = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <UsersContext.Provider
      value={{
        ListOfUsers,
        addUserHandler,
        filterByName,
        deleteUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const Users_db = () => {
  return useContext(UsersContext);
};

export default UsersProvider;
