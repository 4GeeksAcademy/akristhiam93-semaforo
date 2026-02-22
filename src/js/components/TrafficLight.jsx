import { useState } from "react";

const TrafficLight = () => {
  const [redBackground, setRedBackground] = useState("red");
  const [yellowBackground, setYellowBackground] = useState("grey");
  const [greenBackground, setGreenBackground] = useState("grey");

  function red() {
    setRedBackground("red");
    setYellowBackground("grey");
    setGreenBackground("grey");
  }

  function yellow() {
    setYellowBackground("orange");
    setRedBackground("grey");
    setGreenBackground("grey");
  }

  function green() {
    setGreenBackground("green");
    setRedBackground("grey");
    setYellowBackground("grey");
  }

  function nextLight() {
    if (redBackground === "red") {
      yellow();
    } else if (yellowBackground === "orange") {
      green();
    } else {
      red();
    }
  }

  return (
    <>
      <div className="traffic-top"></div>

      <div className="traffic-container">
        <div className="light" style={{ backgroundColor: redBackground }} onClick={red}></div>

        <div className="light" style={{ backgroundColor: yellowBackground }} onClick={yellow}></div>

        <div className="light" style={{ backgroundColor: greenBackground }} onClick={green}></div>
      </div>

      <button onClick={nextLight} type="button" className="btn btn-outline-primary mt-5">Change Light</button>
    </>
  );
};

export default TrafficLight;