import { useState, useEffect } from "react";

const COUNTDOWN_T = new Date("2025-02-19T05:59:59");
// const COUNTDOWN_T = new Date("2024-12-21T23:02:01");

const getTimeLeft = () => {
  const totalTimeLeft = COUNTDOWN_T - new Date();
  const days = Math.max(Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24)), 0);
  const hours = Math.max(
    Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24),
    0,
  );
  const minutes = Math.max(Math.floor((totalTimeLeft / (1000 * 60)) % 60), 0);
  const seconds = Math.max(Math.floor((totalTimeLeft / 1000) % 60), 0);

  return { totalTimeLeft, days, hours, minutes, seconds };
};

const Countdown = ({ onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeleft = getTimeLeft();

      if (updatedTimeleft.totalTimeLeft <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        onComplete();
        return;
      }

      setTimeLeft(updatedTimeleft);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [onComplete]);

  return (
    <div className="countdown">
      <div className="content">
        {Object.entries(timeLeft).map(([label, value]) => {
          if (label === "totalTimeLeft") return null;
          return (
            <div className="box" key={label}>
              <div className="value">
                <span>{value}</span>
              </div>
              <span className="label">{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Countdown;
