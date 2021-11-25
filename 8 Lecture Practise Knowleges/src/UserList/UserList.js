import styles from './UserList.module.css'

const UserList = (props) => {

  const renderUserList = () => {
    return props.userList.map((item) => {
      return (
        <div>
          {item.name} ({item.age} years old)
        </div>
      );
    });
  };

  return <section className={styles.userList}>{renderUserList()}</section>;
};

export default UserList;