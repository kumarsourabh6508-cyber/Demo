
import { useEffect, useState } from "react";
import '../Styles/Alarm.css'

function Alarm() {
  const [task, setTask] = useState("");
  const [minutes, setMinutes] = useState("");
  const [remainingTime, setRemainingTime] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  // Timer start karna
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") {
      alert("Please task enter karo");
      return;
    }

    if (minutes === "" || Number(minutes) <= 0) {
      alert("Please valid minutes enter karo");
      return;
    }

    const totalSeconds = Number(minutes) * 60;

    setRemainingTime(totalSeconds);
    setIsRunning(true);
  };

  // Countdown timer
  useEffect(() => {
    if (!isRunning || remainingTime === null) return;

    const timer = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 1) {
          clearInterval(timer);

          setIsRunning(false);

          alert(`⏰ Time Complete!\nTask: ${task}`);

          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, remainingTime, task]);

  // Minutes calculate karna
  const displayMinutes = Math.floor(
    (remainingTime || 0) / 60
  );

  // Seconds calculate karna
  const displaySeconds = (remainingTime || 0) % 60;

  // Timer stop karna
  const handleStop = () => {
    setIsRunning(false);
  };

  // Timer reset karna
  const handleReset = () => {
    setIsRunning(false);
    setRemainingTime(null);
    setTask("");
    setMinutes("");
  };

  return (
    <div className="app">

      <h1>⏰ Reminder Timer</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter your task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter minutes..."
          min="1"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
        />

        <button type="submit">
          Start Timer
        </button>

      </form>

      {remainingTime !== null && (
        <div className="timer-box">

          <h2>{task}</h2>

          <h3>
            {String(displayMinutes).padStart(2, "0")} :
            {String(displaySeconds).padStart(2, "0")}
          </h3>

          <div className="buttons">

            <button
              onClick={handleStop}
              disabled={!isRunning}
            >
              Stop
            </button>

            <button onClick={handleReset}>
              Reset
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default Alarm;