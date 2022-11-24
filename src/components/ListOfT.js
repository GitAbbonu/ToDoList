import "./ListOfT.css";
import Card from "./Card/Card";

function ListOfT(props) {
  //if there isn't anythinks in the list print:
  if (props.items.length === 0) {
    return <h2>- finished -</h2>;
  }
  /*  FUNZIONANTE
  Logica btn Remove
  const onRemoveHandler = (e) => {
    props.onRemoveFromList(e);
  };
  */
  //Logica btn Remove
  //Passa direttamente id
  const onRemoveHandler = (id) => {
    props.onRemoveFromList(id);
  };

  const onUpdateHandler = (id, newToDo) => {
    props.onUpdateToDo(id, newToDo);
  };

  return (
    <div className="list">
      {props.items.map((toDoThink) => (
        <Card
          key={toDoThink.id}
          id={toDoThink.id}
          toDo={toDoThink.toDo}
          date={toDoThink.date}
          onRemove={onRemoveHandler}
          onUpdate={onUpdateHandler}
        />
      ))}
      ;
    </div>
  );
}

export default ListOfT;
