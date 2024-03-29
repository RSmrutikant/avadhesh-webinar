import React, { useState, useEffect } from "react";

const Countdown = () => {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isWebinar: false,
  });

  useEffect(() => {
    const webinarDay = "02/21/2024";
    const countDownDate = new Date(webinarDay).getTime();

    const x = setInterval(function () {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      setCountdown({
        days: Math.floor(distance / day),
        hours: Math.floor((distance % day) / hour),
        minutes: Math.floor((distance % hour) / minute),
        seconds: Math.floor((distance % minute) / second),
        isWebinar: distance < 0,
      });

      if (distance < 0) {
        clearInterval(x);
      }
    }, 1000);

    return () => clearInterval(x);
  });

  return (
    <>
      {countdown.isWebinar ? (
        <h1>Sorry you are little late for registration, Thanks For Visiting!</h1>
      ) : (
        <>
        <div className="countdown-wrapper">
        <h1>Managing Imposter Syndrome</h1>
        <p>January 21, 2024 | 11:00 a.m. - 12:00 noon IST | Virtual</p>
        <h2>Registration closes in...</h2>
        </div>
        <div id="countdown">
          <div><span id="days">{countdown.days}</span>Days</div>
          <div><span id="hours">{countdown.hours}</span>Hours</div>
          <div><span id="minutes">{countdown.minutes}</span>Minutes</div>
          <div><span id="seconds">{countdown.seconds}</span>Seconds</div>
        </div>
        </>
      )}
    </>
  );
};

export default Countdown;
