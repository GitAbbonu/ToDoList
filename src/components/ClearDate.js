function ClearDate(props) {
  const month = props.date.toLocaleString("it-IT", { month: "long" });
  const day = props.date.toLocaleString("it-IT", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div>
      {day}/{month}/{year}
    </div>
  );
}

export default ClearDate;
