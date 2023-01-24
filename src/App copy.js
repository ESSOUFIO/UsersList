import { Fragment, useState } from "react";
import "./App.css";
import Button from "./components/Buttons/Button";
import InputFilter from "./components/Filter/InputFilter";
import AddUser from "./components/Layout/AddUser";
import Modal from "./components/Modal/Modal";
import ListUsers from "./components/Users/ListUsers";

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

function App() {
  const [users, setUsers] = useState(UsersListInit);
  const [filterInName, setFilterInName] = useState("");
  const [showList, setShowList] = useState(true);
  const [ShowModal, setShowModal] = useState(false);

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

  const showHandler = () => {
    setShowList(!showList);
  };

  const CloseModal = () => {
    setShowModal(false);
  };

  const addUserHandler = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <Fragment>
      <div className="App">
        <div className="container">
          <h1>Users List</h1>
          <div>
            <Button onClick={showHandler}>Hide</Button>
            <Button onClick={() => setShowModal(true)}>Add User</Button>
          </div>
          <InputFilter filterByName={filterByName} />
          <ListUsers
            Users={ListOfUsers()}
            deleteUser={deleteUser}
            show={showList}
          />
        </div>
      </div>

      <Modal ShowModal={ShowModal} CloseModal={CloseModal}>
        <AddUser addUserHandler={addUserHandler} CloseModal={CloseModal} />
      </Modal>
    </Fragment>
  );
}

export default App;
