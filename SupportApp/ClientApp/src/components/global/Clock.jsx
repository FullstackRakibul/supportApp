import React, { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;

  return (
    <div className=" text-center mt-0 flex flex-row items-center justify-around gap-3 ">
      <div className="font-sans text-2xl mb-1">
        {`${formattedHours < 10 ? "0" : ""}${formattedHours}:${
          minutes < 10 ? "0" : ""
        }${minutes}:${seconds < 10 ? "0" : ""}${seconds} ${ampm}`}
      </div>
      <div style={{ fontSize: "1.2em" }}>
        {currentTime.toLocaleDateString()}
      </div>
    </div>
  );
};

export default Clock;
