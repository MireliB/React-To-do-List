import React, { useContext, useState, createContext } from "react";

export const DataContext = createContext({});

export function useDataProvider() {
  return useContext(DataContext);
}

const DataProvider = ({ children }) => {
  const [list, setList] = useState([
    {  title: "Hit the Gym"},
    {  title: "Pay Bills"},
    {  title: "Meet Friends"},
    {  title: "Buy Food stuff"},
    {  title: "Read a Book"},
    { title: "Organize Office"},
  ]); //need to continue it.

  const updateList = (updatedList) => {
    setList(updatedList);
  };

  return (
    <DataContext.Provider value={{ list, updateList }}>
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;
