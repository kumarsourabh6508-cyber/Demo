import { useEffect, useRef, useState } from "react";

import ClockDisplay from "./components/ClockDisplay";
import ClockButtons from "./components/ClockButtons";

const initialTime = {
  hour: 11,
  minute: 59,
  second: 58,
  period: "AM",
};

const ClockMain = () => {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(initialTime);

  const timerRef = useRef(null);

  useEffect(() => {
    if (!running) {
      return undefined;
    }

    timerRef.current = setInterval(() => {
      setTime((previousTime) => {
        let {
          hour,
          minute,
          second,
          period,
        } = previousTime;

        second += 1;

        if (second === 60) {
          second = 0;
          minute += 1;
        }

        if (minute === 60) {
          minute = 0;
          hour += 1;
        }

        if (hour === 12 && minute === 0 && second === 0) {
          period = period === "AM" ? "PM" : "AM";
        }

        if (hour === 13) {
          hour = 1;
        }

        return {
          hour,
          minute,
          second,
          period,
        };
      });
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, [running]);

  const handleStart = () => {
    setRunning(true);
  };

  const handleStop = () => {
    setRunning(false);
  };

  const handleReset = () => {
    setRunning(false);
    setTime(initialTime);
  };

  return (
    <div className="clock-card">
      <ClockDisplay time={time} />

      <ClockButtons
        running={running}
        handleStart={handleStart}
        handleStop={handleStop}
        handleReset={handleReset}
      />
    </div>
  );
};

export default ClockMain;