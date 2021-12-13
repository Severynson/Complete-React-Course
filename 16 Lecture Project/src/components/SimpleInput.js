import { useEffect, useState } from "react";
import Input from "./UI/Input";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;
  
const enteredEmailIsValid = enteredEmail.trim() !== "";
const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailIsTouched;

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
      formIsValid = true;
    };


  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    console.log(event.target.value)
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameIsTouched(true);
    console.log(enteredNameIsTouched)
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailIsTouched(true);
  };

  const formSubmitChangeHandler = (event) => {
    event.preventDefault();

    setEnteredNameIsTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    setEnteredName("");
    setEnteredNameIsTouched(false);
  };

  // const nameInputClasses = nameInputIsInvalid
  //   ? "form-control invalid"
  //   : "form-control";

  return (
    <form onSubmit={formSubmitChangeHandler}>
      <Input labelText='Your Name' inputChangeHandler={nameInputChangeHandler} inputBlurHandler={nameInputBlurHandler} enteredValue={enteredName} inputIsInvalid={nameInputIsInvalid}/>
      <Input labelText='Your E-Mail' inputChangeHandler={emailInputChangeHandler} inputBlurHandler={emailInputBlurHandler} enteredValue={enteredEmail} inputIsInvalid={emailInputIsInvalid}/>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
