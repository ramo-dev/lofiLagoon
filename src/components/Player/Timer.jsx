import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  useEffect(() => {
    if (seconds === 60) {
      setMinutes((prevMinutes) => prevMinutes + 1);
      setSeconds(0);
    }
  }, [seconds]);

  useEffect(() => {
    if (minutes === 60) {
      setHours((prevHours) => prevHours + 1);
      setMinutes(0);
    }
  }, [minutes]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setIsRunning(false);
  };

//   const handleToggleVisibility = () => {
//     const timer = document.querySelector(".timer");
//     timer.classList.toggle("hidden");
//   };

  return (
    <div className=" timer">

      <div className=" ">
        <p>
          {hours.toString().padStart(2, "0")} :{" "}
          {minutes.toString().padStart(2, "0")} :{" "}
          {seconds.toString().padStart(2, "0")}
        </p>
      </div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
      {/* <button onClick={handleToggleVisibility}>Toggle Visibility</button> */}
    </div>
  );
};

export default Timer;
