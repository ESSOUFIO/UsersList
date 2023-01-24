import { Fragment } from "react";
import "./App.css";
import Button from "./components/Buttons/Button";
import InputFilter from "./components/Filter/InputFilter";
import AddUser from "./components/Users/AddUser";
import Modal from "./components/Modal/Modal";
import ListUsers from "./components/Users/ListUsers";
import { UI_db } from "./Context/UIContext";

function App() {
  const { ShowList, showList, ShowModal } = UI_db();

  return (
    <Fragment>
      <div className="App">
        <div className="container">
          <h1>Users List</h1>
          <div>
            <Button onClick={ShowList}>Hide</Button>
            <Button onClick={ShowModal}>Add User</Button>
          </div>
          <InputFilter />
          <ListUsers show={showList} />
        </div>
      </div>

      <Modal>
        <AddUser />
      </Modal>
    </Fragment>
  );
}

export default App;
