import "./Expenses.css";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.items.map((item) => (
        <ExpenseItem date={item.date} title={item.title} amount={item.amount} />
      ))}
    </Card>
  );
}

export default Expenses;
