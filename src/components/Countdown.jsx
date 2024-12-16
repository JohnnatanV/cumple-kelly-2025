import { useState } from "react";

const Countdown = () => {
  const [days, setDays] = useState([]);
  const [hours, setHours] = useState([]);
  const [minutes, setMinutes] = useState([]);
  const [seconds, setSeconds] = useState([]);

  const time = Date();

  // console.log(time);

  return (
    <div className="countdown">
      <h1>Countdown</h1>
      <div className="content">
        <div className="box">
          <div className="value">
            <span>30</span>
          </div>
          <span className="label">days</span>
        </div>
        <div className="box">
          <div className="value">
            <span>30</span>
          </div>
          <span className="label">hours</span>
        </div>
        <div className="box">
          <div className="value">
            <span>30</span>
          </div>
          <span className="label">minutes</span>
        </div>
        <div className="box">
          <div className="value">
            <span>30</span>
          </div>
          <span className="label">seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
