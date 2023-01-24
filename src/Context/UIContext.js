import { createContext, useContext, useState } from "react";

const UIContext = createContext();

const UIProvider = ({ children }) => {
  const [showList, setShowList] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const ShowList = () => {
    setShowList(!showList);
  };

  const CloseModal = () => {
    setShowModal(false);
  };

  const ShowModal = () => {
    setShowModal(true);
  };

  return (
    <UIContext.Provider
      value={{ ShowList, showList, CloseModal, ShowModal, showModal }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const UI_db = () => {
  return useContext(UIContext);
};

export default UIProvider;
