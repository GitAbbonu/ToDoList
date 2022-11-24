import React, { useState } from "react";
import "./NewAddForm.css";

function NewAddForm(props) {
  //?Permette di inserire nel form data e nome di default, se non esiste usa ""
  const initToDo = props.prevToDo !== undefined ? props.prevToDo : "";

  // console.log(props.prevDate);
  // console.log(initDate);

  //Creazione variabili dove salvare le value di imput
  const [enteredTitle, setEnteredTitle] = useState(initToDo);
  const [enteredDate, setEnteredDate] = useState("");

  //creazioni funzioni (=>) che inseriscono nelle variabili appena create
  //onChange avra questa funzione, ogni volta che cambia qualcosa
  //attiverà la funz che adrà a acambiare enteredTitle e gli inserirà
  //ciò che troverà in value
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  //-----------SUBMITHANDLER-------------INIZIO

  const submitHandler = (event) => {
    //da usare per eventuali errori
    event.preventDefault();

    //creazione dei dati sotto foma di json
    //con nomi === a lista iniziale

    //?: Controllo imput se è vuoto
    if (enteredTitle === "" || enteredDate === "") {
      document.getElementById("alert-mess").classList.add("visible");
      setTimeout(() => {
        document.getElementById("alert-mess").classList.remove("visible");
      }, 4000);
    } else {
      const toDoDati = {
        toDo: enteredTitle,
        date: new Date(enteredDate),
      };

      //chiamata di funz di onSaveNewToDo del props di NewAdd
      //che aggiunge id con Math.random e chiama funz di props onAddToDo di App.js
      //che aggiunge alla lista iniziale il nuovo toDo
      props.onSaveNewToDo(toDoDati);
    }

    //riponiamo a "zero" i dati per eventuali errori
    setEnteredTitle("");
    setEnteredDate("");
  };
  //-----------SUBMITHANDLER-------------FINE

  return (
    <div className="list">
      <div className="extend-cart">
        <form onSubmit={submitHandler}>
          <div className="card__content">
            <div className="row">
              <label className="column">
                <strong>To Do:</strong>
              </label>
              <input
                className="column"
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>
            <hr id="line" />
            <div className="row">
              <label className="column">
                <strong>Deadline:</strong>
              </label>
              <input
                className="column"
                type="date"
                min="2022-10-31"
                max="2025-12-31"
                value={enteredDate}
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="row">
            <span id="alert-mess" className="alert-box">
              Inserisci Titolo e Data
            </span>
          </div>
          <div className="row">
            {/** onClick prende onCancel di props che nasconde Form (props di NewAdd) */}
            <button className="btn-form canc" onClick={props.onCancel}>
              Cancel
            </button>
            <button className="btn-form add" type="submit">
              Add to List
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewAddForm;
