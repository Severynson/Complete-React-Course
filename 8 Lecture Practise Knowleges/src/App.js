import styles from "./App.module.css";
import AddUser from "./AddUser/AddUser.js";
import UsersList from "./UserList/UserList.js"
import ErrorModel from "./ErrorModel/ErrorModel.js";
import { useState } from "react";

let userList = [
    { name: "Max", age: "31", key: "e1" },
    { name: "John", age: "25", key: "e2" },
  ];

function App() {
  const [reloadList, setReloadList] = useState(userList);



  const submitHandlerFunction = (newUser) => {
        setReloadList((prevUsers) => {
            return [newUser, ...prevUsers];
        })
    };

  return (
    <div className={styles.container}>
      <AddUser userList={userList} submitHandlerFunction={submitHandlerFunction} />
      <UsersList userList={reloadList} />
      <ErrorModel />
      
    </div>
  );
}

export default App;
