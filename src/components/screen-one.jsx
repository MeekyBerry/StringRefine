import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Screen1 = ({ inputValue, setInputValue, handleInputChanges }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Set inputValue to empty string on page load
  useEffect(
    () => {
      setInputValue("");
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();
    if (trimmedValue === "") {
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
      <div className="screenOne__bg">{""}</div>
      <div className="screenOne__header">
<div className="screenOne__header--top">
 <h1 className="screenOne__header--title">StringRefine </h1>
        <h2 className="screenOne__header--subtitle">
          Remove Duplicate Characters From A String: Create Clean and Unique String Output!
        </h2>
</div>
<p className="screenOne__header--intro">
Welcome to <span className="screenOne__header-span">StringRefine</span>, the ultimate tool for simplifying your strings. Say goodbye to repetitive characters cluttering your text. With StringRefine, you can effortlessly transform any string into its cleanest and most elegant form.
</p>
</div>
<form className="screenOne__container" onSubmit={handleSubmit}>
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
          className="screenOne__container__btn"
        >
          Submit
        </button>
      </form>
<div className="screenOne__header--wrapper">
<div className="screenOne__header--list">
<h2 className="screenOne__header--head">Features:</h2>
<p className="screenOne__header--item">🔹<strong>Effortless Cleaning:</strong> Easily input your string, and StringRefine will automatically identify and remove duplicate characters.</p>
<p className="screenOne__header--item">🔹<strong>Visual Representation:</strong> Watch as each character comes to life on our intuitive card interface. Remove duplicates with a simple click</p>
<p className="screenOne__header--item">🔹<strong>Preserve Uniqueness:</strong> StringRefine ensures that each character retains its individuality. If no duplicates exist, the original character remains intact.</p>
<p className="screenOne__header--item">🔹<strong>Clarity and Efficiency:</strong> Experience the satisfaction of a refined string that's easy on the eyes and optimized for communication.</p>
</div>
<div className="screenOne__header--list">
<h2 className="screenOne__header--head">How to Use:</h2>
<p className="screenOne__header--item">🔹<strong>Input: </strong> Enter your string in the input box above.</p>
<p className="screenOne__header--item">🔹<strong>Submit:</strong> Click the submit button and watch as your string is transformed into a series of distinct characters.</p>
<p className="screenOne__header--item">🔹<strong>Refine:</strong> Remove duplicate instances of characters with a quick tap on the delete icon.</p>
<p className="screenOne__header--item">🔹<strong>Copy:</strong> Click the copy button to copy your refined string to the clipboard. (Not available yet)</p>
</div>
</div>
    </div>
  );
};

export default Screen1;
