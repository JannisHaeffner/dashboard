import { useState, useEffect } from "react";

function ClockWidget() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const date =
    now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();

  const time = now.toLocaleTimeString("en-GB");

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Clock</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          Card subtitle
        </h6>
        <p className="card-text">{date}</p>
        <p className="card-text">{time}</p>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </div>
  );
}

setInterval(ClockWidget, 1000);

export default ClockWidget;
