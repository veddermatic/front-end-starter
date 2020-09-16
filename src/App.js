import React from "react";
import "./App.css";

/**
 * This function is our fake API call.
 *
 * Calling it will return a promise that will resolve
 * with data just like calling `fetch('https://my.api/data')` would.
 *
 * To keep things simple, this one can't fail =)
 */
const loadTheData = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 750);
  }).then(() => theData);
};

/**
 * Wrapper component
 */
const App = () => {
  const handleClick = () => {
    console.log("you clicked me!");
  };

  return (
    <div className="App">
      <h1>List of Buildings</h1>
      <button onClick={handleClick}>Load Data</button>
      <p className="message-text">No data loaded</p>
    </div>
  );
};
export default App;

/**
 * Faux enum for a commodity data type.
 */
const COMMODITY = {
  ELECTRICITY_DEMAND: "ELECTRICITY_DEMAND",
  ELECTRICITY_USAGE: "ELECTRICITY_USAGE",
  NATURAL_GAS: "NATURAL_GAS",
  CHILLED_WATER: "CHILLED_WATER",
  HOT_WATER: "HOT_WATER",
  STEAM: "STEAM",
};

/**
 * Data returned by the "API".
 */
const theData = {
  data: [
    {
      id: "abc-123",
      name: "123 Main Street",
      meters: [
        { id: "21342", commodity: COMMODITY.ELECTRICITY_DEMAND },
        { id: "9732", commodity: COMMODITY.ELECTRICITY_USAGE },
      ],
    },
    {
      id: "def-456",
      name: "456 Elm Street",
      meters: [{ id: "908723", commodity: COMMODITY.NATURAL_GAS }],
    },
    {
      id: "ghi-789",
      name: "789 Oak Lane",
      meters: [
        { id: "12390", commodity: COMMODITY.CHILLED_WATER },
        { id: "72132", commodity: COMMODITY.HOT_WATER },
        { id: "899782", commodity: COMMODITY.STEAM },
      ],
    },
    {
      id: "xyz-345",
      name: "55B Tremot Ave",
      meters: null,
    },
    {
      id: "def-456",
      name: "456 Elm Street",
      meters: [
        { id: "7213987", commodity: COMMODITY.NATURAL_GAS },
        { id: "372108", commodity: COMMODITY.STEAM },
      ],
    },
  ],
};
