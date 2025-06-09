import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import CircularText from "../components/animations/CircularText";
import '../styles/CountdownGate.scss';

function CountdownGate({ targetDate, onComplete }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({});
  const [finished, setFinished] = useState(false);
  const [skipCountdown, setSkipCountdown] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // On first mount → check if date passed
  useEffect(() => {
    const initialTimeLeft = calculateTimeLeft();
    setTimeLeft(initialTimeLeft);

    if (Object.keys(initialTimeLeft).length === 0) {
      setSkipCountdown(true);
      onComplete();
    }

    setIsReady(true);
  }, []);

  // Countdown timer logic
  useEffect(() => {
    if (skipCountdown) return;

    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft();
      setTimeLeft(updatedTimeLeft);

      if (Object.keys(updatedTimeLeft).length === 0 && !finished) {
        clearInterval(timer);
        setFinished(true);
        gsap.to('.countdown-gate', {
          opacity: 0,
          duration: 1,
          onComplete: () => {
            const gate = document.querySelector('.countdown-gate');
            if (gate) gate.style.display = 'none';
            onComplete();
          },
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [finished, onComplete, skipCountdown]);

  // If not ready yet → render nothing
  if (!isReady) {
    return null;
  }

  // If we are skipping the countdown → render nothing
  if (skipCountdown) {
    return null;
  }

  const formatTime = (value) => String(value).padStart(2, '0');

  return (
    <div className="countdown-gate">
      <div className="title-countdown">
        <CircularText
          text="* ESTE REGALO * SE DESBLOQUEA * EN "
          onHover="pause"
          spinDuration={10}
          className="countdown"
         />
      </div>

      <div className="countdown">
        <div className="countdown-item">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">{formatTime(timeLeft.days)}</div>
              <div className="flip-card-back">{formatTime(timeLeft.days)}</div>
            </div>
          </div>
          <span>DÍAS</span>
        </div>

        <div className="countdown-item">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">{formatTime(timeLeft.hours)}</div>
              <div className="flip-card-back">{formatTime(timeLeft.hours)}</div>
            </div>
          </div>
          <span>HORAS</span>
        </div>

        <div className="countdown-item">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">{formatTime(timeLeft.minutes)}</div>
              <div className="flip-card-back">{formatTime(timeLeft.minutes)}</div>
            </div>
          </div>
          <span>MINUTOS</span>
        </div>

        <div className="countdown-item">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">{formatTime(timeLeft.seconds)}</div>
              <div className="flip-card-back">{formatTime(timeLeft.seconds)}</div>
            </div>
          </div>
          <span>SEGUNDOS</span>
        </div>
      </div>
    </div>
  );
}

export default CountdownGate;
