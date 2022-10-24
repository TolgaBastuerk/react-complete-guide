import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((item) => (
        <ExpenseItem
          date={item.date}
          title={item.title}
          amount={item.amount}
          key={item.title}
        />
      ))}
    </Card>
  );
};

export default Expenses;
