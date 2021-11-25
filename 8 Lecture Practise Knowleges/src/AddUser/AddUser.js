import { useState } from "react";
import styles from "./AddUser.module.css";
import ErrorModel from "../ErrorModel/ErrorModel";

const AddUser = (props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const nameSaveHandler = (event) => {
        setName(event.target.value);
    }
    const ageSaveHandler = (event) => {
        setAge(event.target.value);

    }

    const newUserHandler = (e) => {
        e.preventDefault();
        const newUser = {
          name: name,
          age: age,
          key: Math.random().toString()
        };
        if (name.trim().length === 0 || age.trim().length === 0) {return};
        if (+age < 1) {return};
        props.submitHandlerFunction(newUser);
        setName('');
        setAge('');
    }

  return (
    <div>
    <ErrorModel title="An error occured!" message="Something went wrong!"/>
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