import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react/cjs/react.development";

const NewExpense = (props) => {
  const [updating, setUpdating] = useState(false);

  const saveExpenseDataHandler = (enteredExppenseData) => {
    console.log(enteredExppenseData)
    const expenseData = {
      ...enteredExppenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setUpdating(true);
  }

  const stopEditingHandler = () => {
    setUpdating(false);
  }

  return <div className="new-expense">
    {!updating && <button onClick={startEditingHandler}>Add New Expense</button>}
  {updating && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
  </div>;
};

export default NewExpense;