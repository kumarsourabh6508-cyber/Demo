import React, { useEffect, useRef, useState } from "react";
import '../styles/Clock.css'

const ClockDisplay = () => {
  const [running, setRunning] = useState(false);

  const [time, setTime] = useState({
    hour: 11,
    minute: 59,
    second: 58,
    period: "AM",
  });

  const [records, setRecords] = useState([]);

  // Interval ki ID store karega
  const timerRef = useRef(null);

  // Start button press karte waqt ka time store karega
  const startTimeRef = useRef(null);

  const format = (num) => String(num).padStart(2, "0");

  // Record add karne ka function
  const addRecord = (type) => {
    const entryTime = `${format(time.hour)}:${format(
      time.minute
    )}:${format(time.second)} ${time.period}`;

    setRecords((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        type,
        entryTime,
      },
    ]);
  };

  // Timer
  useEffect(() => {
    if (running) {
      timerRef.current = setInterval(() => {
        setTime((prev) => {
          let { hour, minute, second, period } = prev;

          second++;

          if (second === 60) {
            second = 0;
            minute++;
          }

          if (minute === 60) {
            minute = 0;

            if (hour === 11) {
              hour = 12;
              period = period === "AM" ? "PM" : "AM";
            } else if (hour === 12) {
              hour = 1;
            } else {
              hour++;
            }
          }

          return {
            hour,
            minute,
            second,
            period,
          };
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    // Cleanup
    return () => clearInterval(timerRef.current);
  }, [running]);

  // Start / Stop
  const handleStart = () => {
    if (!running) {
      // Start press karte waqt ka time save hoga
      startTimeRef.current = { ...time };

      addRecord("Start");
      setRunning(true);
    } else {
      setRunning(false);
      addRecord("Stop");
    }
  };

  // Reset
  const handleReset = () => {
    setRunning(false);

    addRecord("Reset");

    // Start button press karte waqt ke time par wapas jayega
    if (startTimeRef.current) {
      setTime({ ...startTimeRef.current });
    }
  };

  return (
    <div className="clock-container">
      <div className="clock-card">
        <h1>
          {format(time.hour)}:{format(time.minute)}:
          {format(time.second)} {time.period}
        </h1>

        <div className="buttons">
          <button onClick={handleStart}>
            {running ? "Stop" : "Start"}
          </button>

          <button onClick={handleReset}>Reset</button>
        </div>

        <div className="records">
          <h3>Records ({records.length})</h3>

          {records.length === 0 ? (
            <p>No records yet — Press Start</p>
          ) : (
            <ul>
              {records.map((record) => (
                <li key={record.id}>
                  <strong>{record.type}</strong> : {record.entryTime}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClockDisplay;