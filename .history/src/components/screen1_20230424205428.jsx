
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Define a functional component that accepts two props
const Screen1 = ({ inputValue, handleInputChanges }) => {
  // Initialize the errorMessage state variable to an empty string.
  const [errorMessage, setErrorMessage] = useState("");
  // Assign the useNavigate hook.
  const navigate = useNavigate();

  // Define a function named handleSubmit that is called when the submit button is clicked
  const handleSubmit = () => {
    // Trim the inputValue to remove whitespace
    const trimmedValue = inputValue.trim();
    // Check if the trimmed value is an empty string
    if (trimmedValue === "") {
      // If yes, display an alert
      alert("Please enter a non-empty value");
      // Set the errorMessage state variable
      setErrorMessage("Please enter a non-empty value");
      return;
    }
    // Use the navigate function to redirect the user to screen 2
    navigate(`/screen-two`);
  };

  // Define a function named handleInputChange that updates the inputValue state variable with the value of the input field
  const handleInputChange = (e) => {
    handleInputChanges(e.target.value);
    // Clear the errorMessage state variable
    setErrorMessage("");
  };

  return (
    <div className="screenOne">
      <div className="screenOne__header">
        <h1 className="screenOne__header--title">
          HouseWare Octernship Project
        </h1>
        <h2 className="screenOne__header--subtitle">
          Duplicate character remover
        </h2>
      </div>
      <div className="screenOne__container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a string to remove duplicate characters"
          className="screenOne__container__input"
        />
        <p className="screenOne__container__error">{errorMessage}</p>{" "}
        <button
          type="submit"
          onClick={handleSubmit}
          className="screenOne__container__btn"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Screen1;