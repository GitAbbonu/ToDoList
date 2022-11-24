import React, { useState } from "react";
import "./NewAdd.css";

import NewAddForm from "./NewAddForm";

function NewAdd(props) {
  //Logica btn "+" che si apre e chiude
  const [isClick, setIsClick] = useState(false);

  const startClickHandler = () => {
    setIsClick(true);
  };
  const stopClickHandler = () => {
    setIsClick(false);
  };
  //Logica btn FINE

  const onSaveNewToDoHandler = (dataFromForm) => {
    const datiToDo = {
      ...dataFromForm,
      //!IMPORTANTE aggiunta id (in questa caso random) IMPORTANTE
      id: Math.random().toString(),
    };
    props.onAddToDo(datiToDo);

    setIsClick(false);
  };

  return (
    <div>
      {!isClick && (
        <button className="circle_button" onClick={startClickHandler}>
          +
        </button>
      )}
      {isClick && (
        <NewAddForm
          onSaveNewToDo={onSaveNewToDoHandler}
          onCancel={stopClickHandler}
        />
      )}
      <br />
    </div>
  );
}

export default NewAdd;
