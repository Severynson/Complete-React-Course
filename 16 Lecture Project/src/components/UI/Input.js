const Input = (props) => {

    const inputClasses = props.inputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <div className={inputClasses}>
      <label htmlFor="name">{props.labelText}</label>
      <input
        type="text"
        id="name"
        onChange={props.inputChangeHandler}
        onBlur={props.inputBlurHandler}
        value={props.enteredValue}
      />
      {props.inputIsInvalid && (
        <p className="error-text">Field mustn't be empty.</p>
      )}
    </div>
  );
};

export default Input;