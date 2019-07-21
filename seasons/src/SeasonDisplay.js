import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "Vamos a la plasha",
    iconName: "sun"
  },
  winter: {
    text: "Hace un chingo de frio",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    // Emisferio norte
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const actualMonth = new Date().getMonth();
  const season = getSeason(props.lat, actualMonth);
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};
export default SeasonDisplay;
