import styles from "./ErrorModel.module.css";

var counter = true;

const ErrorModel = (props) => {
  if (counter === true) {
    return (
      <div>
        <div className={styles.backdrop} />
        <div className={styles.error}>
          <div className={styles["error-heading"]}>
            <p>{props.title}</p>
          </div>
          <div className={styles["error-message"]}>
            <p>{props.message}</p>
          </div>
          <div className={styles["error-button-div"]}>
            <button type="submit" onClick={() => (counter = false)}>
              Okay
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default ErrorModel;
