
import { useState, useEffect } from 'react';
import './LiveClock.css';

function LiveClock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="clock-container">
      <h1>Live Clock</h1>

      <h2>{currentTime.toLocaleTimeString()}</h2>

      <p>{currentTime.toLocaleDateString()}</p>

      <p className="clock-message">
        This clock updates every second using React useEffect!
      </p>
    </div>
  );
}

export default LiveClock;
