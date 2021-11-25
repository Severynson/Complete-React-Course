import styles from './App.module.css';
import AddUser from './AddUser/AddUser.js';

function App() {

let userList = [
  {name: 'Max', age:'31'},
  {name: 'John', age:'25'},
];

const renderUserList = () => {
  return userList.map((item) => {return <div>{item.name} ({item.age} years old)</div>})
}

  return (
    <div className={styles.container}>
      <AddUser />
<section className={styles.userList}>
  {renderUserList()}
</section>

    </div>
  );
}

export default App;
