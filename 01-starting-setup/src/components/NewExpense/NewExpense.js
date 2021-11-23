import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExppenseData) => {
    console.log(enteredExppenseData)
    const expenseData = {
      ...enteredExppenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  let hidingForm = (<button>Add New Expense</button>)

  return <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
  </div>;
};

export default NewExpense;