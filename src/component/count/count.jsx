import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./style.scss";

function Count({ hidden }) {
  console.log("hidden: " + hidden.hidden);
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);

    if (!isNaN(value) && value >= 1 && value <= 999) {
      setCount(value);
    } else {
      // Nếu giá trị không hợp lệ, giữ nguyên giá trị hiện tại của count hoặc đặt nó là 0
      setCount(1);
    }
  };

  return (
    <div className="counter d-flex align-items-center">
      {hidden === "0" ? (
        <h5 className="txt-count pe-3 ps-3">Chọn số lượng: </h5>
      ) : null}
      <div className="c-count d-flex align-items-center">
        <FaMinus
          className="icon-count m-2"
          onClick={handleDecrement}
          style={count === 1 ? { color: "gray" } : null}
        />
        <input
          className="counter-input"
          type="text"
          value={count}
          onChange={handleChange}
        />
        <FaPlus
          className="icon-count m-2"
          onClick={handleIncrement}
          style={count === 999 ? { color: "gray" } : null}
        />
      </div>
    </div>
  );
}

export default Count;
