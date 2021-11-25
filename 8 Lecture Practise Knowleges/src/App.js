import styles from "./App.module.css";
import AddUser from "./AddUser/AddUser.js";
import UserList from "./UserList/UserList.js"

function App() {
  let userList = [
    { name: "Max", age: "31" },
    { name: "John", age: "25" },
  ];

  return (
    <div className={styles.container}>
      <AddUser/>
      <UserList userList={userList} />
    </div>
  );
}

export default App;
