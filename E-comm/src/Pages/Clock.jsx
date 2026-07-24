import React, { useEffect, useState } from "react";

const Clock = () => {
  const [dark, setDark] = useState(true);

  const [time, setTimer] = useState({
    hour: 0,
    minute: 0,
    second: 0,
    period: "AM",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimer((pre) => {
        let { hour, minute, second, period } = pre;

        second++;

        if (second === 60) {
          second = 0;
          minute++;
        }

        if (minute === 60) {
          minute = 0;
          hour++;
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

    return () => clearInterval(timer);
  }, []);

  const format = (num) => String(num).padStart(2, "0");

  return (
    <div
      style={{
        backgroundColor: dark ? "#111827" : "#ffffff",
        color: dark ? "#ffffff" : "#000000",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >

      <h1>
        {format(time.hour)} : {format(time.minute)} : {format(time.second)}{" "}
        {time.period}
      </h1>

      <button onClick={() => setDark(!dark)}>
        {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
};

export default Clock; 





// import { useState, useEffect } from "react";

// function Clock() {
//   const [seconds, setSeconds] = useState(58);
//   const [minutes, setMinutes] = useState(59);
//   const [hours, setHours] = useState(11); // start 12 baje se
//   const [ampm, setAmpm] = useState("AM"); 

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setSeconds((prevSec) => {
//         if (prevSec === 59) {
//           // seconds 60 hue -> minute badhao, seconds 0 karo
//           setMinutes((prevMin) => {
//             if (prevMin === 59) {
//               // minutes 60 hue -> hour badhao, minutes 0 karo
//               setHours((prevHour) => {
//                 if (prevHour === 12) {
//                   // 12 ke baad AM/PM switch, hour 1 se start
//                   setAmpm((prevAmpm) => (prevAmpm === "AM" ? "PM" : "AM"));
//                   return 1;
//                 }
//                 return prevHour + 1;
//               });
//               return 0;
//             }
//             return prevMin + 1;
//           });
//           return 0;
//         }
//         return prevSec + 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer); // cleanup
//   }, []);

//   const pad = (num) => String(num).padStart(2, "0");

//   return (
//     <div>
//       <h1>
//         {pad(hours)}:{pad(minutes)}:{pad(seconds)} {ampm}
//       </h1>
//     </div>
//   );
// }

// export default Clock; 