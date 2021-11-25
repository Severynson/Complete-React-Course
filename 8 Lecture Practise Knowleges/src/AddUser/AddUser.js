import styles from "./AddUser.module.css";

const AddUser = (props) => {
  return (
    <section>
        <form className={styles.addUser}>
      <label>Username</label>
      <input></input>
      <label>Age (Years)</label>
      <input></input>
      <button type="submit">Add User</button>
    </form>
    </section>
  );
};

export default AddUser;