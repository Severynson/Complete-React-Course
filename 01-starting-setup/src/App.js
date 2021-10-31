import Expenses from "./components/Expenses"

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // expenses.forEach((el, i, arr) => {
  //   console.log('ssssssssssssss')
  //   return (

  //     <ExpenseItem
  //     title={arr[i].title}
  //         amount={arr[i].amount}
  //         date={arr[i].date}
  //     ></ExpenseItem>
  //   )
  // });

  // console.log(expenses.length)
  // var i;
  // for (i = 0; i >= expenses.length; i++) {
  //   console.log('why!?')
  //   return (
  //     <ExpenseItem
  //     title={expenses[i].title}
  //         amount={expenses[i].amount}
  //         date={expenses[i].date}
  //     ></ExpenseItem>
  //   )
  // }

  return (
    <div>
      <h2>Let's get started!</h2>
    <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
