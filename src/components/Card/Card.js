import "./Card.css";

import ClearDate from "../ClearDate";

function Card(props) {
  const toDo = props.toDo;

  //Logica btn Remove
  const removeHandler = () => {
    //?props.onRemove(props.toDo); Passando nome (1a versione)
    props.onRemove(props.id);
  };

  return (
    <div className="card-container">
      <div className="card">
        <div className="card__content">
          <div className="row">
            <div className="column">
              <strong>To Do:</strong>
            </div>
            <div className="column">{toDo}</div>
          </div>
          <hr id="line" />
          <div className="row">
            <div className="column">
              <strong>Deadline:</strong>
            </div>
            <div className="column">
              <ClearDate date={props.date} />
            </div>
          </div>
        </div>
      </div>
      <i onClick={removeHandler} className="fa fa-remove btn-remove"></i>;
    </div>
  );
}

export default Card;
