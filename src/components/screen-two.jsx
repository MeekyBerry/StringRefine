import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, SuccessCard } from "./cards";

const Screen2 = ({ inputValue, setInputValue }) => {
  // Remove all white spaces from the input string and convert it to an array
  const [stringChars, setStringChars] = useState(
    inputValue.replace(/\s/g, "").split("")
  );

  // State to store the colors of each character
  const [cardColors, setCardColors] = useState({});

  // Generate a random color for each character in the string
  useEffect(() => {
    const colors = {};
    stringChars.forEach((char) => {
      if (!colors[char]) {
        colors[char] = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)})`;
      }
    });
    setCardColors(colors);
    // eslint-disable-next-line
  }, []);

  // Handle the click event on a card
  const handleCardClick = (char, id) => {
    // Filter out the clicked character from the stringChars array
    let filteredString = stringChars.filter((el, i) => el !== char || i === id);
    setStringChars(filteredString);
  };

  // Create a map of characters and their count in the stringChars array
  const charsMap = stringChars.reduce((acc, char) => {
    if (!acc[char]) {
      acc[char] = 1;
    } else {
      acc[char]++;
    }
    return acc;
  }, {});

  // Create an array of Card components
  const cards = stringChars.map((char, id) => (
    <Card
      key={id}
      char={char}
      count={charsMap[char]}
      color={cardColors[char]}
      handleClick={() => handleCardClick(char, id)}
    />
  ));

  // Check if the string has any duplicates
  const hasDuplicates = Object.values(charsMap).some((count) => count > 1);

  const navigate = useNavigate();

  const goBack = () => {
    setInputValue("");
    navigate("/");
  };

  return (
    <div className="screenTwo">
      {hasDuplicates ? (
        <div className="screenTwo__card--container">{cards}</div>
      ) : (
        <div className="screenTwo__header">
          <div className="screenTwo__header__success">
            <h2 className="screenTwo__header__success--title">
              Success! No duplicates found in the string.
            </h2>
            <h3 className="screenTwo__header__success--str">
              <span className="screenTwo__header__success--str-original">
                Original String:
              </span>{" "}
              {inputValue}
            </h3>
            <h3 className="screenTwo__header__success--str">
              <span className="screenTwo__header__success--str-result">
                Resultant String:
              </span>{" "}
              {stringChars.join("")}
            </h3>
          </div>
          <div className="screenTwo__card--container app--screenTwo__header__success--card">
            {stringChars.map((char, id) => (
              <SuccessCard key={id} char={char} color={cardColors[char]} />
            ))}
          </div>
        </div>
      )}
      <button className="screenTwo__back" onClick={goBack}>
        Go Back
      </button>
    </div>
  );
};

export default Screen2;
