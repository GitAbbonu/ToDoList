import React, { useState } from "react";
import ListOfT from "./components/ListOfT";
import NewAdd from "./components/NewAdd/NewAdd";

const LIST = [
  {
    id: 1,
    toDo: "Buy new shampoo",
    date: new Date(2022, 7, 14),
  },
  { id: 2, toDo: "Buy Milk", date: new Date(2022, 2, 12) },
  {
    id: 3,
    toDo: "Take car to the mechanic",
    date: new Date(2022, 2, 28),
  },
  {
    id: 4,
    toDo: "Do the laundrey",
    date: new Date(2022, 5, 12),
  },
];

function App() {
  //Create "list" with LIST as start
  const [list, setList] = useState(LIST);

  //to add new ToDo on the prevList
  const addToDoHandler = (dataFromNewAdd) => {
    setList((prevList) => {
      return [dataFromNewAdd, ...prevList];
    });
  };
  /*
  to remove from list by name
  const removeToDoHandler = (nameToDo) => {
    const newList = list.filter((item) => item.toDo !== nameToDo);

    setList(newList);
  };
  */
  //to remove from list by id
  const removeToDoHandler = (idToDo) => {
    const newList = list.filter((obj) => obj.id !== idToDo);

    setList(newList);
  };

  //update //TODO da Ricontrollare se è tutto modificabile
  const updateToDoHandler = (idToDo, upToDo) => {
    //! array.map(function(obj) { itera gli elem array e permette di usare una funz su di essi per la modifica })
    const newList = list.map((obj) => {
      if (obj.id === idToDo) {
        return { ...obj, toDo: upToDo };
      }

      return obj;
    });

    setList(newList);
  };

  /*
  Prova che funziona l'update
  const prova = () => {
    const dp = new Date(2022, 5, 12);
    updateToDoHandler(2, "prova", dp);
  };
  */

  return (
    <div>
      <h1>To - Do - List</h1>
      <NewAdd onAddToDo={addToDoHandler} />
      <ListOfT
        items={list}
        onRemoveFromList={removeToDoHandler}
        onUpdateToDo={updateToDoHandler}
      />
    </div>
  );
}

export default App;
