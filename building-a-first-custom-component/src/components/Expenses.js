import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div className="expenses">
      {props.items.map((item) => (
        <ExpenseItem date={item.date} title={item.title} amount={item.amount} />
      ))}
    </div>
  );
}

export default Expenses;
