import React from 'react'
import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const targetDate = new Date("2026-07-01T00:00:00");

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0",
      ),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0",
      ),
      minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(
        2,
        "0",
      ),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-wrap gap-4">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
      ].map((item, index) => (
        <div
          key={index}
          className="border border-[#e8e2d8] rounded-2xl px-3 py-3 bg-[#fffef9] min-w-[90px]"
        >
          <p className="text-2xl font-light text-[#2c2218]">{item.value}</p>

          <p className="text-xs uppercase tracking-[0.15em] text-[#8b7355] mt-1">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
