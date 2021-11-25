import styles from "./ErrorModel.module.css"

var counter = true;

const ErrorModel = () => {
    if (counter === true) {
         return <div className={styles.error} styles={counter === true ? ''}>
        <div className={styles["error-heading"]}><p>An error occured!</p></div>
        <div className={styles["error-message"]}><p>Something went wrong!</p></div>
        <div className={styles["error-button-div"]}><button type="submit" onClick={() => counter = false}>Okay</button></div>
      </div> 
    }
       
}

export default ErrorModel;