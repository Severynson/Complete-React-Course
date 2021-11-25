import { useState } from "react";
import styles from "./AddUser.module.css";
import ErrorModel from "../ErrorModel/ErrorModel";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const nameSaveHandler = (event) => {
    setName(event.target.value);
  };
  const ageSaveHandler = (event) => {
    setAge(event.target.value);
  };

  const newUserHandler = (e) => {
    e.preventDefault();
    const newUser = {
      name: name,
      age: age,
      key: Math.random().toString(),
    };
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input!",
        message: "Please enter a valid name and age (non-empty values)."
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invallid age!",
        message: "Please enter a valid age (> 0)."
      });
      return;
    }
    props.submitHandlerFunction(newUser);
    setName("");
    setAge("");
  };

  const errorHandler = () => {
    setError(null)
  }

  return (
    <div>
      {error && <ErrorModel cancel={errorHandler} title={error.title} message={error.message} />}
      <section>
        <form className={styles.addUser} onSubmit={newUserHandler}>
          <label>Username</label>
          <input value={name} onChange={nameSaveHandler}></input>
          <label>Age (Years)</label>
          <input value={age} onChange={ageSaveHandler}></input>
          <button type="submit">Add User</button>
        </form>
      </section>
    </div>
  );
};

export default AddUser;
