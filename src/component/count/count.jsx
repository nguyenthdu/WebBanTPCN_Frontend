import React, { useState } from "react";
import "./style.scss";

function Count() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter d-flex align-items-center">
      <h5 className="txt-count pe-3 ps-3">Chọn số lượng: </h5>
      <div className="c-count">
        <button className="btn-left" onClick={handleDecrement}>
          -
        </button>
        <input className="counter-input" type="number" value={count} readOnly />
        <button className="btn-right" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
}

export default Count;
