import React, { useState, useEffect } from "react";

const Clock = () => {
  let [hours, setHours] = useState("00");
  let [minutes, setMinutes] = useState("00");
  let [seconds, setSeconds] = useState("00");

  setInterval(() => {
    hours = new Date().getHours();
    minutes = new Date().getMinutes();
    seconds = new Date().getSeconds();
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  }, 1000);
  return (
    <h1>
      {hours < 10 ? `0${hours}` : hours}:
      {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </h1>
  );
};

export default Clock;
