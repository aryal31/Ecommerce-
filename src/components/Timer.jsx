import React, { useState, useEffect } from "react";

const CountdownTimer = ({ days, hours, minutes, seconds, className }) => {
  const [timeLeft, setTimeLeft] = useState({
    days,
    hours,
    minutes,
    seconds,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevState) => {
        let newSeconds = prevState.seconds - 1;
        let newMinutes = prevState.minutes;
        let newHours = prevState.hours;
        let newDays = prevState.days;

        if (newSeconds === -1) {
          newSeconds = 59;
          newMinutes--;
        }

        if (newMinutes === -1) {
          newMinutes = 59;
          newHours--;
        }

        if (newHours === -1) {
          newHours = 23;
          newDays--;
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex justify-center space-x-4 ${className}`}>
      <div>
        <div className="text-sm">Days</div>
        <div className="text-4xl font-bold">
          {timeLeft.days}
          <span className="text-[#db4444]"> : </span>
        </div>
      </div>
      <div>
        <div className="text-sm">Hours</div>
        <div className="text-4xl font-bold">
          {timeLeft.hours}
          <span className="text-[#db4444]"> : </span>
        </div>
      </div>
      <div>
        <div className="text-sm">Minutes</div>
        <div className="text-4xl font-bold">
          {timeLeft.minutes}
          <span className="text-[#db4444]"> : </span>
        </div>
      </div>
      <div>
        <div className="text-sm">Seconds</div>
        <div className="text-4xl font-bold">{timeLeft.seconds}</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
