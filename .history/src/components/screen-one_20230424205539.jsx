import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Screen1 = ({ inputValue, handleInputChanges }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Trim the inputValue to remove whitespace
    const trimmedValue = inputValue.trim();
    if (trimmedValue === "") {
      alert("Please enter a non-empty value");
      setErrorMessage("Please enter a non-empty value");
      return;
    }
    navigate(`/screen-two`);
  };

  const handleInputChange = (e) => {
    handleInputChanges(e.target.value);
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
