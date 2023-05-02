import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, SuccessCard } from "./cards";

// Define a functional component that accepts two props
const Screen2 = ({ inputValue, onGoBack }) => {
  // Initialize stringChars to an array of characters, obtained by removing all whitespace and splitting the inputValue
  const [stringChars, setStringChars] = useState(
    inputValue.replace(/\s/g, "").split("")
  );
  const [cardColors, setCardColors] = useState({});

  useEffect(() => {
    const colors = {};
    stringChars.forEach((char) => {
      if (!colors[char]) {
        colors[char] = `rgb(${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )})`;
      }
    });
    setCardColors(colors);
  }, [stringChars]);

  // Define a function that accepts two arguments to remove a card from the list when it is clicked
  const handleCardClick = (char, id) => {
    // Filter the stringChars array to remove the clicked card
    let filteredString = stringChars.filter((el, i) => el !== char || i === id);
    setStringChars(filteredString);
  };

  // An object to store the frequency of each character in the stringChars array
  const charsMap = stringChars.reduce((acc, char) => {
    if (!acc[char]) {
      acc[char] = 1;
    } else {
      acc[char]++;
    }
    return acc;
  }, {});

  // const cardColors = {};
  // let colorIndex = 0;
  // stringChars.forEach((char) => {
  //   if (!cardColors[char]) {
  //     // cardColors[char] = `hsl(${colorIndex * 50}, 100%, 50%)`;
  //     cardColors[char] = `rgb(${Math.floor(
  //       Math.random() * 256
  //     )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
  //       Math.random() * 256
  //     )})`;
  //     // colorIndex++;
  //   }
  // });

  // Map over the stringChars array to create a Card component for each character in the array
  const cards = stringChars.map((char, id) => (
    <Card
      key={id}
      char={char}
      count={charsMap[char]}
      color={cardColors[char]}
      handleClick={() => handleCardClick(char, id)}
    />
  ));

  // Check if the stringChars array has duplicate characters
  const hasDuplicates = Object.values(charsMap).some((count) => count > 1);

  const navigate = useNavigate();
  const goBack = () => {
    onGoBack();
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
              Success! No duplicates found in the string
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
