import styles from './UserList.module.css'

const UsersList = (props) => {

  const renderUsersList = () => {
    return props.userList.map((item) => {
      return (
        <div key={Math.random().toString()}>
          {item.name} ({item.age} years old)
        </div>
      );
    });
  };
  return <section className={styles.userList}>{renderUsersList()}</section>;
};

export default UsersList;